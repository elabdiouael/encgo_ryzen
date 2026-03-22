"use client";

import React, { useEffect, useState } from 'react';
import QuantumBackground from './components/QuantumBackground';
import AboutCore from './components/AboutCore';
import styles from './about.module.css';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    // RequestAnimationFrame bach y-koun l-scroll extreeemement smooth
    window.addEventListener('scroll', () => requestAnimationFrame(handleScroll), { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.pageArchitect}>
      
      {/* L-Background L-7ey (K-iy-b9a Fixe w k-iy-tفاعل m3a l-souris) */}
      <QuantumBackground />

      {/* L-Contenu m3a Scroll Parallax (K-iy-t7erek 3ks l-scroll) */}
      <div 
        className={styles.parallaxWrapper}
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      >
        <AboutCore />
      </div>

    </div>
  );
}