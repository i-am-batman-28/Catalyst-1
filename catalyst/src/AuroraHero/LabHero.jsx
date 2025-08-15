import { Canvas, useFrame } from '@react-three/fiber';
import ParticleStream from './ParticleStream.jsx';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';

function Planet() {
	const spin = useRef();
	useFrame(() => {
		if (!spin.current) return;
		spin.current.rotation.y += 0.005; // slower, more realistic axial spin
	});
	return (
		<group position={[ 0, 0, 0 ]} rotation={[0.0, 0.0, 0.0]}>
			<group ref={spin}>
				<ParticleStream count={7000} />
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
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const onScroll = () => {
            const hero = document.getElementById('hero');
            const heroH = hero ? hero.offsetHeight : window.innerHeight;
            const y = window.scrollY;
            const t = Math.max(0, Math.min(1, 1 - y / (heroH * 0.6)));
            setOpacity(t);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="hero-3d" style={{ opacity }}>
            <Canvas 
                camera={{ position: [0, 2.6, 7], fov: 55 }} 
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                style={{ width: '100%', height: '100%' }}
            >
                <ambientLight intensity={0.55} />
                <directionalLight position={[5, 7, 5]} intensity={0.9} />
                <RotatingStars />
                <Planet />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
} 