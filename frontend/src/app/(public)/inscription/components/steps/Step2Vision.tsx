"use client";

import React, { useState } from 'react';
import { Target, ArrowRight, ArrowLeft, AlertTriangle, Award, Code } from 'lucide-react';
import CyberInput from '../ui/CyberInput';
import CyberSelect from '../ui/CyberSelect';
import styles from './Steps.module.css';
import { InscriptionFormData } from '../RegistrationStepper';

interface StepProps {
  data: InscriptionFormData;
  updateData: (data: Partial<InscriptionFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const EXP_OPTIONS = [ { value: "Oui, plusieurs fois", label: "Oui, plusieurs fois" }, { value: "Oui, une fois", label: "Oui, une fois" }, { value: "Non, c'est ma première expérience", label: "Non, c'est ma première expérience" } ];
const SKILLS_LIST = [ "Développement Web", "Développement Mobile", "Intelligence Artificielle", "Data Science", "UI / UX Design", "Business Model", "Marketing", "Gestion de projet", "Autre" ];

export default function Step2Vision({ data, updateData, onNext, onPrev }: StepProps) {
  const [error, setError] = useState('');

  // 🔥 FIX: LOCAL STATE
  const [localData, setLocalData] = useState({
    experienceHackathon: data.experienceHackathon,
    detailsExperience: data.detailsExperience,
    competencesEquipe: data.competencesEquipe,
    motivation: data.motivation,
    comprehensionTheme: data.comprehensionTheme
  });

  const countWords = (str: string) => str.trim().split(/\s+/).filter(w => w.length > 0).length;

  const toggleSkill = (skill: string) => {
    let newSkills = [...localData.competencesEquipe];
    if (newSkills.includes(skill)) newSkills = newSkills.filter(s => s !== skill);
    else newSkills.push(skill);
    setLocalData({ ...localData, competencesEquipe: newSkills });
  };

  const handleNext = () => {
    if (!localData.experienceHackathon || localData.competencesEquipe.length === 0 || !localData.motivation || !localData.comprehensionTheme) {
      setError("DÉFAILLANCE: Tous les champs (sauf détails exp) sont obligatoires."); return;
    }
    if (countWords(localData.motivation) > 200 || countWords(localData.comprehensionTheme) > 150) {
      setError("DÉFAILLANCE: Limite de mots dépassée dans l'un des champs textes."); return;
    }
    setError('');
    updateData(localData); // Sync
    onNext();
  };

  const handlePrev = () => { updateData(localData); onPrev(); };

  const motivationWords = countWords(localData.motivation);
  const themeWords = countWords(localData.comprehensionTheme);

  return (
    <div className={`${styles.stepContainer} ${styles.fastRender}`}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle} style={{ color: "var(--theme-color)" }}><Target size={24} color="var(--theme-color)" /> VISION ET COMPÉTENCES</h2>
      </div>

      {error && <div className={styles.errorBox}><AlertTriangle size={20} /> <span>{error}</span></div>}

      <div className={styles.formGridFast}>
        <CyberSelect label="EXPÉRIENCE EN HACKATHON *" icon={<Code size={18} />} options={EXP_OPTIONS} value={localData.experienceHackathon} onChange={(val) => setLocalData({...localData, experienceHackathon: val})} className={styles.fullWidth} />
        {localData.experienceHackathon.includes("Oui") && (
          <CyberInput isTextarea label="PRÉCISEZ VOTRE EXPÉRIENCE" value={localData.detailsExperience} onChange={(e) => setLocalData({...localData, detailsExperience: e.target.value})} className={styles.fullWidth} rows={3} />
        )}
        <div className={styles.fullWidth} style={{ marginTop: '10px' }}>
          <label style={{ color: '#8a8a9a', fontFamily: 'monospace', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} color="var(--theme-color)" /> COMPÉTENCES DE L'ÉQUIPE *
          </label>
          <div className={styles.chipsContainer}>
            {SKILLS_LIST.map(skill => (
              <button key={skill} type="button" onClick={() => toggleSkill(skill)} className={`${styles.chipBtn} ${localData.competencesEquipe.includes(skill) ? styles.chipActive : ''}`}>{skill}</button>
            ))}
          </div>
        </div>
        <div className={styles.fullWidth} style={{ marginTop: '20px' }}>
          <CyberInput isTextarea label="POURQUOI SOUHAITEZ-VOUS PARTICIPER ? *" value={localData.motivation} onChange={(e) => setLocalData({...localData, motivation: e.target.value})} rows={4} />
          <span className={`${styles.wordCount} ${motivationWords > 200 ? styles.limitReached : ''}`}>{motivationWords} / 200 mots</span>
        </div>
        <div className={styles.fullWidth}>
          <CyberInput isTextarea label="COMMENT L'IA PEUT-ELLE AIDER L'ESS ? *" value={localData.comprehensionTheme} onChange={(e) => setLocalData({...localData, comprehensionTheme: e.target.value})} rows={4} />
          <span className={`${styles.wordCount} ${themeWords > 150 ? styles.limitReached : ''}`}>{themeWords} / 150 mots</span>
        </div>
      </div>

      <div className={styles.stepActions}>
        <button onClick={handlePrev} className={styles.btnPrev}><ArrowLeft size={20} /> RETOUR</button>
        <button onClick={handleNext} className={styles.btnNext}>PHASE SUIVANTE <ArrowRight size={20} /></button>
      </div>
    </div>
  );
}