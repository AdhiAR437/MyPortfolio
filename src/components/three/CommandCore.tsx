import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

export function CommandCore() {
  const core = useRef<Group>(null)

  useFrame((state, delta) => {
    if (!core.current) return
    core.current.rotation.y += delta * 0.16
    core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.1
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.035
    core.current.scale.setScalar(pulse)
  })

  return (
    <group ref={core}>
      <mesh>
        <icosahedronGeometry args={[0.72, 2]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={1.3}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.34, 2]} />
        <meshStandardMaterial
          color="#d9faff"
          emissive="#22d3ee"
          emissiveIntensity={2.4}
          roughness={0.18}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.03, 0.015, 8, 80]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.65} />
      </mesh>
      <mesh rotation={[0.45, 0.35, 0]}>
        <torusGeometry args={[1.2, 0.012, 8, 80]} />
        <meshBasicMaterial color="#a3e635" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}
