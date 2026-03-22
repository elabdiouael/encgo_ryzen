import React from 'react';
import QuantumBackground from './components/QuantumBackground';
import NexusTimeline from './components/NexusTimeline';
import styles from './pourquoi.module.css';

export default function PourquoiParticiperPage() {
  return (
    <div className={styles.pageContainer}>
      <QuantumBackground />

      <div className={styles.contentWrapper}>
        
        {/* En-tête de la page */}
        <div className={styles.header}>
          <div className={styles.badge}>EXPÉRIENCE 2.0</div>
          <h1 className={styles.mainTitle}>POURQUOI <span className={styles.highlight}>PARTICIPER ?</span></h1>
          <p className={styles.subtitle}>
            Oriental Hack 2.0 n'est pas qu'une simple compétition. C'est un véritable pipeline d'innovation 
            qui transformera vos idées en solutions réelles pour l'économie sociale et solidaire.
          </p>
        </div>

        {/* L-Pipeline L-Jdid (Level x200) */}
        <div className={styles.pipelineContainer}>
          <NexusTimeline />
        </div>

      </div>
    </div>
  );
}