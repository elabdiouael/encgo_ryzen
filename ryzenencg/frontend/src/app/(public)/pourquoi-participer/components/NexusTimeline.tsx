"use client";

import React from 'react';
import { Target, Award, Cpu, Network } from 'lucide-react';
import styles from './NexusTimeline.module.css';

export default function NexusTimeline() {
  const reasons = [
    {
      id: 1,
      title: "IMPACT RÉEL",
      icon: <Target size={28} />,
      colorClass: styles.cyanGlow,
      content: "Votre projet doit démontrer un impact concret et tangible, capable de transformer la performance des entreprises ou de renforcer le rôle des organisations de l’économie sociale et solidaire. Intégrez l’Intelligence Artificielle pour proposer des solutions mesurables et à fort bénéfice."
    },
    {
      id: 2,
      title: "MENTORAT D’EXCELLENCE",
      icon: <Award size={28} />,
      colorClass: styles.purpleGlow,
      content: "Bénéficiez de l’accompagnement de mentors experts en IA, innovation et entrepreneuriat, qui vous guideront tout au long du hackathon. Recevez des conseils pratiques, stratégies efficaces et retours d’expérience précieux pour maximiser vos chances de réussite."
    },
    {
      id: 3,
      title: "EXPÉRIENCE PRATIQUE",
      icon: <Cpu size={28} />,
      colorClass: styles.cyanGlow,
      content: "Acquérez des compétences concrètes en IA, innovation et entrepreneuriat, et mettez-les en pratique en créant un prototype fonctionnel pendant le hackathon. Cette expérience unique vous prépare à relever des défis réels."
    },
    {
      id: 4,
      title: "RÉSEAU & VISIBILITÉ",
      icon: <Network size={28} />,
      colorClass: styles.purpleGlow,
      content: "Rencontrez des mentors, experts et participants passionnés, et bénéficiez d’une visibilité unique pour votre projet. Les meilleures équipes présenteront leur solution devant un jury d’experts et des partenaires stratégiques."
    }
  ];

  return (
    <div className={styles.timelineContainer}>
      {/* L-Khet dyal l-Énergie f l-wst */}
      <div className={styles.energyBeam}></div>

      {reasons.map((reason, index) => {
        const isLeft = index % 2 === 0;
        
        return (
          <div key={reason.id} className={`${styles.timelineRow} ${isLeft ? styles.rowLeft : styles.rowRight}`}>
            
            {/* L-Carte d l-Contenu */}
            <div className={`${styles.glassCard} ${styles[`delay${index + 1}`]}`}>
              <div className={styles.watermark}>0{reason.id}</div>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconBox} ${reason.colorClass}`}>
                  {reason.icon}
                </div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
              </div>
              <p className={styles.cardText}>{reason.content}</p>
              <div className={styles.cardBorder}></div>
            </div>

            {/* L-Point dyal l-Connexion m3a l-Beam */}
            <div className={styles.nexusPoint}>
              <div className={`${styles.core} ${reason.colorClass}`}></div>
              <div className={`${styles.ping} ${reason.colorClass}`}></div>
            </div>

          </div>
        );
      })}
    </div>
  );
}