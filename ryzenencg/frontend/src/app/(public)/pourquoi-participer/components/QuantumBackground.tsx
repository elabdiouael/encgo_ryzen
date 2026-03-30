import React from 'react';
import styles from './QuantumBackground.module.css';

export default function QuantumBackground() {
  return (
    <div className={styles.quantumWrapper}>
      <div className={styles.gridFade}></div>
      <div className={styles.particle} style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
      <div className={styles.particle} style={{ top: '70%', left: '80%', animationDelay: '2s' }}></div>
      <div className={styles.particle} style={{ top: '40%', left: '60%', animationDelay: '4s' }}></div>
      <div className={styles.particle} style={{ top: '80%', left: '30%', animationDelay: '1s' }}></div>
      
      <div className={styles.glowCore}></div>
    </div>
  );
}