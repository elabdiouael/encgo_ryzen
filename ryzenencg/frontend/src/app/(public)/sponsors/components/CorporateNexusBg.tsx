import React from 'react';
import styles from './CorporateNexusBg.module.css';

export default function CorporateNexusBg() {
  return (
    <div className={styles.nexusWrapper}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.glowingOrb1}></div>
      <div className={styles.glowingOrb2}></div>
      <div className={styles.connectingLines}></div>
    </div>
  );
}