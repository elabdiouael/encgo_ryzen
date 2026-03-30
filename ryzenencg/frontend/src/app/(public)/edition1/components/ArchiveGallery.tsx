"use client";

import React from 'react';
import { Camera, FileText } from 'lucide-react';
import styles from './ArchiveGallery.module.css';

export default function ArchiveGallery() {
  // 🔥 L-Paths d tsawer mn l-folder public/imagess
  const images = [
    { src: '/imagess/image1.jpeg', alt: 'Oriental Hack Team' },
    { src: '/imagess/image2.jpg', alt: 'Présentation' }, // ⚠️ Beddel HEIC l jpg f l-pc dyalek!
    { src: '/imagess/image3.jpeg', alt: 'Salle de conférence' },
    { src: '/imagess/image4.JPEG', alt: 'Audience' },
    { src: '/imagess/image5.jpeg', alt: 'Intervenant' },
    { src: '/imagess/image6.jpeg', alt: 'Discussion' },
    { src: '/imagess/image7.jpeg', alt: 'Jury' },
    { src: '/imagess/image8.jpeg', alt: 'Photo de groupe' },
    { src: '/imagess/image9.jpeg', alt: 'Remise des prix' },
    { src: '/imagess/image10.jpeg', alt: 'Équipe gagnante' },
    { src: '/imagess/image.jpeg', alt: 'Ambiance' },
  ];

  return (
    <div className={styles.galleryContainer}>
      
      {/* 📰 SECTION 1 : REVUE DE PRESSE (L'Economiste) */}
      <div className={styles.sectionHeader}>
        <FileText className={styles.iconCyan} size={24} />
        <h2 className={styles.sectionTitle}>REVUE DE PRESSE</h2>
      </div>
      
      <div className={styles.pressCard}>
        <div className={styles.cardGlow}></div>
        {/* Tsswira d l'article li sifti liya (Khass t-koun f public smytha article.jpg awla b7al hka) */}
        <img src="/article.jpg" alt="Article L'Economiste" className={styles.pressImg} /> 
        <div className={styles.scanline}></div>
      </div>

      {/* 📸 SECTION 2 : SOUVENIRS DU TERRAIN */}
      <div className={styles.sectionHeader} style={{ marginTop: '80px' }}>
        <Camera className={styles.iconPurple} size={24} />
        <h2 className={styles.sectionTitle}>ARCHIVES VISUELLES</h2>
      </div>

      <div className={styles.masonryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.holoImageCard} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={styles.imageWrapper}>
              <img src={img.src} alt={img.alt} loading="lazy" className={styles.galleryImg} />
              
              {/* Effets Cyber */}
              <div className={styles.imageOverlay}></div>
              <div className={styles.cornerTL}></div><div className={styles.cornerTR}></div>
              <div className={styles.cornerBL}></div><div className={styles.cornerBR}></div>
              <div className={styles.hoverScanner}></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}