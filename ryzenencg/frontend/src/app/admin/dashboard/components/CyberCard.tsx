import React from 'react';
import styles from './CyberCard.module.css';

interface CyberCardProps {
  title: string;
  value: string | number;
  icon?: string;
}

export default function CyberCard({ title, value, icon }: CyberCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardGlow}></div>
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          {icon && <span className={styles.icon}>{icon}</span>}
        </div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
}