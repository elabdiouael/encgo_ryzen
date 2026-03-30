import React from 'react';
import styles from './DataCoreBackground.module.css';

export default function DataCoreBackground() {
  return (
    <div className={styles.coreWrapper}>
      {/* L-Chabaka dyal l-Hexagons */}
      <div className={styles.hexGrid}></div>
      
      {/* L-Scanner li kiy-hbet w kiy-tla3 */}
      <div className={styles.scannerLine}></div>
      
      {/* Glow effects f l-jnab */}
      <div className={styles.glowLeft}></div>
      <div className={styles.glowRight}></div>
      
      {/* Noise filter bach y3ti Vibe dyal écran 9dim d l-archives */}
      <div className={styles.noiseOverlay}></div>
    </div>
  );
}