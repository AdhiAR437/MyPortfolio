import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

const nodes = ['#8b5cf6', '#61dafb', '#facc15', '#a3e635', '#60a5fa', '#f87171', '#22d3ee']

export function TechnologyOrbit() {
  const orbit = useRef<Group>(null)
  useFrame((_, delta) => {
    if (orbit.current) orbit.current.rotation.z -= delta * 0.045
  })

  return (
    <group ref={orbit} rotation={[0.85, 0, 0]}>
      <mesh>
        <torusGeometry args={[2.05, 0.006, 6, 96]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.16} />
      </mesh>
      {nodes.map((color, index) => {
        const angle = (index / nodes.length) * Math.PI * 2
        return (
          <mesh key={color} position={[Math.cos(angle) * 2.05, Math.sin(angle) * 2.05, 0]}>
            <octahedronGeometry args={[0.1, 0]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
          </mesh>
        )
      })}
    </group>
  )
}
