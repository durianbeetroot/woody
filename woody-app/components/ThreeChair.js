import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeChair = () => {
    const mountRef = useRef(null);

    useEffect(()=>{
        const currentMount = mountRef.current;
        
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(95, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 2;
        camera.position.y = 1.5;

        camera.rotation.x = -Math.PI / 12;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        renderer.setClearColor(0x000000, 0);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(
        '/models/chair1.glb',
        (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // Animation loop
            const animate = () => {
            requestAnimationFrame(animate);
            model.rotation.y += 0.003; // Rotate the model
            renderer.render(scene, camera);
            };
            animate();
        },
        undefined,
        (error) => {
            console.error('An error happened:', error);
        }
        );

        const handleResize = () => {
            const width = currentMount.clientWidth;
            const height = currentMount.clientHeight;
      
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
          };
      
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            currentMount.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeChair;