"use client";

import React from 'react';
import { Radio, Zap } from 'lucide-react';
import styles from './BroadcastHologram.module.css';

export default function BroadcastHologram() {
  return (
    <div className={styles.hologramWrapper}>
      {/* L-Khet l-Laser li k-iy-msse7 l-Hologramme */}
      <div className={styles.scanline}></div>
      
      <div className={styles.header}>
        <div className={styles.pulseDot}></div>
        <span className={styles.title}><Radio size={16} className={styles.iconSpin} /> INCOMING_BROADCAST</span>
      </div>

      <h2 className={styles.mainHeading}>
        APPEL À CANDIDATURES <br/>
        <span className={styles.cyberHack}>ORIENTAL_HACK 2.0</span>
      </h2>

      <div className={styles.textContent}>
        <p className={styles.intro}>
          <strong className={styles.highlight}>L’Oriental Hackathon 2.0 lance officiellement son appel à candidatures.</strong> Étudiants, développeurs, designers, entrepreneurs et passionnés d’innovation sont invités à relever le défi autour du thème :
        </p>
        
        <blockquote className={styles.quoteBlock}>
          « Intelligence artificielle et innovation au service des entreprises et des organisations de l’économie sociale et solidaire pour une croissance inclusive et durable ».
        </blockquote>

        <p>
          Durant trois jours d’intelligence collective, les participants collaboreront pour concevoir des <strong className={styles.highlightPurple}>solutions digitales innovantes</strong> capables de répondre aux défis sociaux et économiques actuels. Encadrés par des mentors et des experts, ils auront l’opportunité de transformer leurs idées en <strong className={styles.highlight}>projets concrets à fort impact</strong>.
        </p>

        <div className={styles.ctaAlert}>
          <Zap size={20} className={styles.iconYellow} />
          <p>Rejoignez cette expérience unique et contribuez à imaginer les solutions technologiques qui façonneront un avenir plus inclusif et durable.</p>
        </div>
      </div>
    </div>
  );
}