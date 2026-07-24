import { Float, OrbitControls, RoundedBox, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Workspace() {
  return <group rotation={[-.12, -.3, 0]}>
    <Float speed={1.2} rotationIntensity={.25} floatIntensity={.35}><RoundedBox args={[3.7, 2.25, .15]} radius={.12}><meshStandardMaterial color="#101b31" metalness={.65} roughness={.25} /></RoundedBox><mesh position={[0, 0, .09]}><planeGeometry args={[3.25, 1.8]} /><meshStandardMaterial color="#07101f" emissive="#0c4a6e" emissiveIntensity={.45} /></mesh>{[-.52, 0, .52].map((y, i) => <mesh key={y} position={[-.45 + i * .18, y, .105]}><boxGeometry args={[1.7 - i * .25, .055, .02]} /><meshBasicMaterial color={i === 1 ? '#a3e635' : '#22d3ee'} /></mesh>)}</Float>
    <mesh position={[0, -1.35, -.3]} rotation={[.4, 0, 0]}><boxGeometry args={[4.4, .16, 2.3]} /><meshStandardMaterial color="#111827" metalness={.7} /></mesh>
  </group>
}
export default function HeroScene() { return <div className="hero-canvas" aria-hidden="true"><Canvas camera={{ position: [0, .3, 6], fov: 45 }} dpr={[1, 1.5]}><ambientLight intensity={1.4} /><pointLight position={[3, 3, 4]} color="#22d3ee" intensity={18} /><pointLight position={[-3, -2, 3]} color="#a3e635" intensity={8} /><Workspace /><Sparkles count={38} scale={7} size={2} speed={.25} color="#67e8f9" /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.35} /></Canvas></div> }
