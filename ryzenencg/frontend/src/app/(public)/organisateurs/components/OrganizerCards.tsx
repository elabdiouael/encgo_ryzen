import React from 'react';
import { ShieldAlert, Award, Star } from 'lucide-react';
import styles from './OrganizerCards.module.css';

export default function OrganizerCards() {
  const organizers = [
    {
      id: 1,
      name: "SOUHAILA",
      role: "Présidente du Club Ryzen",
      description: "Leader visionnaire et coordinatrice générale de l'Oriental Hack 2.0. Passionnée par l'innovation et l'impact de l'IA dans l'économie sociale et solidaire.",
      icon: <Star size={24} />,
      colorClass: styles.purpleAura,
      // 🔥 Tsswira dyal Souhaila li f dossier public
      image: "/souaila.jpeg" 
    },
    {
      id: 2,
      name: "PROF. [NOM DU PROF]", 
      role: "Superviseur & Coordinateur Pédagogique",
      description: "Expert en systèmes d'information et parrain de cette édition. Il assure l'encadrement scientifique et la validation des projets technologiques du hackathon.",
      icon: <Award size={24} />,
      colorClass: styles.cyanAura,
      // 🔥 Dir tsswira d l-prof f public w beddel smiytha hna (awla khlliha bla tsswira)
      image: "/prof_placeholder.jpg" 
    }
  ];

  return (
    <div className={styles.cardsWrapper}>
      {organizers.map((org, index) => (
        <div key={org.id} className={`${styles.holoCard} ${styles[`animDelay${index}`]}`}>
          
          {/* 📸 L-IMAGE LI KAT-BAN F L-HOVER */}
          <div className={styles.avatarLayer}>
            <img src={org.image} alt={org.name} className={styles.orgImage} />
            {/* Overlay bach l-ktaba t-b9a bayna fo9 tsswira */}
            <div className={styles.imageOverlay}></div>
          </div>

          <div className={`${styles.topBeam} ${org.colorClass}`}></div>
          
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${org.colorClass}`}>
                {org.icon}
              </div>
              <div className={styles.titleBox}>
                <h2 className={styles.orgName} data-text={org.name}>{org.name}</h2>
                <span className={styles.orgRole}>{org.role}</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <p>{org.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <ShieldAlert size={14} /> STATUS: <span className={styles.statusOnline}>OPÉRATIONNEL</span>
            </div>
          </div>

          <div className={styles.holoScanline}></div>
        </div>
      ))}
    </div>
  );
}