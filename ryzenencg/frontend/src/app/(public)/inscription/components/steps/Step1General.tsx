"use client";

import React, { useState } from 'react';
import { AlertTriangle, ArrowRight, Cpu, MapPin, Globe, Users } from 'lucide-react';
import CyberInput from '../ui/CyberInput';
import CyberSelect from '../ui/CyberSelect';
import styles from './Steps.module.css';
import { InscriptionFormData } from '../RegistrationStepper';

interface StepProps {
  data: InscriptionFormData;
  updateData: (data: Partial<InscriptionFormData>) => void;
  onNext: () => void;
}

const REGIONS_MAROC = [
  { value: "L'Oriental", label: "L'Oriental" }, { value: "Tanger-Tétouan-Al Hoceïma", label: "Tanger-Tétouan-Al Hoceïma" }, { value: "Fès-Meknès", label: "Fès-Meknès" }, { value: "Rabat-Salé-Kénitra", label: "Rabat-Salé-Kénitra" }, { value: "Béni Mellal-Khénifra", label: "Béni Mellal-Khénifra" }, { value: "Casablanca-Settat", label: "Casablanca-Settat" }, { value: "Marrakech-Safi", label: "Marrakech-Safi" }, { value: "Drâa-Tafilalet", label: "Drâa-Tafilalet" }, { value: "Souss-Massa", label: "Souss-Massa" }, { value: "Guelmim-Oued Noun", label: "Guelmim-Oued Noun" }, { value: "Laâyoune-Sakia El Hamra", label: "Laâyoune-Sakia El Hamra" }, { value: "Dakhla-Oued Ed-Dahab", label: "Dakhla-Oued Ed-Dahab" }
];

export default function Step1General({ data, updateData, onNext }: StepProps) {
  const [error, setError] = useState('');
  
  // 🔥 FIX: LOCAL STATE (Bach ma-y-laguich l-PC mnin t-kteb)
  const [localData, setLocalData] = useState({
    nomEquipe: data.nomEquipe,
    region: data.region,
    ville: data.ville
  });

  const handleNext = () => {
    if (!localData.nomEquipe || !localData.region || !localData.ville) {
      setError("DÉFAILLANCE: Tous les champs obligatoires doivent être renseignés.");
      return;
    }
    if (localData.nomEquipe.length < 3) {
      setError("DÉFAILLANCE: Le nom de l'équipe doit contenir au moins 3 caractères.");
      return;
    }
    setError('');
    // 🔥 Kan-siftou l-Data l-Globale ghir mnin n-cliquiw Next
    updateData(localData);
    onNext();
  };

  return (
    <div className={`${styles.stepContainer} ${styles.fastRender}`}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle} style={{ color: "var(--theme-color)" }}><Cpu size={24} color="var(--theme-color)" /> INFORMATIONS DE L'ENTITÉ</h2>
        <p className={styles.stepDesc}>Initialisez l'identité de votre squad et votre positionnement géographique.</p>
      </div>

      {error && <div className={styles.errorBox}><AlertTriangle size={20} /> <span>{error}</span></div>}

      <div className={styles.formGridFast}>
        <CyberInput 
          label="NOM DE LA SQUAD *" icon={<Users size={18} />} 
          value={localData.nomEquipe} 
          onChange={(e) => setLocalData({...localData, nomEquipe: e.target.value})} 
          className={styles.fullWidth}
        />
        <CyberSelect 
          label="RÉGION *" icon={<Globe size={18} />} options={REGIONS_MAROC} 
          value={localData.region} 
          onChange={(val) => setLocalData({...localData, region: val})} 
        />
        <CyberInput 
          label="VILLE *" icon={<MapPin size={18} />} 
          value={localData.ville} 
          onChange={(e) => setLocalData({...localData, ville: e.target.value})} 
        />
      </div>

      <div className={styles.stepActions} style={{ justifyContent: 'flex-end' }}>
        <button onClick={handleNext} className={styles.btnNext}>PHASE SUIVANTE <ArrowRight size={20} /></button>
      </div>
    </div>
  );
}