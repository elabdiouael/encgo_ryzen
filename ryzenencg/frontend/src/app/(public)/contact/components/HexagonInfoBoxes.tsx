import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './HexagonInfoBoxes.module.css';

export default function HexagonInfoBoxes() {
  return (
    <div className={styles.hexGrid}>
      <div className={`${styles.hexCard} ${styles.delay1}`}>
        <div className={styles.hexInner}>
          <MapPin size={28} className={styles.hexIcon} />
          <h4>LOCALISATION</h4>
          <p>ENCG Oujda</p>
        </div>
      </div>
      
      <div className={`${styles.hexCard} ${styles.delay2}`}>
        <div className={styles.hexInner}>
          <Mail size={28} className={styles.hexIcon} />
          <h4>RÉSEAU EMAIL</h4>
          <p>contact@ryzen.ma</p>
        </div>
      </div>

      <div className={`${styles.hexCard} ${styles.delay3}`}>
        <div className={styles.hexInner}>
          <Phone size={28} className={styles.hexIcon} />
          <h4>FRÉQUENCE</h4>
          <p>+212 6 00 00 00</p>
        </div>
      </div>
    </div>
  );
}