import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import styles from './admin-layout.module.css';

export default function AdminGlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminRoot}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <Topbar />
        {/* L-Grid li kiy-t7erek li sawbna f l-dashboard ghadi n-jibouh hna bach y3em f l-admin kamel */}
        <div className={styles.cyberGrid}></div>
        <main className={styles.contentArea}>
          {children}
        </main>
      </div>
    </div>
  );
}