import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import type { Group } from 'three'
import { CommandCore } from './CommandCore'
import { DataConnections } from './DataConnections'
import { FloatingPanel } from './FloatingPanel'
import { SceneParticles } from './SceneParticles'
import { TechnologyOrbit } from './TechnologyOrbit'

function ReadySignal({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    const frame = requestAnimationFrame(onReady)
    return () => cancelAnimationFrame(frame)
  }, [onReady])
  return null
}

function CommandCenterRig() {
  const rig = useRef<Group>(null)
  useFrame((state, delta) => {
    if (!rig.current) return
    const targetX = state.pointer.y * 0.09
    const targetY = state.pointer.x * 0.13
    rig.current.rotation.x += (targetX - rig.current.rotation.x) * Math.min(1, delta * 2.2)
    rig.current.rotation.y += (targetY - rig.current.rotation.y) * Math.min(1, delta * 2.2)
  })

  return (
    <group ref={rig} scale={0.88}>
      <CommandCore />
      <DataConnections />
      <TechnologyOrbit />
      <FloatingPanel
        position={[-2.75, 0.5, -0.35]}
        rotation={[0.03, 0.28, -0.04]}
        accent="#22d3ee"
        variant="code"
        scale={0.88}
      />
      <FloatingPanel
        position={[2.75, 0.5, -0.35]}
        rotation={[0.03, -0.28, 0.04]}
        accent="#60a5fa"
        variant="api"
        scale={0.88}
      />
      <FloatingPanel
        position={[0.5, 2.15, -0.55]}
        rotation={[0.16, -0.06, -0.03]}
        accent="#a3e635"
        variant="agent"
        scale={0.72}
      />
      <FloatingPanel
        position={[0, -2.05, -0.25]}
        rotation={[-0.12, 0.06, 0]}
        accent="#22d3ee"
        variant="database"
        scale={0.76}
      />
      <SceneParticles />
    </group>
  )
}

export default function HeroCommandCenter({
  onReady,
  active,
}: {
  onReady: () => void
  active: boolean
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.1, 8.2], fov: 48 }}
      dpr={[1, 1.45]}
      frameloop={active ? 'always' : 'demand'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ReadySignal onReady={onReady} />
      <ambientLight intensity={0.72} />
      <pointLight position={[0, 0, 4]} color="#22d3ee" intensity={14} />
      <pointLight position={[-4, 2, 3]} color="#3b82f6" intensity={8} />
      <pointLight position={[3, -3, 2]} color="#a3e635" intensity={5} />
      <CommandCenterRig />
    </Canvas>
  )
}
