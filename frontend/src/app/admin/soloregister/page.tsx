"use client";

import React, { useEffect, useState } from 'react';
import { apiService, IndividuDto } from '@/services/api';
import { Users, RefreshCw, Briefcase, GraduationCap } from 'lucide-react';
import styles from './soloregister.module.css';

export default function SoloRegisterAdmin() {
  const [individus, setIndividus] = useState<IndividuDto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchIndividus = async () => {
    setLoading(true);
    try {
      const data = await apiService.getIndividus();
      setIndividus(data);
    } catch (error) {
      console.error("Erreur de récupération :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndividus();
  }, []);

  // Fonction bach n-gaddou l-format d l-we9t
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <Users size={32} color="#0ff" />
          OPÉRATEURS <span>SOLOS</span>
        </h1>
        <button onClick={fetchIndividus} className={styles.refreshBtn} disabled={loading}>
          <RefreshCw size={18} className={loading ? styles.loadingIcon : ''} />
          {loading ? 'SCANNING...' : 'ACTUALISER'}
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.cyberTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Opérateur (Nom & Prénom)</th>
              <th>Statut</th>
              <th>École / HQ</th>
              <th>Motivation</th>
              <th>Date d'Enrôlement</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#0ff' }}>
                  <RefreshCw size={32} className={styles.loadingIcon} />
                  <p style={{ marginTop: '1rem' }}>RÉCUPÉRATION DES DONNÉES EN COURS...</p>
                </td>
              </tr>
            ) : individus.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#88c0d0' }}>
                  AUCUN OPÉRATEUR SOLO DÉTECTÉ DANS LA MATRICE.
                </td>
              </tr>
            ) : (
              individus.map((indiv, index) => (
                <tr key={indiv.id || index}>
                  <td style={{ color: '#0ff', fontWeight: 'bold' }}>#{indiv.id}</td>
                  <td style={{ fontWeight: 'bold' }}>{indiv.nom} {indiv.prenom}</td>
                  <td>
                    <span className={styles.statutBadge}>
                      <Briefcase size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {indiv.statut}
                    </span>
                  </td>
                  <td>
                    <GraduationCap size={14} style={{ display: 'inline', marginRight: '6px', color: '#88c0d0' }} />
                    {indiv.ecole}
                  </td>
                  <td className={styles.motivationCell} title={indiv.pourquoiParticipe}>
                    {indiv.pourquoiParticipe || "CLASSIFIÉ / AUCUNE"}
                  </td>
                  <td className={styles.dateText}>{formatDate(indiv.dateInscription)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}