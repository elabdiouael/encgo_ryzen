import React from 'react';
import styles from './AdminLayout.module.css';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className={styles.adminContainer}>
      <div className={styles.cyberGrid}></div>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}