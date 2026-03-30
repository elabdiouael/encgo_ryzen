"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './QuantumBackground.module.css';

interface ParticleStyle { left: string; top: string; animationDelay: string; animationDuration: string; }

export default function QuantumBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    // 🔥 N9essna l-particules l 12 bach l-GPU y-tneffes
    setParticles([...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`, animationDuration: `${8 + Math.random() * 10}s`
    })));

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            bgRef.current.style.setProperty('--mouse-x', `${x}`);
            bgRef.current.style.setProperty('--mouse-y', `${y}`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={bgRef} className={styles.quantumCore} style={{ willChange: 'transform' }}>
      <div className={styles.ambientNebula}></div>
      <div className={styles.grid3D}></div>
      <div className={styles.particleSystem}>
        {particles.map((style, i) => <div key={i} className={styles.particle} style={style}></div>)}
      </div>
    </div>
  );
}