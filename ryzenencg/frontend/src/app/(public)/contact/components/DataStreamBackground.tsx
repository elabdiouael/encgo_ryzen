import React from 'react';
import styles from './DataStreamBackground.module.css';

export default function DataStreamBackground() {
  return (
    <div className={styles.streamWrapper}>
      <div className={styles.dataRain}></div>
      <div className={styles.dataRain2}></div>
      <div className={styles.coreGlow}></div>
      <div className={styles.vignette}></div>
    </div>
  );
}