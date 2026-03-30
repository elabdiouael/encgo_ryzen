"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, HelpCircle, Database, Handshake, Mail, Users } from 'lucide-react';
import NavBackground from './ui/NavBackground';
import InscriptionBtn from './ui/InscriptionBtn';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const links = [
    { name: 'ACCUEIL', path: '/home', icon: <Home size={18} /> },
    { name: 'À_PROPOS', path: '/about', icon: <Info size={18} /> },
    { name: 'POURQUOI', path: '/pourquoi-participer', icon: <HelpCircle size={18} /> },
    { name: 'Édition 1.0', path: '/edition1' },
    { name: 'SPONSORS', path: '/sponsors', icon: <Handshake size={18} /> },
    { name: 'COMITÉ', path: '/organisateurs', icon: <Users size={18} /> },
    { name: 'CONTACT', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <div className={styles.fixedCenterWrapper}>
      <nav 
        className={`${styles.navMorphContainer} ${isHovered ? 'nav-hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavBackground />

        {/* --- LEFT: LOGO OFFICIEL --- */}
        <Link href="/home" className={styles.logoSection}>
          {/* 🔥 L-Logo dyalek Hna */}
          <div className={styles.logoImageWrapper}>
            <img src="/ORIENTAL HACK.png" alt="Oriental Hack Logo" className={styles.brandLogo} />
            <div className={styles.logoScanline}></div>
          </div>
          
          <div className={styles.logoTextWrapper}>
            <span className={styles.logoTitle}>EDITION_2.0</span>
            <span className={styles.logoDetail}>SYSTEM // ONLINE</span>
          </div>
        </Link>

        {/* --- CENTER: LINKS --- */}
        <div className={styles.linksSection}>
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`${styles.cyberLink} ${pathname === link.path ? styles.active : ''}`}
            >
              <div className={styles.linkIcon}>{link.icon}</div>
              <span className={styles.linkText} data-glitch={link.name}>{link.name}</span>
              <div className={styles.brackets}>
                <span className={styles.brLeft}>[</span>
                <span className={styles.brRight}>]</span>
              </div>
              {/* Effet d l-khet l-t7tani */}
              <div className={styles.activeLine}></div>
            </Link>
          ))}
        </div>

        {/* --- RIGHT: INSCRIPTION --- */}
        <div className={styles.actionSection}>
          <InscriptionBtn />
        </div>

        {/* Effet l-Neon Pulse 3la l-Border kamla */}
        <div className={styles.borderPulse}></div>
      </nav>
    </div>
  );
}