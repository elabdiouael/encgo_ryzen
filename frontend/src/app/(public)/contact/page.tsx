import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Instagram, PlaySquare } from 'lucide-react';
import ScouterBackground from './components/ScouterBackground';
import TacticalContactForm from './components/TacticalContactForm';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <ScouterBackground />

      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>LINK_<span>ESTABLISHED</span></h1>
          <p className={styles.subtext}>Canal de communication sécurisé avec le QG Ryzen.</p>
        </div>

        <div className={styles.gridContainer}>
          
          {/* --- LEFT: Les Infos & Réseaux Sociaux --- */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <MapPin size={24} className={styles.infoIcon} />
              <div>
                <h4>LOCALISATION HQ</h4>
                <p>ENCG Oujda, Maroc</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <Mail size={24} className={styles.infoIcon} />
              <div>
                <h4>RÉSEAU EMAIL</h4>
                <p>ryzenclub.encgo@ump.ac.ma</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <Phone size={24} className={styles.infoIcon} />
              <div>
                <h4>FRÉQUENCE VOCALE</h4>
                <p>+212 703698836</p>
              </div>
            </div>

            {/* 🔥 JDID: Social Media Links */}
            <div className={styles.infoCard}>
              <Linkedin size={24} className={styles.infoIcon} />
              <div>
                <h4>LINKEDIN</h4>
                <p>Ryzen Encgo</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <Instagram size={24} className={styles.infoIcon} />
              <div>
                <h4>INSTAGRAM</h4>
                <p>Ryzenencg.o</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <PlaySquare size={24} className={styles.infoIcon} />
              <div>
                <h4>TIKTOK</h4>
                <p>ryzenencgo</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT: L-Formulaire --- */}
          <div className={styles.formSection}>
            <TacticalContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}