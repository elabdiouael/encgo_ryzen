"use client";

import React from 'react';
import { Database, Link as LinkIcon, ChevronRight, ShieldCheck, FileText, Cpu, Star } from 'lucide-react';
import styles from './ArchiveContent.module.css';

export default function ArchiveContent() {
  const images = [
    '/imagess/image1.jpeg', '/imagess/image3.jpeg', '/imagess/image4.JPEG', 
    '/imagess/image5.jpeg', '/imagess/image6.jpeg', '/imagess/image7.jpeg',
    '/imagess/image8.jpeg', '/imagess/image9.jpeg', '/imagess/image10.jpeg', '/imagess/image.jpeg'
  ];

  // 🔥 Les Nouveaux Logos (M-sttfin bach y-dourou f l-Carousel)
  const partners = [
    { src: '/imagess/umppppppppppppp.png', alt: 'UMP' },
    { src: '/imagess/encg.png', alt: 'ENCG Oujda' },
    { src: '/imagess/DONDATUION.png', alt: 'Fondation Abdelkader Bensalah' },

    { src: '/imagess/cri.png', alt: 'CRI Oriental' },
    { src: '/imagess/excen.png', alt: 'Excen Consulting' },
    
    { src: '/imagess/logo mark 2a.png', alt: 'Mark 2A' },
  ];

  return (
    <div className={styles.terminalContainer}>
      
      <div className={styles.bentoGrid}>
        
        {/* ======================================================= */}
        {/* WIDGET 1 : LE RAPPORT CLASSIFIÉ (TEXTE + HOMMAGE)       */}
        {/* ======================================================= */}
        <div className={`${styles.bentoCard} ${styles.heroWidget}`}>
          <div className={styles.widgetHeader}>
            <Database size={14} className={styles.iconCyan} />
            <span>SYS.INFO // ARCHIVE_1.0_DECRYPTED</span>
          </div>
          
          <h1 className={styles.mainTitle}>
            MÉMOIRE DU <span className={styles.highlight}>GENÈSE</span>
          </h1>

          <div className={styles.classifiedText}>
            <p>
              La première édition des Journées Nationales <strong className={styles.textCyan}>« Oriental-Hack 1.0 »</strong>, organisée du 14 au 16 février 2025 à l’École Nationale de Commerce et de Gestion d’Oujda, a été dédiée en hommage à <span className={styles.textGold}><Star size={14} className={styles.inlineIcon}/> Marwa Cheikh Youssef</span>.
            </p>
            <p>
              Placée sous le thème <strong className={styles.textPurple}>« Solutions digitales pour les entreprises de l’économie sociale et solidaire »</strong>, cette édition a rassemblé des équipes porteuses de projets innovants, engagées à mettre le digital au service de l’impact social.
            </p>
            <p>
              Soutenu par la Présidence de l’Université Mohammed Premier, le Centre Régional d’Investissement de l’Oriental et la Fondation Abdelkader Bensalah, l’événement, porté par le <strong className={styles.textCyan}>Club Ryzen</strong>, a marqué le lancement d’une dynamique ambitieuse en faveur de l’innovation et de la digitalisation au sein de l’école.
            </p>
          </div>

          <a href="https://encgo.ump.ma/fr/event/lorientalhack-1-ere-edition" target="_blank" rel="noopener noreferrer" className={styles.cyberButton}>
            <LinkIcon size={16} /> LOGS OFFICIELS UMP <ChevronRight size={18} className={styles.btnArrow} />
            <div className={styles.btnScanline}></div>
          </a>
        </div>

        {/* ======================================================= */}
        {/* WIDGET 2 : DOSSIER DE PRESSE                            */}
        {/* ======================================================= */}
        <div className={`${styles.bentoCard} ${styles.pressWidget}`}>
          <div className={styles.widgetHeader}>
            <FileText size={14} className={styles.iconPurple} />
            <span>FILE.DOC // L_ECONOMISTE</span>
          </div>
          <div className={styles.pressImageContainer}>
            <img src="/imagess/affiche.png" alt="Presse" className={styles.pressImg} />
            <div className={styles.glassOverlay}>
              <span className={styles.overlayText}>DOC_SCANNED</span>
            </div>
            <div className={styles.scanBar}></div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* WIDGET 3 : PARTENAIRES (INFINITE MARQUEE CAROUSEL)      */}
        {/* ======================================================= */}
        <div className={`${styles.bentoCard} ${styles.partnersWidget}`}>
          <div className={styles.widgetHeader}>
            <ShieldCheck size={14} className={styles.iconCyan} />
            <span>AUTHORIZATION_NODES // SPONSORS_ACTIFS</span>
          </div>
          
          {/* L-Carousel li kiy-dor dima (Infinite Scroll) */}
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {/* N-dirou boucle l-les logos 2 merrat bach y-b9a y-dor bla ma-y-7bess */}
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className={styles.logoSlot}>
                  <img src={partner.src} alt={partner.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================= */}
      {/* WIDGET 4 : GALLERY TACTIQUE                             */}
      {/* ======================================================= */}
      <div className={`${styles.bentoCard} ${styles.galleryWidget}`}>
        <div className={styles.widgetHeader}>
          <Cpu size={14} className={styles.iconPurple} />
          <span>VISUAL_DATA // FIELD_MEMORIES</span>
        </div>
        
        <div className={styles.tacticalGallery}>
          {images.map((src, index) => (
            <div key={index} className={styles.holoSlot}>
              <img src={src} alt={`Log ${index}`} loading="lazy" className={styles.tacticalImg} />
              <div className={styles.slotOverlay}></div>
              {/* HUD Target Edges */}
              <div className={styles.hudTL}></div><div className={styles.hudBR}></div>
              <div className={styles.imageScanner}></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}