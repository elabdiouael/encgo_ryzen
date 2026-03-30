import React from 'react';
import { apiService } from '@/services/api';
import SponsorCard from './components/SponsorCard';
import { Handshake } from 'lucide-react';
import styles from './sponsors.module.css';

export default async function SponsorsPage() {
  const sponsors = await apiService.getSponsors();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerSection}>
        <h1 className={styles.glitchTitle} data-text="PARTENARIATS">
          PARTENARIATS
        </h1>
        <p className={styles.subtitle}>Demandes de Sponsoring & B2B</p>
      </div>

      {sponsors.length === 0 ? (
        <div className={styles.emptyState}>
          <Handshake size={48} className={styles.emptyIcon} />
          <h3>Aucune demande pour le moment</h3>
          <p>Les requêtes des entreprises s'afficheront ici.</p>
        </div>
      ) : (
        <div className={styles.cardsGrid}>
          {sponsors.map((sponsor: any) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      )}
    </div>
  );
}