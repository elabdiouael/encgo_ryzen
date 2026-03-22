import React from 'react';
import { Building2, User, Mail, Phone, ExternalLink } from 'lucide-react';
import { SponsorshipRequest } from '@/types';
import styles from './SponsorCard.module.css';

interface SponsorCardProps {
  sponsor: SponsorshipRequest;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.glowLine}></div>
      
      <div className={styles.cardHeader}>
        <div className={styles.entrepriseInfo}>
          <Building2 className={styles.companyIcon} size={24} />
          <h3 className={styles.companyName}>{sponsor.entreprise}</h3>
        </div>
        <span className={styles.badge}>Nouveau</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <User size={16} className={styles.icon} />
          <span>{sponsor.responsable}</span>
        </div>
        <div className={styles.infoRow}>
          <Mail size={16} className={styles.icon} />
          <a href={`mailto:${sponsor.email}`} className={styles.link}>{sponsor.email}</a>
        </div>
        <div className={styles.infoRow}>
          <Phone size={16} className={styles.icon} />
          <span>{sponsor.telephone}</span>
        </div>
        
        <div className={styles.messageBox}>
          <p>{sponsor.message}</p>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <button className={styles.cyberBtn}>
          <ExternalLink size={16} /> Contacter
        </button>
      </div>
    </div>
  );
}