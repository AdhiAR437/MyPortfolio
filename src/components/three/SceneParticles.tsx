import { Points, PointMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Points as ThreePoints } from 'three'

export function SceneParticles({ count = 42 }: { count?: number }) {
  const points = useRef<ThreePoints>(null)
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      const angle = index * 2.399
      const radius = 1.8 + ((index * 17) % 25) / 10
      values[index * 3] = Math.cos(angle) * radius
      values[index * 3 + 1] = Math.sin(angle * 1.4) * 2.4
      values[index * 3 + 2] = -1.2 + ((index * 13) % 20) / 10
    }
    return values
  }, [count])

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.018
  })

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#67e8f9" size={0.025} sizeAttenuation depthWrite={false} opacity={0.48} />
    </Points>
  )
}
