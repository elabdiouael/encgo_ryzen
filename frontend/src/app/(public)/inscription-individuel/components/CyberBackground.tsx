"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CyberBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. S-Sass dyal Three.js
    const scene = new THREE.Scene();
    
    // 🌫️ The Deep Fog: Hada hwa li k-y-3tiha "4km deep", l-moujat k-y-ghbrou f d-dlam
    scene.fog = new THREE.FogExp2(0x03070b, 0.05);

    // 2. L-Camera (K-t-chouf l-te7t 3la l-moujat)
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 4, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 3. L-Moujat (Plane Geometry)
    const geometry = new THREE.PlaneGeometry(100, 100, 50, 50);
    geometry.rotateX(-Math.PI / 2); // N-sert7ou l-Plane

    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff, 
      wireframe: true, // Hadi li k-t-biyen l-Khotout (Cyberpunk Vibe)
      transparent: true,
      opacity: 0.15
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // 4. L-Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // S-Se7r dyal l-Moujat (Math.sin & Math.cos)
      const positions = plane.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        // K-n-bdlou Y (L-3lou) 3la 7ssab l-We9t
        positions[i + 1] = Math.sin(x * 0.3 + t * 0.5) * Math.cos(z * 0.3 + t * 0.5) * 1.5;
      }
      plane.geometry.attributes.position.needsUpdate = true;

      // N-7erkou l-Camera chwiyyyya bach t-3ti i7ssass b t-tiran
      camera.position.z -= 0.01;
      if(camera.position.z < 0) camera.position.z = 10;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />;
}