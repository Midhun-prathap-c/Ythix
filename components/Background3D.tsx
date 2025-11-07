import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const currentMount = mountRef.current;

        // Scene, Camera, Renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentMount.appendChild(renderer.domElement);
        
        // Particle texture for nebula
        const createParticleTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const context = canvas.getContext('2d');
            if (!context) return null;
            const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
            gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
            gradient.addColorStop(0.2, 'rgba(255,255,255,0.3)');
            gradient.addColorStop(0.5, 'rgba(255,255,255,0.1)');
            gradient.addColorStop(1, 'rgba(255,255,255,0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 128, 128);
            return new THREE.CanvasTexture(canvas);
        };
        const particleTexture = createParticleTexture();


        // 1. Distant Starfield
        const starGeometry = new THREE.BufferGeometry();
        const starVertices: number[] = [];
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 1) * 1000;
            starVertices.push(x, y, z);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const starMaterial = new THREE.PointsMaterial({
            size: 0.5,
            color: 0xaaaaaa,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // 2. Colorful Nebula / Cosmic Dust
        const nebulaGeometry = new THREE.BufferGeometry();
        const nebulaVertices: number[] = [];
        const nebulaColors: number[] = [];
        const nebulaColor = new THREE.Color();
        for (let i = 0; i < 500; i++) {
            const x = (Math.random() - 0.5) * 1000;
            const y = (Math.random() - 0.5) * 1000;
            const z = (Math.random() - 0.5) * 1000;
            nebulaVertices.push(x, y, z);
            // Colors: deep blues, purples, teals
            nebulaColor.setHSL(Math.random() * 0.3 + 0.55, 0.9, 0.5);
            nebulaColors.push(nebulaColor.r, nebulaColor.g, nebulaColor.b);
        }
        nebulaGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nebulaVertices, 3));
        nebulaGeometry.setAttribute('color', new THREE.Float32BufferAttribute(nebulaColors, 3));
        const nebulaMaterial = new THREE.PointsMaterial({
            size: 80,
            map: particleTexture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true,
            sizeAttenuation: true
        });
        const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
        scene.add(nebula);


        // Mouse move interaction
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) - 0.5;
            mouse.y = (event.clientY / window.innerHeight) - 0.5;
        };
        window.addEventListener('mousemove', handleMouseMove);


        // Animation loop
        let animationFrameId: number;
        const clock = new THREE.Clock();
        const animate = () => {
            const delta = clock.getDelta();
            
            // Move stars forward
            const starPositions = starGeometry.attributes.position.array as Float32Array;
            for (let i = 0; i < starPositions.length; i += 3) {
                starPositions[i + 2] += 0.5;
                if (starPositions[i + 2] > camera.position.z + 999) {
                    starPositions[i + 2] = -1000; 
                }
            }
            starGeometry.attributes.position.needsUpdate = true;
            
            // Slowly drift/rotate nebula
            nebula.rotation.y += delta * 0.02;

            // Subtle parallax effect based on mouse position
            stars.rotation.y = mouse.x * 0.2;
            stars.rotation.x = mouse.y * 0.2;
            nebula.rotation.y += mouse.x * 0.05;
            nebula.rotation.x += mouse.y * 0.05;
            
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            starGeometry.dispose();
            starMaterial.dispose();
            nebulaGeometry.dispose();
            nebulaMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-50" />;
};

export default Background3D;