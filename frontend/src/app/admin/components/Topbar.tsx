import React from 'react';
import { Search, Bell } from 'lucide-react'; // 🔥 Icons n9iyin
import styles from './Topbar.module.css';

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.searchContainer}>
        <div className={styles.cyberInput}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Trace data..." className={styles.input} />
        </div>
      </div>
      
      <div className={styles.profileContainer}>
        <div className={styles.notification}>
          <Bell size={22} className={styles.bell} />
          <span className={styles.badge}>3</span>
        </div>
        <div className={styles.avatar}>
          <img src="https://i.pravatar.cc/150?u=ryzen" alt="Admin" />
        </div>
      </div>
    </header>
  );
}