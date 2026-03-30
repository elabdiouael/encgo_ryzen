"use client";

import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, Terminal, Send, CheckCircle, AlertTriangle, Fingerprint } from 'lucide-react';
import CyberInput from '../ui/CyberInput';
import CyberSelect from '../ui/CyberSelect';
import styles from './Steps.module.css';
import { InscriptionFormData } from '../RegistrationStepper';
// import { apiService } from '@/services/api'; // 🔥 L-API D BESSA7

interface StepProps {
  data: InscriptionFormData;
  updateData: (data: Partial<InscriptionFormData>) => void;
  onPrev: () => void;
}

const AMBITION_OPTIONS = [ { value: "Oui", label: "Oui, absolument" }, { value: "Peut-être", label: "Peut-être, selon les résultats" }, { value: "Non", label: "Non, c'est juste pour l'expérience" } ];

export default function Step4Review({ data, updateData, onPrev }: StepProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // 🔥 FIX: LOCAL STATE
  const [localData, setLocalData] = useState({
    aUneIdee: data.aUneIdee,
    titreProjet: data.titreProjet,
    descriptionProjet: data.descriptionProjet,
    problemeIdentifie: data.problemeIdentifie,
    impactPotentiel: data.impactPotentiel,
    faisabilite: data.faisabilite,
    ambitionApres: data.ambitionApres
  });

  const handleSubmit = async () => {
    if (localData.aUneIdee && (!localData.titreProjet || !localData.descriptionProjet || !localData.problemeIdentifie || !localData.impactPotentiel || !localData.faisabilite || !localData.ambitionApres)) {
      setErrorMsg("DÉFAILLANCE: Tous les détails du projet sont requis."); return;
    }
    if (!localData.aUneIdee && !localData.ambitionApres) {
      setErrorMsg("DÉFAILLANCE: L'ambition après le hackathon est requise."); return;
    }

    setStatus('loading'); setErrorMsg('');
    const finalDataToSubmit = { ...data, ...localData }; // N-jm3o kolchi

    try {
      // await apiService.inscrireEquipe(finalDataToSubmit); 
      setTimeout(() => setStatus('success'), 2500);
    } catch (err: any) {
      setStatus('error'); setErrorMsg(err.message || "Erreur de connexion au Core System.");
    }
  };

  const handlePrev = () => { updateData(localData); onPrev(); };

  if (status === 'success') {
    return (
      <div className={`${styles.stepContainer} ${styles.fastRender} ${styles.successTerminal}`}>
        <CheckCircle size={80} color="var(--theme-color)" className={styles.successPop} />
        <h2 className={styles.successTitle}>SYSTÈME OVERRIDE : SUCCÈS</h2>
        <p className={styles.successDesc}>La squad <strong>{data.nomEquipe}</strong> a été enregistrée dans la base de données principale.</p>
        <button onClick={() => window.location.reload()} className={styles.btnReboot}>NOUVELLE SÉQUENCE</button>
      </div>
    );
  }

  return (
    <div className={`${styles.stepContainer} ${styles.step4Animation} ${styles.fastRender} ${styles.terminalTheme}`}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle} style={{ color: 'var(--theme-color)' }}><Terminal size={24} color="var(--theme-color)" /> PROTOCOLE DE PROJET</h2>
      </div>

      {errorMsg && <div className={styles.errorBox} style={{ borderColor: '#ff0055', color: '#ff0055' }}><AlertTriangle size={20} /> {errorMsg}</div>}

      <div className={styles.projectToggleZone}>
        <h3 className={styles.toggleLabel}>AVEZ-VOUS DÉJÀ UNE IDÉE DE PROJET ?</h3>
        <div className={styles.toggleBtns}>
          <button type="button" onClick={() => setLocalData({...localData, aUneIdee: true})} className={`${styles.toggleBtn} ${localData.aUneIdee ? styles.toggleActiveYes : ''}`}>OUI, CIBLE VÉROUILLÉE</button>
          <button type="button" onClick={() => setLocalData({...localData, aUneIdee: false})} className={`${styles.toggleBtn} ${!localData.aUneIdee ? styles.toggleActiveNo : ''}`}>NON, RÉFLEXION SUR PLACE</button>
        </div>
      </div>

      <div className={`${styles.projectInputsZone} ${localData.aUneIdee ? styles.zoneOpen : ''}`}>
        {localData.aUneIdee && (
          <div className={styles.formGridFast} style={{ marginTop: '30px' }}>
            <CyberInput label="TITRE DU PROJET *" value={localData.titreProjet} onChange={(e) => setLocalData({...localData, titreProjet: e.target.value})} className={styles.fullWidth} />
            <CyberInput isTextarea label="DESCRIPTION DU PROJET *" value={localData.descriptionProjet} onChange={(e) => setLocalData({...localData, descriptionProjet: e.target.value})} className={styles.fullWidth} rows={3} />
            <CyberInput isTextarea label="PROBLÈME IDENTIFIÉ (ESS) *" value={localData.problemeIdentifie} onChange={(e) => setLocalData({...localData, problemeIdentifie: e.target.value})} className={styles.fullWidth} rows={2} />
            <CyberInput isTextarea label="IMPACT POTENTIEL *" value={localData.impactPotentiel} onChange={(e) => setLocalData({...localData, impactPotentiel: e.target.value})} className={styles.fullWidth} rows={2} />
            <CyberInput isTextarea label="FAISABILITÉ DU PROJET *" value={localData.faisabilite} onChange={(e) => setLocalData({...localData, faisabilite: e.target.value})} className={styles.fullWidth} rows={2} />
          </div>
        )}
      </div>

      <div className={styles.formGridFast} style={{ marginTop: '30px' }}>
        <CyberSelect label="AMBITION APRÈS LE HACKATHON ? *" options={AMBITION_OPTIONS} value={localData.ambitionApres} onChange={(val) => setLocalData({...localData, ambitionApres: val})} className={styles.fullWidth} />
      </div>

      <div className={styles.stepActions}>
        <button onClick={handlePrev} className={styles.btnPrev} disabled={status === 'loading'}><ArrowLeft size={20} /> RETOUR</button>
        <button onClick={handleSubmit} disabled={status === 'loading'} className={`${styles.btnSubmitFinal} ${status === 'loading' ? styles.btnLoading : ''}`}>
          {status === 'loading' ? <><Fingerprint size={20} className={styles.scanIcon} /> DÉCRYPTAGE...</> : <><Send size={20} /> INITIALISER LE TRANSFERT</>}
        </button>
      </div>
    </div>
  );
}