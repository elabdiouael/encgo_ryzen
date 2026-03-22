"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, AlertOctagon } from 'lucide-react';
import { apiService } from '@/services/api';
import styles from './TacticalContactForm.module.css';

export default function TacticalContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 🔥 HADI LI KAT-7BESS L-PAGE MA-T-ACTUALISACH!
    
    console.log("🚀 [DEBUG] Bouton cliqué ! Données prêtes à l'envoi :", formData);
    setStatus('loading');
    
    try {
      const response = await apiService.sendContactMessage(formData);
      console.log("✅ [DEBUG] Réponse du Backend :", response);
      setStatus('success');
      setFormData({ nom: '', email: '', sujet: '', message: '' });
    } catch (error) {
      console.error("❌ [DEBUG] Erreur bloquante :", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successPanel}>
        <CheckCircle size={70} className={styles.iconSuccess} />
        <h3>TRANSMISSION VALIDÉE</h3>
        <p>Les données sont enregistrées dans le Core System de l'Admin.</p>
        <button type="button" onClick={() => setStatus('idle')} className={styles.resetBtn}>
          NOUVELLE REQUÊTE
        </button>
      </div>
    );
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      {status === 'error' && (
        <div className={styles.errorBanner}>
          <AlertOctagon size={20} />
          <span>ÉCHEC DE CONNEXION. VÉRIFIEZ L'ÉTAT DU SERVEUR.</span>
        </div>
      )}

      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <input 
            type="text" required value={formData.nom} 
            onChange={e => setFormData({...formData, nom: e.target.value})} 
            placeholder="Identifiant (Nom)" className={styles.cyberInput}
          />
        </div>
        <div className={styles.inputGroup}>
          <input 
            type="email" required value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
            placeholder="Canal de retour (Email)" className={styles.cyberInput}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <input 
          type="text" required value={formData.sujet} 
          onChange={e => setFormData({...formData, sujet: e.target.value})} 
          placeholder="Sujet de la transmission" className={styles.cyberInput}
        />
      </div>

      <div className={styles.inputGroup}>
        <textarea 
          required rows={6} value={formData.message} 
          onChange={e => setFormData({...formData, message: e.target.value})} 
          placeholder="Entrez votre message ici..." className={styles.cyberTextarea}
        ></textarea>
      </div>

      <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
        {status === 'loading' ? 'TRANSMISSION EN COURS...' : <><Send size={18}/> CONFIRMER L'ENVOI</>}
      </button>
    </form>
  );
}