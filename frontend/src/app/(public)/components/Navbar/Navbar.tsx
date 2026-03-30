"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, HelpCircle, Handshake, Mail, Users, Menu, X, Terminal } from 'lucide-react';

import NavBackground from './ui/NavMatrix'; 
import InscriptionBtn from './ui/InscriptionBtn';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🛡️ Monitor d l-ecran bash n-bloquiw l-hover f mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/home', icon: <Home size={18} /> },
    { name: 'À Propos', path: '/about', icon: <Info size={18} /> },
    { name: 'Pourquoi', path: '/pourquoi-participer', icon: <HelpCircle size={18} /> },
    { name: 'Édition 1.0', path: '/edition1' },
    { name: 'Comité', path: '/organisateurs', icon: <Users size={18} /> },
    { name: 'Sponsors', path: '/sponsors', icon: <Handshake size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      <div className={styles.fixedCenterWrapper}>
        <nav 
          className={`${styles.navMorphContainer} ${isHovered && !isMobile ? 'nav-hovered' : ''}`}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          {/* ✨ EFFECT CORE */}
          <NavBackground />

          {/* --- LEFT: LOGO --- */}
          <Link href="/home" className={styles.logoSection}>
            <div className={styles.logoImageWrapper}>
              <img src="/ORIENTAL HACK.png" alt="Logo" className={styles.brandLogo} />
              <div className={styles.logoScanline}></div>
            </div>
            
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoTitle}>EDITION_2.0</span>
              <span className={styles.logoDetail}>SYSTEM // ONLINE</span>
            </div>
          </Link>

          {/* --- CENTER: LINKS (Apparaissent au hover) --- */}
          <div className={styles.linksSection}>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`${styles.cyberLink} ${pathname === link.path ? styles.active : ''}`}
              >
                <div className={styles.linkIcon}>{link.icon}</div>
                <span className={styles.linkText} data-glitch={link.name.toUpperCase()}>
                    {link.name.toUpperCase()}
                </span>
                <div className={styles.brackets}>
                  <span className={styles.brLeft}>[</span>
                  <span className={styles.brRight}>]</span>
                </div>
                <div className={styles.activeLine}></div>
              </Link>
            ))}
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className={styles.actionSection}>
            <InscriptionBtn />
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} color="#00d2ff" /> : <Menu size={28} color="#00d2ff" />}
          </button>

          <div className={styles.borderPulse}></div>
        </nav>
      </div>

      {/* --- MOBILE NAV (Terminal Style) --- */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={`mob-${link.name}`} 
            href={link.path} 
            className={styles.mobileNavLink} 
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link href="/inscription" className={styles.mobileCyberBtn} onClick={() => setMobileMenuOpen(false)}>
          <Terminal size={18} /> INITIALISER L'INSCRIPTION
        </Link>
      </div>
    </>
  );
}