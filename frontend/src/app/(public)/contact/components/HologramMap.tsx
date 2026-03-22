import React from 'react';
import { Target } from 'lucide-react';
import styles from './HologramMap.module.css';

export default function HologramMap() {
  return (
    <div className={styles.hologramContainer}>
      <div className={styles.globe3D}>
        <div className={styles.equator}></div>
        <div className={styles.meridian}></div>
        <div className={styles.radarSweep}></div>
        
        {/* L-Point d l-ENCG Oujda */}
        <div className={styles.oujdaTarget}>
          <Target size={24} className={styles.targetIcon} />
          <div className={styles.ping}></div>
          <span className={styles.targetLabel}>HQ_OUJDA</span>
        </div>
      </div>
      <div className={styles.hologramBase}></div>
    </div>
  );
}