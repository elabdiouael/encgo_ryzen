"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './DataVaultBg.module.css';

export default function DataVaultBg() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [matrixLines, setMatrixLines] = useState<{ left: string; duration: string; delay: string; height: string }[]>([]);

  useEffect(() => {
    // Générer 40 khet d l-Matrix b atwal w sra3at mkhtalfa
    setMatrixLines([...Array(40)].map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 4}s`,
      delay: `-${Math.random() * 5}s`, // N-bdaou l-animation mn l-wst bach y-banou deja ta7ou
      height: `${50 + Math.random() * 150}px`
    })));

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && bgRef.current) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 30;
          const y = (e.clientY / window.innerHeight - 0.5) * 30;
          bgRef.current!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.vaultWrapper}>
      {/* L-Khalfia d l-Matrix li k-t-tفاعل m3a l-souris */}
      <div ref={bgRef} className={styles.matrixLayer}>
        {matrixLines.map((line, i) => (
          <div 
            key={i} 
            className={styles.matrixDrop} 
            style={{ 
              left: line.left, 
              animationDuration: line.duration, 
              animationDelay: line.delay,
              height: line.height 
            }}
          ></div>
        ))}
      </div>
      
      {/* Core Glow w l-Dalma d l-Jnab */}
      <div className={styles.coreGlow}></div>
      <div className={styles.vignette}></div>
    </div>
  );
}