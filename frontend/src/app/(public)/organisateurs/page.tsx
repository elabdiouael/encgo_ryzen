import React from 'react';
import CyberCoreBg from './components/CyberCoreBg';
import OrganizerCards from './components/OrganizerCards';
import styles from './organisateurs.module.css';

export default function OrganisateursPage() {
  return (
    <div className={styles.pageContainer}>
      <CyberCoreBg />

      <div className={styles.contentWrapper}>
        
        {/* En-tête de la page */}
        <div className={styles.header}>
          <div className={styles.badge}>LEADERSHIP SQUAD</div>
          <h1 className={styles.mainTitle}>COMITÉ <span className={styles.highlight}>D'ORGANISATION</span></h1>
          <p className={styles.subtitle}>
            Découvrez les esprits visionnaires derrière la création et la gestion de l'Oriental Hack 2.0.
          </p>
        </div>

        {/* Grille des Organisateurs */}
        <div className={styles.cardsZone}>
          <OrganizerCards />
        </div>

      </div>
    </div>
  );
}