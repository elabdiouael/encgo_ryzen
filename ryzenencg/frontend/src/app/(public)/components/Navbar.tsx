"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal, ShieldAlert } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 🔥 FIX : L-Liyaen m-riglin hna
  const navLinks = [
    { name: 'Accueil', path: '/home' },
    { name: 'À Propos', path: '/about' },
    { name: 'Pourquoi Participer', path: '/pourquoi-participer' },
    { name: 'Édition 1.0', path: '/edition1' }, // 👈 HNA FIN BDDELNA /archive b /edition1
    { name: 'Comité', path: '/organisateurs' },  // 👈 Zedt lik had l-Lien 7it nssitih
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.navbarWrapper}>
      {/* L-Scene 3D li kat-hvez l-Navbar */}
      <div className={styles.navScene}>
        
        {/* L-Moka33ab li kiy-dor f l-Hover */}
        <div className={styles.navCube}>
          
          {/* 🧊 FACE 1: IDLE (Calm, Glassmorphism, Professional) */}
          <div className={`${styles.navFace} ${styles.faceFront}`}>
            <div className={styles.navContainer}>
              <Link href="/home" className={styles.logoFront}>
                ORIENTAL_HACK <span className={styles.versionFront}>v2.0</span>
              </Link>
              <nav className={styles.desktopNav}>
                {navLinks.map((link) => (
                  <Link key={`front-${link.name}`} href={link.path} className={`${styles.linkFront} ${pathname === link.path ? styles.activeFront : ''}`}>
                    {link.name}
                  </Link>
                ))}
                <div className={styles.indicatorPulse}></div>
              </nav>
            </div>
          </div>

          {/* 🔥 FACE 2: HOVER (Aggressive Cyberpunk, Neons, Glitch) */}
          <div className={`${styles.navFace} ${styles.faceBottom}`}>
            <div className={styles.navContainerBottom}>
              <Link href="/home" className={styles.logoBottom}>
                <Terminal size={20} className={styles.iconGlow} />
                <span className={styles.glitchText} data-text="SYS.ORIENTAL_HACK">SYS.ORIENTAL_HACK</span>
              </Link>
              <nav className={styles.desktopNavBottom}>
                {navLinks.map((link) => (
                  <Link key={`bottom-${link.name}`} href={link.path} className={styles.linkBottom}>
                    [{link.name.toUpperCase()}]
                  </Link>
                ))}
                {/* L-Bouton d l-Inscription f l-Hover Face */}
                <Link href="/inscription" className={styles.cyberBtnBottom}>
                  <ShieldAlert size={16} /> S'INSCRIRE_MAINTENANT
                </Link>
              </nav>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Toggle (Kiy-b9a barra l-3D bach yb9a kheddam f tel) */}
      <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} color="#00d2ff" /> : <Menu size={28} color="#00d2ff" />}
      </button>

      {/* Mobile Menu (Kiy-b9a classique bach may-hbelch l-navigateur f tel) */}
      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link key={`mob-${link.name}`} href={link.path} className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href="/inscription" className={styles.mobileCyberBtn} onClick={() => setMobileMenuOpen(false)}>
            S'INSCRIRE
          </Link>
        </div>
      )}
    </header>
  );
}