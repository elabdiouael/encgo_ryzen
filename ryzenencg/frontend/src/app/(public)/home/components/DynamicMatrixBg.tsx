"use client";

import React, { useEffect, useRef } from 'react';
import styles from './DynamicMatrixBg.module.css';

export default function DynamicMatrixBg({ activeNode }: { activeNode: string | null }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && bgRef.current) {
        window.requestAnimationFrame(() => {
          // L-Khalfia k-t-t7errek m3a l-souris b 3D
          const x = (e.clientX / window.innerWidth - 0.5) * 50;
          const y = (e.clientY / window.innerHeight - 0.5) * 50;
          bgRef.current!.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${y * 0.1}deg) rotateY(${x * -0.1}deg)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.bgWrapper}>
      <div ref={bgRef} className={styles.cyberRealm}>
        {/* L-Grid k-t-zid f sser3a ila kan activeNode */}
        <div className={`${styles.warpGrid} ${activeNode ? styles.warpSpeed : ''}`}></div>
        
        {/* L-Glow l-Wstani k-y-tbeddel lounou b CSS Variables */}
        <div className={`${styles.coreReactor} ${activeNode ? styles.coreExplode : ''}`}></div>
        
        <div className={styles.particleSystem}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`${styles.spark} ${activeNode ? styles.sparkFast : ''}`} 
                 style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}></div>
          ))}
        </div>
      </div>
      <div className={styles.vignette}></div>
    </div>
  );
}