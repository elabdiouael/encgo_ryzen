"use client";

import React, { useState } from 'react';
import { Mail, User, Clock, Reply, CheckCircle, Send } from 'lucide-react';
import { ContactMessage } from '@/types';
import { apiService } from '@/services/api';
import styles from './MessageCard.module.css';

interface MessageCardProps {
  message: ContactMessage;
}

export default function MessageCard({ message }: MessageCardProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isReplied, setIsReplied] = useState(message.isReplied || false);
  const [loading, setLoading] = useState(false);

  const handleReplySubmit = async () => {
    if (!replyText.trim() || !message.id) return;
    
    setLoading(true);
    try {
      await apiService.replyToMessage(message.id, replyText);
      setIsReplied(true);
      setIsReplying(false);
    } catch (error) {
      alert("Erreur lors de l'envoi de la réponse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.cardContainer} ${isReplied ? styles.repliedCard : ''}`}>
      <div className={styles.header}>
        <div className={styles.senderInfo}>
          <div className={styles.avatar}>
            <User size={20} color={isReplied ? "#00ffaa" : "#00d2ff"} />
          </div>
          <div>
            <h4 className={styles.name}>{message.nom}</h4>
            <a href={`mailto:${message.email}`} className={styles.email}>{message.email}</a>
          </div>
        </div>
        <div className={styles.dateInfo}>
          <Clock size={14} />
          <span>{message.dateEnvoi ? new Date(message.dateEnvoi).toLocaleDateString() : 'Récent'}</span>
        </div>
      </div>

      <div className={styles.subjectRow}>
        <span className={styles.badge}>Sujet</span>
        <span className={styles.subject}>{message.sujet}</span>
      </div>

      <div className={styles.body}>
        <p>{message.message}</p>
      </div>

      {/* Affichage de la réponse si déjà répondu */}
      {isReplied && message.reponseAdmin && !isReplying && (
        <div className={styles.adminReplyBox}>
          <strong>Votre réponse :</strong>
          <p>{message.reponseAdmin || replyText}</p>
        </div>
      )}

      {/* Zone de saisie de la réponse */}
      {isReplying && (
        <div className={styles.replyArea}>
          <textarea 
            className={styles.replyInput} 
            placeholder="Tapez votre réponse ici..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            disabled={loading}
          ></textarea>
          <div className={styles.replyActions}>
            <button className={styles.cancelBtn} onClick={() => setIsReplying(false)}>Annuler</button>
            <button className={styles.sendBtn} onClick={handleReplySubmit} disabled={loading || !replyText.trim()}>
              {loading ? 'Envoi...' : <><Send size={16} /> Envoyer</>}
            </button>
          </div>
        </div>
      )}

      {/* Footer Boutons */}
      <div className={styles.footer}>
        {isReplied ? (
          <span className={styles.statusReplied}><CheckCircle size={16} /> Traité</span>
        ) : (
          !isReplying && (
            <button className={styles.replyBtn} onClick={() => setIsReplying(true)}>
              <Reply size={16} /> Répondre
            </button>
          )
        )}
      </div>
    </div>
  );
}