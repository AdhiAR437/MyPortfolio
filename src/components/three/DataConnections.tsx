import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

const routes: Array<[[number, number, number], [number, number, number], string]> = [
  [[0, 0, 0], [-2.7, 0.45, -0.25], '#22d3ee'],
  [[0, 0, 0], [2.7, 0.45, -0.25], '#60a5fa'],
  [[0, 0, 0], [0.5, 2.15, -0.45], '#a3e635'],
  [[0, 0, 0], [0, -2.05, -0.2], '#22d3ee'],
  [[0, -2.05, -0.2], [2.25, -2.35, -0.8], '#60a5fa'],
]

function DataPulse({
  start,
  end,
  color,
  offset,
}: {
  start: [number, number, number]
  end: [number, number, number]
  color: string
  offset: number
}) {
  const pulse = useRef<Mesh>(null)
  useFrame((state) => {
    if (!pulse.current) return
    const progress = (state.clock.elapsedTime * 0.16 + offset) % 1
    pulse.current.position.set(
      start[0] + (end[0] - start[0]) * progress,
      start[1] + (end[1] - start[1]) * progress,
      start[2] + (end[2] - start[2]) * progress,
    )
  })
  return (
    <mesh ref={pulse}>
      <sphereGeometry args={[0.045, 10, 10]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

export function DataConnections() {
  return (
    <group>
      {routes.map(([start, end, color], index) => (
        <group key={`${start.join('-')}-${end.join('-')}`}>
          <Line points={[start, end]} color={color} lineWidth={0.7} transparent opacity={0.34} />
          <DataPulse start={start} end={end} color={color} offset={index * 0.19} />
        </group>
      ))}
    </group>
  )
}
