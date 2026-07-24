import { lazy, Suspense, useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, BriefcaseBusiness } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolio } from '../../data/portfolio'
import { ErrorBoundary } from '../common/ErrorBoundary'
import { SocialLinks } from '../common/SocialLinks'
import { HeroFallback } from '../three/HeroFallback'

const HeroScene = lazy(() => import('../three/HeroScene'))
export function Hero() {
  const reduced = useReducedMotion(); const [role, setRole] = useState(0); const [webglAvailable] = useState(() => { const canvas = document.createElement('canvas'); return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl')) })
  const canRender3d = webglAvailable && !reduced && window.innerWidth >= 768
  useEffect(() => { if (reduced) return; const timer = window.setInterval(() => setRole((value) => (value + 1) % portfolio.roles.length), 3200); return () => clearInterval(timer) }, [reduced])
  return <section id="home" className="hero wrap"><motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
    <div className="focus-badge"><BriefcaseBusiness size={15} /> {portfolio.personal.focus}</div>
    <p className="kicker">Hello, I’m {portfolio.personal.name}</p><h1>{portfolio.personal.headline}</h1>
    <p className="role-line">{portfolio.personal.role} <span aria-live="polite">/ {portfolio.roles[role]}</span></p><p className="hero-intro">{portfolio.personal.intro}</p>
    <div className="hero-actions"><a className="button primary" href="#projects">View my work <ArrowRight size={18} /></a><a className="button secondary" href="#experience">Explore experience</a></div><SocialLinks />
  </motion.div><div className="hero-visual"><ErrorBoundary fallback={<HeroFallback />}>{canRender3d ? <Suspense fallback={<HeroFallback />}><HeroScene /></Suspense> : <HeroFallback />}</ErrorBoundary></div>
  <a className="scroll-cue" href="#snapshot" aria-label="Scroll to recruiter snapshot"><ArrowDown /></a></section>
}
