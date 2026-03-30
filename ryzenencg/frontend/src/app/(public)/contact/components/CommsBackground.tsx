import React from 'react';
import styles from './CommsBackground.module.css';

export default function CommsBackground() {
  return (
    <div className={styles.commsWrapper}>
      <div className={styles.gridLayer}></div>
      <div className={styles.signalWaves}></div>
      <div className={styles.node1}></div>
      <div className={styles.node2}></div>
      <div className={styles.node3}></div>
      
      {/* Noise filter bach y3ti Vibe dyal transmission */}
      <div className={styles.noiseOverlay}></div>
    </div>
  );
}