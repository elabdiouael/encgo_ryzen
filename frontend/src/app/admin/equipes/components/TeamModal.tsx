"use client";

import React, { useState } from 'react';
import { X, Users, Cpu, Mail, Phone, GraduationCap, ShieldAlert, CheckCircle, MapPin, Target, Award, Terminal } from 'lucide-react';
import { EquipeDto } from '@/types'; 
import styles from './TeamModal.module.css';

interface TeamModalProps {
  equipe: EquipeDto | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamModal({ equipe, isOpen, onClose }: TeamModalProps) {
  const [activeTab, setActiveTab] = useState<'SQUAD' | 'VISION' | 'PROJET'>('SQUAD');

  if (!isOpen || !equipe) return null;

  const isValid = equipe.membres.length >= 3 && equipe.membres.length <= 4;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* --- HEADER --- */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <Cpu size={28} className={styles.headerIcon} />
            <div>
              <h2>{equipe.nomEquipe}</h2>
              <div className={styles.headerMeta}>
                <span className={styles.regionBadge}><MapPin size={12}/> {equipe.ville}, {equipe.region}</span>
                {isValid ? (
                  <span className={styles.badgeValid}><CheckCircle size={12}/> EFFECTIF VALIDE ({equipe.membres.length}/4)</span>
                ) : (
                  <span className={styles.badgeInvalid}><ShieldAlert size={12}/> ANOMALIE EFFECTIF</span>
                )}
              </div>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}><X size={24} /></button>
        </div>

        {/* --- TABS NAVIGATION --- */}
        <div className={styles.tabsNav}>
          <button className={`${styles.tabBtn} ${activeTab === 'SQUAD' ? styles.activeTab : ''}`} onClick={() => setActiveTab('SQUAD')}>
            <Users size={16} /> SQUAD & UNITÉS
          </button>
          <button className={`${styles.tabBtn} ${activeTab === 'VISION' ? styles.activeTab : ''}`} onClick={() => setActiveTab('VISION')}>
            <Target size={16} /> VISION & COMPÉTENCES
          </button>
          <button className={`${styles.tabBtn} ${activeTab === 'PROJET' ? styles.activeTab : ''}`} onClick={() => setActiveTab('PROJET')}>
            <Terminal size={16} /> DATA PROJET
          </button>
        </div>

        {/* --- BODY (DYNAMIC CONTENT) --- */}
        <div className={styles.modalBody}>
          
          {/* TAB 1: SQUAD */}
          {activeTab === 'SQUAD' && (
            <div className={styles.tabContent}>
               <h4 className={styles.sectionTitle}>OPÉRATEURS DÉPLOYÉS</h4>
               <div className={styles.membersGrid}>
                 {equipe.membres.map((membre, idx) => (
                   <div key={idx} className={styles.memberCard}>
                     <div className={styles.memberRole}>{membre.role === 'CHEF' ? 'LEADER_01' : `UNITÉ_0${idx + 1}`}</div>
                     <h5 className={styles.memberName}>{membre.nomComplet}</h5>
                     <div className={styles.memberDetails}>
                       <span><Mail size={12}/> {membre.email}</span>
                       <span><Phone size={12}/> {membre.telephone}</span>
                       <span><GraduationCap size={12}/> {membre.etablissement} ({membre.niveauEtude})</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* TAB 2: VISION & SKILLS */}
          {activeTab === 'VISION' && (
            <div className={styles.tabContent}>
              <div className={styles.dataBlock}>
                <h4 className={styles.sectionTitle}><Award size={16}/> COMPÉTENCES DÉCLARÉES</h4>
                <div className={styles.chipsContainer}>
                  {equipe.competencesEquipe?.map((skill, i) => (
                    <span key={i} className={styles.skillChip}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className={styles.dataBlock}>
                <h4 className={styles.sectionTitle}>EXPÉRIENCE EN HACKATHON</h4>
                <p className={styles.textData}><strong>Statut:</strong> {equipe.experienceHackathon}</p>
                {equipe.detailsExperience && <p className={styles.textData}><strong>Détails:</strong> {equipe.detailsExperience}</p>}
              </div>

              <div className={styles.dataBlock}>
                <h4 className={styles.sectionTitle}>MOTIVATION</h4>
                <div className={styles.quoteBox}><p>{equipe.motivation}</p></div>
              </div>

              <div className={styles.dataBlock}>
                <h4 className={styles.sectionTitle}>COMPRÉHENSION DU THÈME (IA & ESS)</h4>
                <div className={styles.quoteBox}><p>{equipe.comprehensionTheme}</p></div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJET */}
          {activeTab === 'PROJET' && (
            <div className={styles.tabContent}>
              {!equipe.aUneIdee ? (
                <div className={styles.emptyProject}>
                  <Terminal size={40} className={styles.emptyIcon} />
                  <h3>AUCUNE IDÉE PRÉDÉFINIE</h3>
                  <p>L'équipe a choisi de réfléchir au projet directement sur place.</p>
                  <div className={styles.dataBlock} style={{ marginTop: '20px', textAlign: 'left' }}>
                    <h4 className={styles.sectionTitle}>AMBITION APRÈS LE HACKATHON</h4>
                    <p className={styles.textData} style={{ color: '#00ffaa' }}>{equipe.ambitionApres}</p>
                  </div>
                </div>
              ) : (
                <div className={styles.projectDetails}>
                  <h3 className={styles.projectTitle}>[ {equipe.titreProjet} ]</h3>
                  
                  <div className={styles.dataBlock}>
                    <h4 className={styles.sectionTitle}>DESCRIPTION</h4>
                    <p className={styles.textData}>{equipe.descriptionProjet}</p>
                  </div>

                  <div className={styles.dataBlock}>
                    <h4 className={styles.sectionTitle}>PROBLÈME IDENTIFIÉ (ESS)</h4>
                    <p className={styles.textData}>{equipe.problemeIdentifie}</p>
                  </div>

                  <div className={styles.dataBlock}>
                    <h4 className={styles.sectionTitle}>IMPACT POTENTIEL</h4>
                    <p className={styles.textData}>{equipe.impactPotentiel}</p>
                  </div>

                  <div className={styles.grid2Cols}>
                    <div className={styles.dataBlock}>
                      <h4 className={styles.sectionTitle}>FAISABILITÉ</h4>
                      <p className={styles.textData}>{equipe.faisabilite}</p>
                    </div>
                    <div className={styles.dataBlock}>
                      <h4 className={styles.sectionTitle}>AMBITION FUTURE</h4>
                      <p className={styles.textData} style={{ color: '#00d2ff', fontWeight: 'bold' }}>{equipe.ambitionApres}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}