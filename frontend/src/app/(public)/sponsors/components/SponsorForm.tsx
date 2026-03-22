"use client";

import React, { useState } from 'react';
import { Send, Building, User, Mail, Phone, Briefcase, CheckCircle, AlertTriangle } from 'lucide-react';
import { apiService } from '@/services/api';
import styles from './SponsorForm.module.css';

export default function SponsorForm() {
  const [formData, setFormData] = useState({
    entreprise: '', contactNom: '', email: '', telephone: '', typePartenariat: 'FINANCIER', message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Kan-3iytou l-API dyal Sponsors li deja sawbna f api.ts
      await apiService.sendSponsorshipRequest(formData as any);
      setStatus('success');
      setFormData({ entreprise: '', contactNom: '', email: '', telephone: '', typePartenariat: 'FINANCIER', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error("Erreur Sponsor:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successBox}>
        <CheckCircle size={70} className={styles.successIcon} />
        <h3>REQUÊTE B2B VALIDÉE</h3>
        <p>Votre proposition de partenariat a été transmise à notre comité d'organisation. Nous vous contacterons dans les plus brefs délais.</p>
        <button onClick={() => setStatus('idle')} className={styles.resetBtn}>NOUVELLE REQUÊTE</button>
      </div>
    );
  }

  return (
    <form className={styles.cyberForm} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <Briefcase size={20} className={styles.headerIcon} />
        <h3>PORTAIL PARTENAIRES</h3>
      </div>

      {status === 'error' && (
        <div className={styles.errorBox}>
          <AlertTriangle size={18} /> Erreur de transmission vers le Core System.
        </div>
      )}

      <div className={styles.inputGrid}>
        <div className={styles.inputGroup}>
          <Building size={16} className={styles.inputIcon} />
          <input type="text" required value={formData.entreprise} onChange={e => setFormData({...formData, entreprise: e.target.value})} placeholder="Nom de l'Entreprise" />
        </div>
        <div className={styles.inputGroup}>
          <User size={16} className={styles.inputIcon} />
          <input type="text" required value={formData.contactNom} onChange={e => setFormData({...formData, contactNom: e.target.value})} placeholder="Contact (Nom Complet)" />
        </div>
        <div className={styles.inputGroup}>
          <Mail size={16} className={styles.inputIcon} />
          <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email Professionnel" />
        </div>
        <div className={styles.inputGroup}>
          <Phone size={16} className={styles.inputIcon} />
          <input type="tel" required value={formData.telephone} onChange={e => setFormData({...formData, telephone: e.target.value})} placeholder="Numéro de Téléphone" />
        </div>
      </div>

      <div className={styles.inputGroupSelect}>
        <label>TYPE DE PARTENARIAT SOUHAITÉ</label>
        <select value={formData.typePartenariat} onChange={e => setFormData({...formData, typePartenariat: e.target.value})}>
          <option value="FINANCIER">Sponsoring Financier</option>
          <option value="LOGISTIQUE">Soutien Logistique</option>
          <option value="TECHNIQUE">Expertise / Mentoring</option>
          <option value="LOTS">Lots & Récompenses</option>
          <option value="AUTRE">Autre Proposition</option>
        </select>
      </div>

      <div className={styles.inputGroupArea}>
        <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Détaillez votre proposition de valeur..."></textarea>
      </div>

      <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
        {status === 'loading' ? 'TRANSMISSION...' : <><Send size={18} /> SOUMETTRE LA PROPOSITION</>}
      </button>
    </form>
  );
}