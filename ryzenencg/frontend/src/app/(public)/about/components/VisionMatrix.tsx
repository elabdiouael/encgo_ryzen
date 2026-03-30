"use client";

import React, { useState, useRef } from 'react';
import { Target, Zap, Globe } from 'lucide-react';
import styles from './VisionMatrix.module.css';

export default function VisionMatrix() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calcul de l'inclinaison 3D
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={styles.matrixContainer}>
      <div 
        ref={cardRef}
        className={styles.glassHoloCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* Effet de reflet sur le verre qui suit la souris */}
        <div className={styles.glassReflection} style={{ transform: `translate(${tilt.y * 2}px, ${-tilt.x * 2}px)` }}></div>

        <div className={styles.cardHeader}>
          <div className={styles.cyberBadge}><Target size={14} /> MISSION_CORE</div>
          <h2 className={styles.mainTitle}>
            L'ÉPICENTRE DE <br /> <span className={styles.highlight}>L'INNOVATION</span>
          </h2>
        </div>

        <div className={styles.textContent}>
          <p className={styles.animText1}>
            <strong className={styles.textCyan}>OrientalHack 2.0</strong> célèbre et valorise les talents des <span className={styles.textPurple}>jeunes marocains</span>, 
            en utilisant l’<strong className={styles.textNeon}>intelligence artificielle</strong> et l’innovation digitale pour répondre aux besoins 
            des entreprises et organisations de l’économie sociale et solidaire.
          </p>
          <p className={styles.animText2}>
            Ce hackathon offre un espace unique de collaboration et de création, où les jeunes peuvent transformer 
            leurs idées en solutions concrètes à <strong className={styles.textPurple}>fort impact pour la région de l’Oriental</strong> et le Maroc.
          </p>
          <p className={styles.animText3}>
            En stimulant leur créativité, leur esprit d’initiative et leur capacité à innover, OrientalHack affirme que 
            les jeunes marocains sont les <strong className={styles.textCyan}>véritables acteurs du changement</strong> et de l’avenir technologique et social du pays.
          </p>
        </div>

        <div className={styles.statsFooter}>
          <div className={styles.statItem}><Zap size={18} className={styles.iconCyan}/> IA & DIGITAL</div>
          <div className={styles.statItem}><Globe size={18} className={styles.iconPurple}/> IMPACT SOCIAL</div>
        </div>

        {/* Lignes de scan laser */}
        <div className={styles.laserScanner}></div>
        <div className={styles.borderTrace}></div>
      </div>
    </div>
  );
}