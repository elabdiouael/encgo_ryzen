"use client";

import React, { useState, useEffect } from 'react';
import { Eye, ShieldAlert, CheckCircle, Search } from 'lucide-react';
import { apiService } from '@/services/api';
import { EquipeDto } from '@/types';
import TeamModal from './components/TeamModal';
import styles from './equipes.module.css'; // L-CSS l-9dim dyalek rah mzyan khelih

export default function EquipesPage() {
  const [equipes, setEquipes] = useState<EquipeDto[]>([]);
  const [loading, setLoading] = useState(true);
  
  // 🔥 L-State dyal L-Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipe, setSelectedEquipe] = useState<EquipeDto | null>(null);

  useEffect(() => {
    const fetchEquipes = async () => {
      try {
        const data = await apiService.getEquipes();
        setEquipes(data);
      } catch (error) {
        console.error("Backend offline");
      }
      setLoading(false);
    };
    fetchEquipes();
  }, []);

  // L-Methode li kat-t-declencha mnin kat-cliqui 3la l-3in
  const openTeamDetails = (equipe: EquipeDto) => {
    setSelectedEquipe(equipe);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerSection}>
        <h1 className={styles.glitchTitle} data-text="REGISTRE_EQUIPES">
          REGISTRE_EQUIPES
        </h1>
        <p className={styles.subtitle}>Supervision des équipes inscrites au Hackathon</p>
      </div>

      <div className={styles.tableContainer}>
        {loading ? (
          <div className={styles.loader}>Synchronisation avec la Base de Données...</div>
        ) : equipes.length === 0 ? (
          <div className={styles.emptyState}>Aucune équipe n'est inscrite pour le moment.</div>
        ) : (
          <table className={styles.cyberTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOM DE L'ÉQUIPE</th>
                <th>MEMBRES</th>
                <th>DATE D'INSCRIPTION</th>
                <th>STATUT (RISK)</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {equipes.map((equipe) => {
                const isValid = equipe.membres.length >= 4;
                
                return (
                  <tr key={equipe.id} className={isValid ? styles.rowValid : styles.rowInvalid}>
                    <td>#{equipe.id}</td>
                    <td className={styles.teamName}>{equipe.nomEquipe}</td>
                    <td>{equipe.membres.length} / 5</td>
                    <td>{new Date(equipe.dateInscription).toLocaleDateString()}</td>
                    <td>
                      {isValid ? (
                        <span className={styles.statusValid}><CheckCircle size={14}/> VALIDE</span>
                      ) : (
                        <span className={styles.statusInvalid}><ShieldAlert size={14}/> INVALIDE</span>
                      )}
                    </td>
                    <td>
                      {/* 🔥 HNA DIRNA L-CLICK */}
                      <button 
                        className={styles.actionBtn} 
                        title="Voir les détails"
                        onClick={() => openTeamDetails(equipe)}
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* 🔥 L-MODAL LI SOWEBNA */}
      <TeamModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        equipe={selectedEquipe} 
      />
      
    </div>
  );
}