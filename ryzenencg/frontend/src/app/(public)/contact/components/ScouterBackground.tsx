import React from 'react';
import styles from './ScouterBackground.module.css';

export default function ScouterBackground() {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.tacticalGrid}></div>
      <div className={styles.saiyanAura}></div>
      <div className={styles.crosshair1}></div>
      <div className={styles.crosshair2}></div>
    </div>
  );
}