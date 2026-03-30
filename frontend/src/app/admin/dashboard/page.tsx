"use client";

import React, { useEffect, useState } from 'react';
import { Users, Server, Handshake, Mail, Activity, Cpu } from 'lucide-react';
import { apiService } from '@/services/api';
import styles from './dashboard.module.css';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalEquipes: 0,
    totalSponsors: 0,
    totalMessages: 0,
    totalArchives: 0,
    serverStatus: "CONNECTING..."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 🚀 HNA KAN-JIBOU LES STATS DIRECT MN SPRING BOOT (ENDPOINT J-JDID)
        const data = await apiService.getStats();
        setStats({
          totalEquipes: data.totalEquipes || 0,
          totalSponsors: data.totalSponsors || 0,
          totalMessages: data.totalMessages || 0,
          totalArchives: data.totalArchives || 0,
          serverStatus: data.serverStatus || "ONLINE"
        });
      } catch (error) {
        console.error("Erreur de connexion au Core");
        setStats(prev => ({ ...prev, serverStatus: "OFFLINE" }));
      }
      setLoading(false);
    };

    fetchStats();
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
        <Activity size={18} className={styles.statusIcon} style={{ color: stats.serverStatus === "OFFLINE" ? "#ff0055" : "" }} />
        <span>ÉTAT DU SERVEUR : </span>
        <span 
          className={styles.statusOnline} 
          style={{ color: stats.serverStatus === "OFFLINE" ? "#ff0055" : "", textShadow: stats.serverStatus === "OFFLINE" ? "0 0 10px #ff0055" : "" }}
        >
          {stats.serverStatus}
        </span>
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
                <p className={styles.statNumber}>{stats.totalEquipes}</p>
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
                <p className={styles.statNumber}>{stats.totalSponsors}</p>
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
                <p className={styles.statNumber}>{stats.totalMessages}</p>
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
                <p className={styles.statNumber}>{stats.totalArchives}</p>
                <span className={styles.statLabel}>Slots d'archives injectés</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}