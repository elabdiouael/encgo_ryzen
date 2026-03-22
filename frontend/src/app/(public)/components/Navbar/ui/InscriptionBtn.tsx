import React from 'react';
import Link from 'next/link';
import { Power } from 'lucide-react';
import styles from './InscriptionBtn.module.css';

export default function InscriptionBtn() {
  return (
    <Link href="/inscription" className={styles.morphBtn}>
      <span className={styles.iconContainer}>
        <Power size={18} className={styles.powerIcon} />
      </span>
      {/* 🔥 French Text */}
      <span className={styles.btnText}>S_INSCRIRE</span>
      <div className={styles.btnBorders}>
        <span></span><span></span><span></span><span></span>
      </div>
    </Link>
  );
}