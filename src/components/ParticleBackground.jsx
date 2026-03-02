import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
    const particlesRef = useRef();
    const count = 80;

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 20;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
        }
        return arr;
    }, []);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
                color="#818cf8"
                size={0.04}
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                sizeAttenuation
            />
        </points>
    );
}

function GlowingOrbs() {
    const orbsData = useMemo(() => {
        const colors = ["#6366f1", "#8b5cf6", "#a78bfa", "#c084fc"];
        return Array.from({ length: 5 }, (_, i) => ({
            position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, -3 - Math.random() * 4],
            scale: Math.random() * 0.6 + 0.3,
            speed: Math.random() * 0.4 + 0.15,
            color: colors[i % colors.length],
        }));
    }, []);

    return (
        <>
            {orbsData.map((orb, i) => (
                <Float key={i} position={orb.position} speed={orb.speed} rotationIntensity={0.2} floatIntensity={0.6}>
                    <mesh scale={orb.scale}>
                        <sphereGeometry args={[1, 24, 24]} />
                        <MeshDistortMaterial color={orb.color} transparent opacity={0.08} distort={0.35} speed={1.2} roughness={0.3} />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.15} />
            <pointLight position={[5, 5, 5]} intensity={0.3} color="#6366f1" />
            <pointLight position={[-5, -3, 3]} intensity={0.2} color="#8b5cf6" />
            <Stars radius={50} depth={50} count={1200} factor={3} saturation={0.4} fade speed={0.3} />
            <FloatingParticles />
            <GlowingOrbs />
        </>
    );
}

export default function ParticleBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} style={{ background: "transparent" }}>
                <Scene />
            </Canvas>
        </div>
    );
}
