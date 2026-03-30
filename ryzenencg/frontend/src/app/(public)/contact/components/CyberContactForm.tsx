"use client";

import React, { useState } from 'react';
import { Send, Terminal, AlertTriangle, CheckCircle } from 'lucide-react';
import { apiService } from '@/services/api';
import styles from './CyberContactForm.module.css';

export default function CyberContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await apiService.sendContactMessage(formData);
      setStatus('success');
      setFormData({ nom: '', email: '', sujet: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); 
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successBox}>
        <CheckCircle size={60} className={styles.successIcon} />
        <h3>PACKET DELIVERED</h3>
        <p>Les données ont été injectées dans la DB. En attente de réponse Admin...</p>
        <button onClick={() => setStatus('idle')} className={styles.resetBtn}>REBOOT TERMINAL</button>
      </div>
    );
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <Terminal size={18} className={styles.termIcon} />
        <span>root@ryzen-os:~/contact-protocol$ ./init_transfer.sh</span>
      </div>

      <form className={styles.cyberForm} onSubmit={handleSubmit}>
        {status === 'error' && (
          <div className={styles.errorBox}>
            <AlertTriangle size={18} /> CONNECTION FAILED. CHECK BACKEND.
          </div>
        )}

        <div className={styles.inputGrid}>
          <div className={styles.inputContainer}>
            <input type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})} placeholder=" " />
            <label>IDENTIFIANT (NOM)</label>
            <div className={styles.scanline}></div>
          </div>
          <div className={styles.inputContainer}>
            <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder=" " />
            <label>CANAL DE RETOUR (EMAIL)</label>
            <div className={styles.scanline}></div>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <input type="text" required value={formData.sujet} onChange={e => setFormData({...formData, sujet: e.target.value})} placeholder=" " />
          <label>OBJET DE LA TRANSMISSION</label>
          <div className={styles.scanline}></div>
        </div>

        <div className={styles.inputContainer}>
          <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder=" "></textarea>
          <label>PAYLOAD (MESSAGE)</label>
          <div className={styles.scanline}></div>
        </div>

        <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
          {status === 'loading' ? (
            <span className={styles.loader}>UPLOADING PAYLOAD...</span>
          ) : (
            <><Send size={18}/> EXECUTE TRANSFER</>
          )}
        </button>
      </form>
    </div>
  );
}