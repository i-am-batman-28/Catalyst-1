import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, ContactShadows } from '@react-three/drei';

function VoxelBlock({ position = [0,0,0], color = '#46c2ff', size = [1,1,1] }) {
	return (
		<mesh position={position} castShadow receiveShadow>
			<boxGeometry args={size} />
			<meshStandardMaterial color={color} flatShading/>
		</mesh>
	);
}

function VoxelCity() {
	return (
		<group>
			<VoxelBlock position={[0,0.5,0]} size={[1,1,1]} color={'#8a76ff'} />
			<VoxelBlock position={[1.2,1.2,0]} size={[1,2,1]} color={'#46c2ff'} />
			<VoxelBlock position={[-1.4,0.8,0]} size={[1,1.6,1]} color={'#ffd166'} />
			<VoxelBlock position={[2.4,2,0]} size={[1,3,1]} color={'#ff6ad5'} />
			<VoxelBlock position={[-2.2,1.6,0]} size={[1,2.2,1]} color={'#3ad0ff'} />
		</group>
	);
}

export default function PixelHero() {
	return (
		<div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
			<Canvas camera={{ position: [0, 3, 8], fov: 50 }} shadows>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
				<Stars radius={80} depth={20} count={2000} factor={4} fade speed={0.5} />
				<VoxelCity />
				<ContactShadows position={[0,-0.01,0]} opacity={0.35} scale={15} blur={2} far={10} />
				<OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
			</Canvas>
		</div>
	);
} 