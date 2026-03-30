"use client";

import React, { useState } from 'react';
import { Lock, Terminal, ArrowRight, AlertTriangle } from 'lucide-react';
import styles from './login.module.css';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 💥 THE PASSWORD (beddelo kima bghiti)
    if (password === 'encgoujda2026') {
      // K-n-zer3ou l-Cookie li k-iy-9rah l-Middleware
      document.cookie = "admin_token=ryzen_secured_protocol; path=/; max-age=86400"; // Valide 1 jour
      window.location.href = '/admin/dashboard';
    } else {
      setError("ACCÈS REFUSÉ : Mot de passe incorrect.");
      setPassword('');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.scanlines}></div>
      <div className={styles.terminalBox}>
        <div className={styles.terminalHeader}>
          <Terminal size={18} /> RYZEN_CORE_OS v2.0
        </div>
        
        <div className={styles.terminalBody}>
          <div className={styles.logoGlitch} data-text="RESTRICTED_AREA">RESTRICTED_AREA</div>
          <p className={styles.authDesc}>Veuillez vous identifier pour accéder au système d'administration.</p>

          {error && <div className={styles.errorBox}><AlertTriangle size={18}/> {error}</div>}

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <Lock size={18} className={styles.inputIcon} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez la clé de cryptage..." 
                className={styles.cyberInput}
                autoFocus
              />
            </div>
            
            <button type="submit" className={styles.loginBtn}>
              INITIER LA CONNEXION <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}