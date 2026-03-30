"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Handshake, Mail ,Database} from 'lucide-react'; // 🔥 Icons n9iyin
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Équipes', path: '/admin/equipes', icon: <Users size={20} /> },
    { name: 'Sponsors', path: '/admin/sponsors', icon: <Handshake size={20} /> },
    { name: 'Messages', path: '/admin/messages', icon: <Mail size={20} /> },
    { name: 'Archives CMS', path: '/admin/archives', icon: <Database size={20} /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.glitchLogo} data-text="RYZEN ADMIN">
          RYZEN ADMIN
        </div>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link href={item.path} key={item.name} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.text}>{item.name}</span>
              {isActive && <div className={styles.activeGlow}></div>}
            </Link>
          );
        })}
      </nav>

      <div className={styles.bottomSection}>
        <div className={styles.systemStatus}>
          <span className={styles.statusDot}></span>
          System Online
        </div>
      </div>
    </aside>
  );
}