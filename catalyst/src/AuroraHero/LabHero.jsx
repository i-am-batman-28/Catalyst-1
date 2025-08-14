import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';

function Planet() {
	const spin = useRef();
	useFrame(() => {
		if (!spin.current) return;
		spin.current.rotation.y += 0.005; // slower, more realistic axial spin
	});
	return (
		<group position={[ -6.2, 2.6, -6 ]} rotation={[0.45, 0.1, 0.0]}>
			<group ref={spin}>
				<mesh>
					<sphereGeometry args={[1.35, 32, 32]} />
					<meshStandardMaterial color={'#8a76ff'} emissive={'#3b2fa1'} emissiveIntensity={0.28} />
				</mesh>
				<mesh rotation={[1.1, 0, 0]}>
					<torusGeometry args={[1.95, 0.05, 8, 64]} />
					<meshBasicMaterial color={'#46c2ff'} />
				</mesh>
			</group>
		</group>
	);
}

function RotatingStars() {
	const ref = useRef();
	useFrame(() => { if (ref.current) ref.current.rotation.z += 0.0006; });
	return (
		<group ref={ref}>
			<Stars radius={75} depth={16} count={1100} factor={3.0} fade speed={0.22} />
		</group>
	);
}

export default function LabHero() {
	return (
		<div className="hero-3d">
			<Canvas camera={{ position: [0, 2.6, 7], fov: 55 }} dpr={[1, 1.5]}
				gl={{ antialias: true, powerPreference: 'high-performance' }}>
				<ambientLight intensity={0.55} />
				<directionalLight position={[5, 7, 5]} intensity={0.9} />
				<RotatingStars />
				<Planet />
				<OrbitControls enableZoom={false} enablePan={false} />
			</Canvas>
		</div>
	);
} 