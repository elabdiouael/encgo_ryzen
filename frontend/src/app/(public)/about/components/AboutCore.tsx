"use client";

import React, { useRef } from 'react';
import { Target, Zap, Rocket, Users, ShieldAlert, Cpu } from 'lucide-react';
import styles from './AboutCore.module.css';

// ----------------------------------------------------
// 🔥 COMPOSANT 1 : LA CARTE 3D (ZÉRO LAG)
// ----------------------------------------------------
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // RequestAnimationFrame kat-damen 60 FPS
    window.requestAnimationFrame(() => {
      if (!cardRef.current || !reflectionRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2; 
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; 
      const rotateY = ((x - centerX) / centerX) * 10;

      // Appliquer direct f l-DOM (Bypass React Render = Zero Lag)
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      reflectionRef.current.style.transform = `translate(${rotateY * 2}px, ${-rotateX * 2}px)`;
    });
  };

  const handleMouseLeave = () => {
    window.requestAnimationFrame(() => {
      if (!cardRef.current || !reflectionRef.current) return;
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
      reflectionRef.current.style.transform = `translate(0px, 0px)`;
    });
  };

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className={`${styles.tiltCard} ${className}`}
      style={{ willChange: 'transform' }} // 🔥 FORCER L-GPU
    >
      <div ref={reflectionRef} className={styles.reflection}></div>
      <div className={styles.cardInner}>{children}</div>
    </div>
  );
};

// ... (Khelli CyberText w AboutCore li t7t kima homa f l-code l-9dim)

// ----------------------------------------------------
// COMPOSANT 2 : LE TEXTE ANIMÉ (3 ÉTATS)
// ----------------------------------------------------
const CyberText = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <p className={styles.animText} style={{ animationDelay: `${delay}s` }}>
    {children}
  </p>
);

// ----------------------------------------------------
// COMPOSANT PRINCIPAL : L'ASSEMBLAGE X9999
// ----------------------------------------------------
export default function AboutCore() {
  const objectives = [
    { icon: <Zap size={24}/>, text: "Stimuler la créativité, l’innovation et l’esprit d’initiative des jeunes marocains." },
    { icon: <Cpu size={24}/>, text: "Accompagner les entreprises et l'ESS dans leur transformation digitale." },
    { icon: <Users size={24}/>, text: "Favoriser la collaboration entre jeunes talents, étudiants et professionnels." },
    { icon: <Target size={24}/>, text: "Mettre en valeur les jeunes comme acteurs essentiels du changement." }
  ];

  return (
    <div className={styles.coreContainer}>
      
      {/* SECTION 1: TITRE & PRÉSENTATION */}
      <TiltCard className={styles.heroCard}>
        <div className={styles.badge}><ShieldAlert size={16}/> PROJET_CORE</div>
        <h1 className={styles.mainTitle}>
          ORIENTAL_HACK <span className={styles.v2}>2.0</span>
        </h1>
        <h2 className={styles.subTitle}>
          Intelligence Artificielle & Innovation au service de la performance et de la compétiti des entreprises et des organisations de l'économie sociale et solidaire.
        </h2>
        
        <div className={styles.divider}></div>

        <CyberText delay={0.2}>
          <span className={styles.highlightCyan}>OrientalHack 2.0</span> célèbre et valorise les talents des <span className={styles.highlightPurple}>jeunes marocains</span>, en utilisant l’intelligence artificielle et l’innovation digitale pour répondre aux besoins des entreprises et organisations de l’économie sociale et solidaire.
        </CyberText>
        <CyberText delay={0.4}>
          Ce hackathon offre un espace unique de collaboration et de création, où les jeunes peuvent transformer leurs idées en solutions concrètes à <span className={styles.highlightPurple}>fort impact pour la région de l’Oriental</span> et le Maroc.
        </CyberText>
        <CyberText delay={0.6}>
          En stimulant leur créativité, leur esprit d’initiative et leur capacité à innover, OrientalHack affirme que les jeunes marocains sont les <span className={styles.highlightCyan}>véritables acteurs du changement</span> et de l’avenir technologique et social du pays.
        </CyberText>
      </TiltCard>

      {/* SECTION 2: OBJECTIFS (GRID) */}
      <div className={styles.objectivesGrid}>
        {objectives.map((obj, i) => (
          <TiltCard key={i} className={styles.objCard}>
            <div className={styles.objIcon}>{obj.icon}</div>
            <p className={styles.objText}>{obj.text}</p>
          </TiltCard>
        ))}
      </div>

      {/* SECTION 3: CLUB RYZEN & PUBLIC CIBLE */}
      <div className={styles.splitSection}>
        <TiltCard className={styles.clubCard}>
          <h3 className={styles.sectionTitle}><Rocket size={20}/> À PROPOS DU CLUB RYZEN</h3>
          <CyberText delay={0.2}>
            Le <span className={styles.highlightPurple}>club Ryzen de l’ENCG Oujda</span> est l’initiateur et organisateur d’OrientalHack. Sa mission est de promouvoir l’innovation digitale, la créativité et les compétences technologiques.
          </CyberText>
          <CyberText delay={0.4}>
            À travers des hackathons, des formations et des ateliers, le club accompagne les jeunes dans la réalisation de leurs idées et leur préparation au monde professionnel, en les rapprochant des besoins réels du marché.
          </CyberText>
        </TiltCard>

        <TiltCard className={styles.targetCard}>
          <h3 className={styles.sectionTitle}><Users size={20}/> PUBLIC CIBLE</h3>
          <CyberText delay={0.2}>
            OrientalHack 2.0 et le club Ryzen s’adressent aux <span className={styles.highlightCyan}>jeunes marocains, étudiants et jeunes professionnels</span>, désireux de développer des compétences en innovation, intelligence artificielle et digitalisation.
          </CyberText>
          <CyberText delay={0.4}>
            L'objectif est d'avoir un <span className={styles.highlightPurple}>impact concret</span> sur la société et l’économie marocaine.
          </CyberText>
        </TiltCard>
      </div>

    </div>
  );
}