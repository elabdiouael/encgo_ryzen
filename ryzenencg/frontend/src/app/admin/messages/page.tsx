import React from 'react';
import { Mail } from 'lucide-react';
import { apiService } from '@/services/api';
import MessageCard from './components/MessageCard';
import styles from './messages.module.css';

export default async function MessagesPage() {
  const messages = await apiService.getMessages();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerSection}>
        <h1 className={styles.glitchTitle} data-text="INBOX">
          INBOX
        </h1>
        <p className={styles.subtitle}>Communications & Requêtes Utilisateurs</p>
      </div>

      {messages.length === 0 ? (
        <div className={styles.emptyState}>
          <Mail size={48} className={styles.emptyIcon} />
          <h3>Boîte de réception vide</h3>
          <p>Aucun message reçu pour le moment.</p>
        </div>
      ) : (
        <div className={styles.messagesList}>
          {messages.map((msg: any) => (
            <MessageCard key={msg.id || msg.email} message={msg} />
          ))}
        </div>
      )}
    </div>
  );
}