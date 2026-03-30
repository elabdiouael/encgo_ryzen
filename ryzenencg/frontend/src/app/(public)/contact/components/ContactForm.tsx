"use client";

import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';
import { apiService } from '@/services/api';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await apiService.sendContactMessage(formData);
      setStatus('success');
      setFormData({ nom: '', email: '', sujet: '', message: '' });
      // Kiy-rje3 idle mn b3d 5s bach y9der y-sifet message akhor
      setTimeout(() => setStatus('idle'), 5000); 
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successBox}>
        <CheckCircle size={80} className={styles.successIcon} />
        <h3>TRANSMISSION RÉUSSIE</h3>
        <p>Le message a été encrypté et envoyé à notre centre de commandement. Vous recevrez une réponse sur votre terminal sous peu.</p>
        <button onClick={() => setStatus('idle')} className={styles.resetBtn}>NOUVELLE TRANSMISSION</button>
      </div>
    );
  }

  return (
    <form className={styles.cyberForm} onSubmit={handleSubmit}>
      {status === 'error' && (
        <div className={styles.errorBox}>
          <AlertTriangle size={20} />
          <span>Erreur de transmission. Le serveur est peut-être hors ligne.</span>
        </div>
      )}

      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <User size={18} className={styles.inputIcon} />
          <input 
            type="text" required placeholder="Nom Complet"
            value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
          />
          <div className={styles.inputGlow}></div>
        </div>
        <div className={styles.inputGroup}>
          <Mail size={18} className={styles.inputIcon} />
          <input 
            type="email" required placeholder="Adresse Email"
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <div className={styles.inputGlow}></div>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <MessageSquare size={18} className={styles.inputIcon} />
        <input 
          type="text" required placeholder="Sujet de la transmission"
          value={formData.sujet} onChange={e => setFormData({...formData, sujet: e.target.value})}
        />
        <div className={styles.inputGlow}></div>
      </div>

      <div className={styles.inputGroup}>
        <textarea 
          required placeholder="Saisissez votre message ici..." rows={6}
          value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
        ></textarea>
        <div className={styles.inputGlow}></div>
      </div>

      <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
        {status === 'loading' ? (
          <span className={styles.loader}>ENCRYPTAGE ET ENVOI...</span>
        ) : (
          <><Send size={20}/> TRANSMETTRE AU QUARTIER GÉNÉRAL</>
        )}
      </button>
    </form>
  );
}