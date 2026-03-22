import React from 'react';
import Link from 'next/link';
import { Globe, ShieldAlert } from 'lucide-react';
import styles from './portal.module.css';

export default function DevPortal() {
  return (
    <div className={styles.portalWrapper}>
      {/* L-Jiha dyal l-Public */}
      <Link href="/home" className={`${styles.side} ${styles.publicSide}`}>
        <div className={styles.content}>
          <Globe size={80} className={styles.iconPublic} />
          <h1 className={styles.title}>ACCÈS PUBLIC</h1>
          <p className={styles.desc}>Voir la vitrine du Hackathon</p>
        </div>
      </Link>

      {/* L-Jiha dyal l-Admin */}
      <Link href="/admin/dashboard" className={`${styles.side} ${styles.adminSide}`}>
        <div className={styles.content}>
          <ShieldAlert size={80} className={styles.iconAdmin} />
          <h1 className={styles.title}>ACCÈS ADMIN</h1>
          <p className={styles.desc}>Centre de commandement</p>
        </div>
      </Link>
    </div>
  );
}