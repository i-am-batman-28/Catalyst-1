import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

function ParticleStream({ count = 5000 }) {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.000001 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 40;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;
      
      const t = (particle.time += speed);

      dummy.position.set(
        x + Math.cos(t) + (Math.sin(t * 1) / 10),
        y + Math.sin(t) + (Math.cos(t * 2) / 10),
        z + Math.cos(t) + (Math.sin(t * 3) / 10)
      );
      
      const s = Math.max(0.1, Math.abs(Math.sin(t * 0.5)));
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial color="#f0f0f0" emissive="#ffffff" emissiveIntensity={0.3} roughness={0.2} metalness={0.7} />
    </instancedMesh>
  );
}

export default ParticleStream;
