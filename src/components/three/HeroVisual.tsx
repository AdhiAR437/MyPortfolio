import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { TechnologyIcon } from '../../lib/TechnologyIcon'
import { ErrorBoundary } from '../common/ErrorBoundary'
import { HeroFallback } from './HeroFallback'
import { HeroVisualLoader } from './HeroVisualLoader'

const HeroCommandCenter = lazy(() => import('./HeroCommandCenter'))

function supportsWebGl() {
  const canvas = document.createElement('canvas')
  return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
}

function prefersLightweightRendering() {
  const device = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean }
  }
  return Boolean(
    (device.deviceMemory !== undefined && device.deviceMemory <= 4) ||
      device.connection?.saveData,
  )
}

export function HeroVisual() {
  const frame = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [desktop, setDesktop] = useState(() => window.matchMedia('(min-width: 768px)').matches)
  const [active, setActive] = useState(true)
  const [webgl] = useState(supportsWebGl)
  const [lowPower] = useState(prefersLightweightRendering)
  const [ready, setReady] = useState(false)
  const onReady = useCallback(() => setReady(true), [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const update = (event: MediaQueryListEvent) => setDesktop(event.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const element = frame.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '120px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const enhanced = desktop && webgl && !reducedMotion && !lowPower

  return (
    <div
      ref={frame}
      className="hero-visual-frame command-center-frame"
      role="img"
      aria-label="Interactive AI Engineering Command Center connecting frontend, backend APIs, an AI agent, databases, and cloud services"
    >
      <div className="visual-label">
        <span>AI Engineering Command Center</span>
        <i>{enhanced ? (ready ? 'Systems online' : 'Initializing') : 'Lightweight mode'}</i>
      </div>
      {enhanced ? (
        <ErrorBoundary fallback={<HeroFallback />}>
          <div className={`hero-canvas-layer ${ready ? 'is-ready' : ''}`} aria-hidden="true">
            <Suspense fallback={null}>
              <HeroCommandCenter onReady={onReady} active={active} />
            </Suspense>
            <div className="command-hud">
              <div className="hud-panel hud-code">
                <span>CODE PIPELINE</span>
                <code>BuildAsync() → Deliver()</code>
              </div>
              <div className="hud-panel hud-api">
                <span>API GATEWAY</span>
                <code>POST /agent • 200 OK</code>
              </div>
              <div className="hud-panel hud-agent">
                <span>AI AGENT</span>
                <code>RAG → Tool → Response</code>
              </div>
              <div className="hud-panel hud-data">
                <span>DATA LAYER</span>
                <code>SQL • EF Core • Workflows</code>
              </div>
              <div className="command-tech-node tech-dotnet">
                <TechnologyIcon iconKey="dotnet" name=".NET" size={19} labelled />
              </div>
              <div className="command-tech-node tech-react">
                <TechnologyIcon iconKey="react" name="React" size={19} labelled />
              </div>
              <div className="command-tech-node tech-python">
                <TechnologyIcon iconKey="python" name="Python" size={19} labelled />
              </div>
              <div className="command-tech-node tech-cloud">
                <TechnologyIcon iconKey="cloud" name="Cloud" size={19} labelled />
              </div>
            </div>
          </div>
          <div className={`hero-loader-layer ${ready ? 'is-hidden' : ''}`}>
            <HeroVisualLoader />
          </div>
        </ErrorBoundary>
      ) : (
        <HeroFallback />
      )}
    </div>
  )
}
