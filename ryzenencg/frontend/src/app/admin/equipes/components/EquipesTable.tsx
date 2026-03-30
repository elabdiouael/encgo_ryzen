"use client";

import React from 'react';
import { Eye, ShieldAlert, ShieldCheck, Users, MapPin, Code } from 'lucide-react';
import { EquipeDto } from '@/types';
import styles from './EquipesTable.module.css';

interface EquipesTableProps {
  equipes: EquipeDto[];
  onOpenDetails: (equipe: EquipeDto) => void;
}

export default function EquipesTable({ equipes, onOpenDetails }: EquipesTableProps) {
  if (!equipes || equipes.length === 0) {
    return (
      <div className={styles.emptyState}>
        <ShieldAlert size={48} className={styles.emptyIcon} />
        <h3>Aucune équipe détectée</h3>
        <p>En attente de nouvelles inscriptions dans le système...</p>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.cyberTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>SQUAD</th>
            <th>RÉGION</th>
            <th>UNITÉS</th>
            <th>PROJET</th>
            <th>STATUT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {equipes.map((equipe) => {
            // Risk Management: Equipe khass ykoun fiha 3 wla 4 nass
            const isValid = equipe.membres?.length >= 3 && equipe.membres?.length <= 4;

            return (
              <tr key={equipe.id} className={styles.tableRow}>
                <td className={styles.cellId}>#{equipe.id}</td>
                <td className={styles.cellName}>{equipe.nomEquipe}</td>
                <td className={styles.cellProject}>
                  <MapPin size={12} style={{ display:'inline', marginRight:'5px' }}/> 
                  {equipe.region || "Inconnue"}
                </td>
                <td>
                  <div className={styles.membersBadge}>
                    <Users size={14} />
                    <span>{equipe.membres?.length || 0} / 4</span>
                  </div>
                </td>
                <td className={styles.cellProject}>
                  {equipe.aUneIdee ? (
                    <span style={{ color: '#00d2ff' }}><Code size={14}/> A une idée</span>
                  ) : (
                    <span style={{ color: '#8a8a9a' }}>Sur place</span>
                  )}
                </td>
                <td>
                  {isValid ? (
                    <span className={styles.statusValid}><ShieldCheck size={14}/> Valide</span>
                  ) : (
                    <span className={styles.statusInvalid}><ShieldAlert size={14}/> Anomalie</span>
                  )}
                </td>
                <td>
                  <button className={styles.actionBtn} title="Voir le Dossier Classé" onClick={() => onOpenDetails(equipe)}>
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}