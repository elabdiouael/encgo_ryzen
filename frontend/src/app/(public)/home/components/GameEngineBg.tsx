"use client";

import React, { useEffect, useRef } from 'react';
import styles from './GameEngineBg.module.css';

interface GameEngineBgProps { activeTab: string; }

export default function GameEngineBg({ activeTab }: GameEngineBgProps) {
  const engineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && engineRef.current) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 2;
          const y = (e.clientY / window.innerHeight - 0.5) * 2;
          engineRef.current!.style.setProperty('--cam-x', `${x}`);
          engineRef.current!.style.setProperty('--cam-y', `${y}`);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.gameViewport} data-scene={activeTab}>
      <div ref={engineRef} className={styles.cameraRig}>
        
        {/* 1. SCENE: BROADCAST (Cyber Globe) */}
        <div className={`${styles.scene} ${styles.sceneDefault}`}>
          <div className={styles.earthGlobe}>
            <div className={styles.globeGlow}></div>
            <div className={styles.globeRingX}></div>
            <div className={styles.globeRingY}></div>
            <div className={styles.globeRingZ}></div>
          </div>
          <div className={styles.cyberFloor}></div>
        </div>

        {/* 🚨 2. SCENE: REGISTER (L-MHEYBA TUNNEL L-7MER) 🚨 */}
        <div className={`${styles.scene} ${styles.sceneRegister}`}>
          <div className={styles.warpTunnel}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.warpRingRed} style={{ animationDelay: `${i * -0.5}s` }}></div>
            ))}
          </div>
        </div>

        {/* ⏳ 3. SCENE: ARCHIVE (L-MHEYBA TUNNEL L-LIMOUNI/ORANGE) ⏳ */}
        <div className={`${styles.scene} ${styles.sceneArchive}`}>
          <div className={styles.warpTunnel}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className={styles.warpRingAmber} style={{ animationDelay: `${i * -0.4}s` }}></div>
            ))}
          </div>
          <div className={styles.vaultCore}></div>
        </div>

        {/* 4. SCENE: ABOUT (Neural Network) */}
        <div className={`${styles.scene} ${styles.sceneAbout}`}>
          <div className={styles.neuralNet}>
            <div className={`${styles.node} ${styles.node1}`}></div>
            <div className={`${styles.node} ${styles.node2}`}></div>
            <div className={`${styles.node} ${styles.node3}`}></div>
          </div>
        </div>

        {/* 🎯 5. SCENE: WHY (L-MHEYBA GOLDEN ASTROLABE) 🎯 */}
        <div className={`${styles.scene} ${styles.sceneWhy}`}>
          <div className={styles.goldenAstrolabe}>
             <div className={styles.astroRing} style={{ transform: 'rotateX(70deg)', animation: 'spinZ 10s linear infinite' }}></div>
             <div className={styles.astroRing} style={{ transform: 'rotateY(70deg)', animation: 'spinX 12s linear infinite reverse' }}></div>
             <div className={styles.astroRing} style={{ transform: 'rotateZ(70deg)', animation: 'spinY 15s linear infinite' }}></div>
             <div className={styles.goldGlow}></div>
          </div>
        </div>

      </div>
      <div className={styles.screenVignette}></div>
    </div>
  );
}