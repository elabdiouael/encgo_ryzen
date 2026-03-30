"use client";

import React, { useEffect, useState } from 'react';
import { Users, Server, Handshake, Mail, Activity, Cpu } from 'lucide-react';
import { apiService } from '@/services/api';
import styles from './dashboard.module.css';

export default function AdminDashboard() {
  // Kan-jibou les données mn API Service bach n-7esbo l-Stats
  const [stats, setStats] = useState({
    equipes: 0,
    sponsors: 0,
    messages: 0,
    archives: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [equipes, sponsors, messages, archives] = await Promise.all([
          apiService.getEquipes(),
          apiService.getSponsors(),
          apiService.getMessages(),
          apiService.getArchives()
        ]);
        
        setStats({
          equipes: equipes.length,
          sponsors: sponsors.length,
          messages: messages.length,
          archives: archives.length
        });
      } catch (error) {
        console.error("Erreur de connexion au Core");
      }
      setLoading(false);
    };

    fetchAllData();
  }, []);

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Cpu size={32} className={styles.pulseIcon} />
          <h1 className={styles.glitchTitle} data-text="CORE_SYSTEM">CORE_SYSTEM</h1>
        </div>
        <p className={styles.subtitle}>Supervision en temps réel du Hackathon Ryzen V2.0</p>
      </div>

      <div className={styles.serverStatus}>
        <Activity size={18} className={styles.statusIcon} />
        <span>ÉTAT DU SERVEUR : </span>
        <span className={styles.statusOnline}>EN LIGNE ET SÉCURISÉ</span>
      </div>

      {loading ? (
        <div className={styles.loader}>ANALYSE DU SYSTÈME EN COURS...</div>
      ) : (
        <div className={styles.statsGrid}>
          
          {/* Carte 1: Equipes */}
          <div className={styles.statCard}>
            <div className={styles.cardGlow1}></div>
            <div className={styles.cardContent}>
              <div className={styles.iconBox1}><Users size={24} /></div>
              <div className={styles.statInfo}>
                <h3>UNITÉS DÉPLOYÉES</h3>
                <p className={styles.statNumber}>{stats.equipes}</p>
                <span className={styles.statLabel}>Équipes inscrites</span>
              </div>
            </div>
          </div>

          {/* Carte 2: Sponsors */}
          <div className={styles.statCard}>
            <div className={styles.cardGlow2}></div>
            <div className={styles.cardContent}>
              <div className={styles.iconBox2}><Handshake size={24} /></div>
              <div className={styles.statInfo}>
                <h3>PARTENARIATS</h3>
                <p className={styles.statNumber}>{stats.sponsors}</p>
                <span className={styles.statLabel}>Demandes B2B</span>
              </div>
            </div>
          </div>

          {/* Carte 3: Messages */}
          <div className={styles.statCard}>
            <div className={styles.cardGlow3}></div>
            <div className={styles.cardContent}>
              <div className={styles.iconBox3}><Mail size={24} /></div>
              <div className={styles.statInfo}>
                <h3>COMMUNICATIONS</h3>
                <p className={styles.statNumber}>{stats.messages}</p>
                <span className={styles.statLabel}>Requêtes reçues</span>
              </div>
            </div>
          </div>

          {/* Carte 4: Archives DB */}
          <div className={styles.statCard}>
            <div className={styles.cardGlow4}></div>
            <div className={styles.cardContent}>
              <div className={styles.iconBox4}><Server size={24} /></div>
              <div className={styles.statInfo}>
                <h3>DATA_CORE DB</h3>
                <p className={styles.statNumber}>{stats.archives}</p>
                <span className={styles.statLabel}>Slots d'archives injectés</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}