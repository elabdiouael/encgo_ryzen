"use client";

import React, { useState, useEffect, useRef } from 'react';
import { User, GraduationCap, Briefcase, Target, ArrowRight, AlertTriangle, CheckCircle, ChevronDown } from 'lucide-react';
import { apiService } from '@/services/api'; // T2ekked ghir mn l-chemin dyal api.ts
import CyberBackground from './components/CyberBackground'; 
import styles from './individuel.module.css';

// =========================================
// 🔥 THE CUSTOM DROPDOWN COMPONENT (Z-INDEX FIXÉ)
// =========================================
const CyberDropdown = ({ options, value, onChange, placeholder }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // N-seddou l-dropdown ila cliquina 3la beṛṛa
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt: any) => opt.value === value);

  return (
    <div 
      className={styles.cyberSelectContainer} 
      ref={dropdownRef}
      style={{ zIndex: isOpen ? 999 : 1 }} // 🚨 THE Z-INDEX FIX HWA HADA!
    >
      <div 
        className={`${styles.cyberSelectHeader} ${isOpen ? styles.isOpen : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} color="#0ff" />
      </div>
      
      {isOpen && (
        <div className={styles.cyberSelectList}>
          {options.map((option: any) => (
            <div 
              key={option.value} 
              className={styles.cyberSelectOption}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// =========================================
// 🚀 LA PAGE PRINCIPALE
// =========================================
export default function InscriptionIndividuelPage() {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', ecole: '', statut: '', pourquoiParticipe: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handler l-Inputs 3adiyin
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler dyal Custom Dropdowns
  const handleDropdownChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!formData.nom || !formData.prenom || !formData.ecole || !formData.statut) {
      setError("DÉFAILLANCE: Veuillez remplir tous les champs obligatoires (*)");
      return;
    }

    setLoading(true);
    try {
      await apiService.inscrireIndividu(formData);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  // Les options dyal l-Dropdowns
  const statutOptions = [
    { value: 'Etudiant', label: 'Étudiant(e)' },
    { value: 'Entrepreneur', label: 'Entrepreneur' },
    { value: 'Freelance', label: 'Freelance' },
    { value: 'Autre', label: 'Autre' }
  ];

  const ecoleOptions = [
    { value: 'ENCG', label: 'ENCG Oujda' },
    { value: 'ENSA', label: 'ENSA Oujda' },
    { value: 'EST', label: 'EST Oujda' },
    { value: 'EHEI', label: 'EHEI' },
    { value: 'SUPMTI', label: 'SUPMTI' },
    { value: 'FSO', label: 'Faculté des Sciences (FSO)' },
    { value: 'UMP', label: 'Autre (UMP)' },
    { value: 'Autre', label: 'Autre (Hors Oujda)' }
  ];

  // 🟢 ECRAN DE SUCCÈS
  if (success) {
    return (
      <div className={styles.pageContainer}>
        <CyberBackground />
        <div className={styles.formWrapper} style={{ textAlign: 'center' }}>
          <CheckCircle size={64} color="#0ff" style={{ margin: '0 auto 1rem', filter: 'drop-shadow(0 0 10px #0ff)' }} />
          <h2 className={styles.title}>INTÉGRATION <span>RÉUSSIE</span></h2>
          <p className={styles.subtext}>Opérateur enregistré dans la matrice Ryzen.</p>
          <button onClick={() => window.location.href = '/'} className={styles.submitBtn} style={{ marginTop: '2rem' }}>
            RETOUR AU QG
          </button>
        </div>
      </div>
    );
  }

  // 🟠 ECRAN DU FORMULAIRE
  return (
    <div className={styles.pageContainer}>
      <CyberBackground />
      
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>RECRUTEMENT </h1>
          <p className={styles.subtext}>// INITIALISATION DU PROFIL OPÉRATEUR INDIVIDUEL //</p>
        </div>

        {error && (
          <div className={styles.errorBox}>
            <AlertTriangle size={20} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* LIGNE 1 : Nom & Prénom */}
          <div className={`${styles.grid2} ${styles.animateItem1}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}><User size={16} /> NOM *</label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} className={styles.cyberElement} placeholder="Ex: El Abdi" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}><User size={16} /> PRÉNOM *</label>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className={styles.cyberElement} placeholder="Ex: Ouail" />
            </div>
          </div>

          {/* LIGNE 2 : Statut & École (Les Dropdowns) */}
          <div className={`${styles.grid2} ${styles.animateItem2}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}><Briefcase size={16} /> STATUT *</label>
              <CyberDropdown 
                options={statutOptions} 
                value={formData.statut} 
                onChange={(val: string) => handleDropdownChange('statut', val)} 
                placeholder="-- SÉLECTIONNEZ --" 
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}><GraduationCap size={16} /> ÉCOLE / ÉTABLISSEMENT *</label>
              <CyberDropdown 
                options={ecoleOptions} 
                value={formData.ecole} 
                onChange={(val: string) => handleDropdownChange('ecole', val)} 
                placeholder="-- SÉLECTIONNEZ --" 
              />
            </div>
          </div>

          {/* LIGNE 3 : Motivation */}
          <div className={`${styles.inputGroup} ${styles.animateItem3}`}>
            <label className={styles.label}><Target size={16} /> MOTIVATION DE L'OPÉRATION (OPTIONNEL)</label>
            <textarea name="pourquoiParticipe" value={formData.pourquoiParticipe} onChange={handleChange} className={styles.cyberElement} rows={3} placeholder="Qu'est-ce qui vous pousse à rejoindre l'Oriental Hack 2.0 ?"></textarea>
          </div>

          {/* BOUTON SUBMIT */}
          <div className={styles.animateItem4}>
            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? "TRANSMISSION EN COURS..." : "VALIDER L'ENRÔLEMENT"} <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}