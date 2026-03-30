"use client";

import React, { useState, useEffect } from 'react';
import { Eye, ShieldAlert, CheckCircle, RefreshCw, Cpu, Database } from 'lucide-react';
import { apiService } from '@/services/api';
import { EquipeDto } from '@/types';
import TeamModal from './components/TeamModal';
import styles from './equipes.module.css';

export default function EquipesPage() {
  const [equipes, setEquipes] = useState<EquipeDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorLog, setErrorLog] = useState<string | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipe, setSelectedEquipe] = useState<EquipeDto | null>(null);

  const fetchEquipes = async () => {
    setLoading(true);
    setErrorLog(null);
    try {
      console.log("📡 [UPLINK] Demande des équipes au Backend...");
      const data = await apiService.getEquipes();
      console.log("📦 [DATA REÇUE] :", data);
      
      if (Array.isArray(data)) {
        setEquipes(data);
      } else {
        console.error("❌ [ERREUR] La data n'est pas un Array :", data);
        setErrorLog("Format de données invalide reçu du serveur.");
        setEquipes([]);
      }
    } catch (error: any) {
      console.error("❌ [CRASH] Impossible de joindre le Backend :", error);
      setErrorLog(error.message || "Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipes();
  }, []);

  const openTeamDetails = (equipe: EquipeDto) => {
    setSelectedEquipe(equipe);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.pageWrapper}>
      
      {/* 🚀 HEADER X100 */}
      <div className={styles.headerSection}>
        <div className={styles.titleContainer}>
          <Database size={36} className={styles.pulseIcon} />
          <div>
            <h1 className={styles.megaTitle} data-text="BASE_DE_DONNÉES_ÉQUIPES">
              BASE_DE_DONNÉES_ÉQUIPES
            </h1>
            <p className={styles.subtitle}>Supervision et monitoring des escadrons inscrits</p>
          </div>
        </div>
        <button className={styles.syncBtn} onClick={fetchEquipes} disabled={loading}>
          <RefreshCw size={18} className={loading ? styles.spin : ''} />
          {loading ? 'SYNCHRONISATION...' : 'FORCER LA SYNC'}
        </button>
      </div>

      {/* 🚨 ERROR LOG ZONE */}
      {errorLog && (
        <div className={styles.errorBox}>
          <ShieldAlert size={24} />
          <div>
            <strong>ANOMALIE DÉTECTÉE :</strong> {errorLog}
          </div>
        </div>
      )}

      {/* 🖥️ CYBER TABLE ZONE */}
      <div className={styles.tableContainer}>
        {loading ? (
          <div className={styles.loaderZone}>
            <Cpu size={40} className={styles.loaderIcon} />
            <p>DÉCRYPTAGE DES DONNÉES EN COURS...</p>
          </div>
        ) : equipes.length === 0 && !errorLog ? (
          <div className={styles.emptyState}>
            <div className={styles.hologram}>
              <Database size={48} />
              <p>AUCUNE ÉQUIPE DANS LA MATRICE</p>
            </div>
          </div>
        ) : equipes.length > 0 ? (
          <div className={styles.tableWrapper}>
            <table className={styles.cyberTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOM DE L'ESCADRON</th>
                  <th>VILLE</th>
                  <th>EFFECTIF</th>
                  <th>DATE D'INTÉGRATION</th>
                  <th>STATUT</th>
                  <th>HUD</th>
                </tr>
              </thead>
              <tbody>
                {equipes.map((equipe) => {
                  const membresCount = equipe.membres?.length || 0;
                  const isValid = membresCount >= 3 && membresCount <= 4;
                  
                  return (
                    <tr key={equipe.id} className={styles.tableRow}>
                      <td className={styles.cellId}>#{equipe.id}</td>
                      <td className={styles.cellName}>{equipe.nomEquipe || 'INCONNU'}</td>
                      <td className={styles.cellCity}>{equipe.ville || 'NON DÉFINIE'}</td>
                      <td className={styles.cellMembers}>
                        <div className={styles.memberBar}>
                          <div 
                            className={styles.memberFill} 
                            style={{ width: `${(membresCount / 4) * 100}%`, background: isValid ? '#00d2ff' : '#ff0055' }}
                          ></div>
                        </div>
                        <span>{membresCount} / 4</span>
                      </td>
                      <td className={styles.cellDate}>
                        {equipe.dateInscription ? new Date(equipe.dateInscription).toLocaleDateString('fr-FR') : 'N/A'}
                      </td>
                      <td>
                        {isValid ? (
                          <div className={styles.badgeValid}><CheckCircle size={14}/> OPÉRATIONNEL</div>
                        ) : (
                          <div className={styles.badgeInvalid}><ShieldAlert size={14}/> ANOMALIE</div>
                        )}
                      </td>
                      <td>
                        <button className={styles.actionBtn} onClick={() => openTeamDetails(equipe)} title="Inspecter">
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <TeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} equipe={selectedEquipe} />
    </div>
  );
}