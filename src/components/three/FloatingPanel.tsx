import { Float, RoundedBox } from '@react-three/drei'

export type PanelVariant = 'code' | 'api' | 'agent' | 'database'

const panelLines: Record<PanelVariant, Array<[number, number, string]>> = {
  code: [
    [1.25, 0.055, '#a3e635'],
    [1.65, 0.04, '#22d3ee'],
    [1.1, 0.04, '#60a5fa'],
  ],
  api: [
    [1.65, 0.055, '#22d3ee'],
    [0.75, 0.05, '#a3e635'],
    [1.35, 0.04, '#64748b'],
  ],
  agent: [
    [0.8, 0.05, '#a3e635'],
    [1.45, 0.04, '#22d3ee'],
    [1.1, 0.04, '#64748b'],
  ],
  database: [
    [1.55, 0.05, '#60a5fa'],
    [1.35, 0.04, '#22d3ee'],
    [0.9, 0.04, '#a3e635'],
  ],
}

export function FloatingPanel({
  position,
  rotation,
  accent,
  variant,
  scale = 1,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  accent: string
  variant: PanelVariant
  scale?: number
}) {
  return (
    <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.18}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[2.45, 1.4, 0.08]} radius={0.08}>
          <meshStandardMaterial
            color="#0c1727"
            emissive={accent}
            emissiveIntensity={0.07}
            metalness={0.45}
            roughness={0.34}
            transparent
            opacity={0.92}
          />
        </RoundedBox>
        <mesh position={[0, 0.47, 0.055]}>
          <boxGeometry args={[2.15, 0.02, 0.015]} />
          <meshBasicMaterial color={accent} transparent opacity={0.5} />
        </mesh>
        {panelLines[variant].map(([width, height, color], index) => (
          <mesh key={`${variant}-${index}`} position={[-0.3 + index * 0.12, 0.2 - index * 0.25, 0.06]}>
            <boxGeometry args={[width, height, 0.012]} />
            <meshBasicMaterial color={color} transparent opacity={0.85 - index * 0.12} />
          </mesh>
        ))}
        <mesh position={[-0.9, 0.57, 0.06]}>
          <circleGeometry args={[0.045, 12]} />
          <meshBasicMaterial color={accent} />
        </mesh>
      </group>
    </Float>
  )
}
