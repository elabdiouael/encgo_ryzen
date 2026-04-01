import React from 'react';
import { Download, ShieldCheck, Zap, Globe } from 'lucide-react';
import CorporateNexusBg from './components/CorporateNexusBg';
import SponsorForm from './components/SponsorForm';
import styles from './sponsors.module.css';

export default function SponsorsPage() {
  return (
    <div className={styles.pageWrapper}>
      <CorporateNexusBg />

      <div className={styles.contentContainer}>
        
        {/* --- HEADER --- */}
        <div className={styles.header}>
          <div className={styles.badge}>INITIATIVE B2B</div>
          <h1 className={styles.mainTitle}>DEVENIR <span className={styles.highlight}>PARTENAIRE</span></h1>
          <p className={styles.subtitle}>
            Associez votre marque à l'innovation. Devenez un acteur majeur de la transformation digitale 
            et du développement de l'Économie Sociale et Solidaire dans la région de l'Oriental.
          </p>
          
          {/* 🔥 L-Bouton dyal l-Dossier Sponsoring Jdid */}
          <a href="/Dossier sponsoring.Orientalhack 2..0.pdf" download className={styles.downloadBtn}>
            <Download size={20} /> TÉLÉCHARGER LE DOSSIER SPONSOR
          </a>
        </div>

        <div className={styles.mainGrid}>
          
          {/* --- COLONNE GAUCHE (Infos & Partenaires Actuels) --- */}
          <div className={styles.infoColumn}>
            <h3 className={styles.sectionTitle}>POURQUOI NOUS REJOINDRE ?</h3>
            
            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><Globe size={24} /></div>
              <div>
                <h4>VISIBILITÉ MAXIMALE</h4>
                <p>Positionnez votre entreprise au cœur de l'écosystème tech national.</p>
              </div>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><Zap size={24} /></div>
              <div>
                <h4>ACCÈS AUX TALENTS</h4>
                <p>Identifiez et recrutez les meilleurs développeurs et ingénieurs de demain.</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconBox}><ShieldCheck size={24} /></div>
              <div>
                <h4>IMPACT RSE</h4>
                <p>Soutenez l'inclusion numérique et l'entrepreneuriat des jeunes.</p>
              </div>
            </div>

            {/* Partenaires Confirmés (Cahier des charges) */}
            <div className={styles.currentPartners}>
              <h3 className={styles.sectionTitle}>PARTENAIRES OFFICIELS 2.0</h3>
              <div className={styles.logosBox}>
                <div className={styles.logoItem}>UNIVERSITÉ MOHAMMED PREMIER (UMP)</div>
                <div className={styles.logoItem}>ENCG OUJDA</div>
                <div className={styles.logoItem}>BUREAU EXCEN CONSULTING</div>
                <div className={styles.logoItem}>ARGILUX</div>
                <div className={styles.logoItem}>CREATIVELYPLUS</div>
                
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE (Formulaire) --- */}
          <div className={styles.formColumn}>
            <SponsorForm />
          </div>

        </div>

      </div>
    </div>
  );
}