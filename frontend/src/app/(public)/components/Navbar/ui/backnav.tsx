import React from 'react';
import styles from './NavBackground.module.css';

export default function backnav() {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.matrixGrid}></div>
      <div className={styles.scannerLine}></div>
      <div className={styles.particlesContainer}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
    </div>
  );
}