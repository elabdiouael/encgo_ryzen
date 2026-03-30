"use client";

import React, { useEffect, useState } from 'react';
import styles from './RegistrationBg.module.css';

interface Props { step: number; }

export default function RegistrationBg({ step }: Props) {
  // State bach n-7fdo les valeurs d l-Math.random() l-Hydration
  const [cubes, setCubes] = useState<{ left: string; animationDelay: string }[]>([]);
  const [synapses, setSynapses] = useState<{ left: string; top: string; animationDelay: string }[]>([]);

  useEffect(() => {
    // K-n-génériw l-Ar9am l-3chwa2iya f Client-Side
    setCubes([...Array(6)].map((_, i) => ({
      left: `${10 + i * 15}%`,
      animationDelay: `${Math.random() * -2}s`
    })));

    setSynapses([...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`
    })));
    
    // 💥 THE MASTER FIX: 7iydna l-MouseMove Parallax Event Listener li kan k-iy-tiye7 l-FPS l-15!
  }, []);

  return (
    <div className={styles.bgContainer} data-scene={step}>
      {/* 💥 FIX: 7iydna l-ref li kan k-y-beddel l-transform f kol 7araka d l-souris */}
      <div className={styles.staticRig}>
        
        {/* PHASE 1: THE QUANTUM CORE (Cyan) */}
        <div className={`${styles.scene} ${styles.scene1}`}>
          <div className={styles.quantumGrid}></div>
          <div className={styles.floatingCubes}>
            {cubes.map((style, i) => (
              <div key={i} className={styles.cube} style={style}></div>
            ))}
          </div>
          <div className={styles.coreGlowCyan}></div>
        </div>

        {/* PHASE 2: NEURAL SYNAPSES (Magenta) */}
        <div className={`${styles.scene} ${styles.scene2}`}>
          <div className={styles.neuralNetwork}>
            {synapses.map((style, i) => (
              <div key={i} className={styles.synapse} style={style}></div>
            ))}
          </div>
          <div className={styles.coreGlowMagenta}></div>
        </div>

        {/* PHASE 3: AMBER MATRIX (Orange) */}
        <div className={`${styles.scene} ${styles.scene3}`}>
          <div className={styles.matrixRainAmber}></div>
          <div className={styles.coreGlowAmber}></div>
        </div>

        {/* PHASE 4: SECURE VAULT (Green) */}
        <div className={`${styles.scene} ${styles.scene4}`}>
          <div className={styles.radarSweep}></div>
          <div className={styles.lockRings}>
            <div className={styles.ring1}></div>
            <div className={styles.ring2}></div>
          </div>
          <div className={styles.coreGlowGreen}></div>
        </div>

      </div>
    </div>
  );
}