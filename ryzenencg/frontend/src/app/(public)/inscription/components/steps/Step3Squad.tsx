"use client";

import React, { useState } from 'react';
import { Users, ArrowRight, ArrowLeft, AlertTriangle, PlusCircle, Trash2, CheckCircle } from 'lucide-react';
import CyberInput from '../ui/CyberInput';
import styles from './Steps.module.css';
import { InscriptionFormData, ParticipantData } from '../RegistrationStepper';

interface StepProps {
  data: InscriptionFormData;
  updateData: (data: Partial<InscriptionFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step3Squad({ data, updateData, onNext, onPrev }: StepProps) {
  const [error, setError] = useState('');
  const [activeOp, setActiveOp] = useState(0);

  // Local state bach n7afdou 3la vitesse
  const [localMembres, setLocalMembres] = useState<ParticipantData[]>(data.membres);

  const handleMembreChange = (index: number, field: keyof ParticipantData, value: string) => {
    const newMembres = [...localMembres];
    newMembres[index] = { ...newMembres[index], [field]: value };
    setLocalMembres(newMembres);
  };

  const addFourthMember = () => {
    if (localMembres.length === 3) {
      setLocalMembres([...localMembres, { nomComplet: '', email: '', telephone: '', etablissement: '', niveauEtude: '', role: 'MEMBRE' }]);
      setActiveOp(3);
    }
  };

  const removeFourthMember = () => {
    if (localMembres.length === 4) {
      const newMembres = [...localMembres];
      newMembres.pop();
      setLocalMembres(newMembres);
      setActiveOp(2);
    }
  };

  const handleNext = () => {
    const isValid = localMembres.every(m => m.nomComplet && m.email && m.telephone && m.etablissement && m.niveauEtude);
    if (!isValid) {
      setError("DÉFAILLANCE: Tous les champs de chaque opérateur doivent être renseignés.");
      return;
    }
    setError('');
    updateData({ membres: localMembres });
    onNext();
  };

  const handlePrev = () => { updateData({ membres: localMembres }); onPrev(); };

  const currentOp = localMembres[activeOp];

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle} style={{ color: 'var(--theme-color)' }}><Users size={24} color="var(--theme-color)" /> RECRUTEMENT DES UNITÉS</h2>
        <p className={styles.stepDesc}>Configurez les profils de votre squad (3 opérateurs requis, 4ème optionnel).</p>
      </div>

      {error && <div className={styles.errorBox} style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}><AlertTriangle size={20} /> {error}</div>}

      <div className={styles.squadLayout}>
        <div className={styles.opTabs}>
          {localMembres.map((m, idx) => (
            <button key={idx} type="button" onClick={() => setActiveOp(idx)} className={`${styles.opTabBtn} ${activeOp === idx ? styles.opTabActive : ''} ${m.nomComplet ? styles.opTabFilled : ''}`}>
              <div className={styles.opTabIcon}>{m.nomComplet ? <CheckCircle size={16}/> : <Users size={16}/>}</div>
              <div className={styles.opTabInfo}>
                <span className={styles.opTabName}>OPÉRAT-{idx + 1}</span>
                <span className={styles.opTabRole}>{idx === 0 ? '[LEADER]' : '[MEMBRE]'}</span>
              </div>
            </button>
          ))}
          {localMembres.length === 3 ? (
            <button type="button" onClick={addFourthMember} className={styles.addOpBtn}><PlusCircle size={18} /> AJOUTER OP-4</button>
          ) : (
            <button type="button" onClick={removeFourthMember} className={styles.removeOpBtn}><Trash2 size={18} /> RETIRER OP-4</button>
          )}
        </div>

        <div className={styles.opFormArea}>
          <h3 className={styles.opFormTitle}>FICHIER CLASSÉ: {activeOp === 0 ? 'TEAM LEADER' : `OPÉRATEUR 0${activeOp + 1}`}</h3>
          
          {/* 💥 Rje3na value w onChange 7it l-CSS wla khfif, ghadi t-kteb b z-zerba */}
          <div className={styles.formGridFast}>
            <CyberInput label="NOM COMPLET *" value={currentOp.nomComplet} onChange={(e) => handleMembreChange(activeOp, 'nomComplet', e.target.value)} className={styles.fullWidth} />
            <CyberInput label="EMAIL *" type="email" value={currentOp.email} onChange={(e) => handleMembreChange(activeOp, 'email', e.target.value)} />
            <CyberInput label="TÉLÉPHONE *" type="tel" value={currentOp.telephone} onChange={(e) => handleMembreChange(activeOp, 'telephone', e.target.value)} />
            <CyberInput label="ÉTABLISSEMENT / UNIVERSITÉ *" value={currentOp.etablissement} onChange={(e) => handleMembreChange(activeOp, 'etablissement', e.target.value)} />
            <CyberInput label="NIVEAU D'ÉTUDES *" value={currentOp.niveauEtude} onChange={(e) => handleMembreChange(activeOp, 'niveauEtude', e.target.value)} />
          </div>
        </div>
      </div>

      <div className={styles.stepActions}>
        <button onClick={handlePrev} className={styles.btnPrev}><ArrowLeft size={20} /> RETOUR</button>
        <button onClick={handleNext} className={styles.btnNext} style={{ background: 'var(--theme-color)', color: '#000' }}>
          PHASE SUIVANTE <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}