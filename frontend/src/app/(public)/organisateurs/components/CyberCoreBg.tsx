import React from 'react';
import styles from './CyberCoreBg.module.css';

export default function CyberCoreBg() {
  return (
    <div className={styles.coreBg}>
      <div className={styles.ambientLight}></div>
      <div className={styles.gridPlane}></div>
      
      {/* 🔥 LES ANNEAUX ROTATIFS (IA CORE) */}
      <div className={styles.ringsContainer}>
        <div className={styles.ring1}></div>
        <div className={styles.ring2}></div>
        <div className={styles.ring3}></div>
      </div>

      {/* 🔥 DATA STREAM (Khtouta d l-Matrix) */}
      <div className={styles.dataStreams}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.streamLine} style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 2}s`
          }}></div>
        ))}
      </div>
    </div>
  );
}