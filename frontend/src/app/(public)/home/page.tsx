"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Radio, ArrowRight, ShieldAlert, Database, Target, Users, ShieldCheck, Zap, ChevronDown, Cpu, Fingerprint } from 'lucide-react';
import GameEngineBg from './components/GameEngineBg';
import styles from './home.module.css';

// 🧠 DICTIONNAIRE DU CONTENU 
const DECK_DATA = {
  default: {
    id: "default", color: "#00d2ff", badge: "INCOMING_BROADCAST", icon: <Radio size={18} className={styles.pulseIcon} />,
    title: "ORIENTAL_HACK 2.0", 
    subtitle: "L’Oriental Hackathon lance officiellement son appel à candidatures !",
    description: "Étudiants, développeurs, designers et entrepreneurs, saisissez l’opportunité de relever un défi unique : pendant 3 jours d’intelligence collective, transformez vos idées en solutions digitales innovantes qui répondent aux enjeux des entreprises et organisations de l’économie sociale et solidaire au Maroc.",
    quote: "« ⏳ Inscriptions ouvertes jusqu’au 14 Avril 2026 Places limitées — ne ratez pas votre chance. »",
    actionText: "REJOIGNEZ L'EXPÉRIENCE", actionLink: "/inscription"
  },
  register: {
    id: "register", color: "#ff0055", badge: "SYSTEM.REGISTRATION", icon: <ShieldAlert size={18} />,
    title: "SÉCURISEZ VOTRE PLACE", 
    subtitle: "L’arène est prête. Les places sont limitées.",
    description: "Formez une équipe de 4 participants. Oriental Hack 2.0 se déroule sur 3 jours, dont 24 heures intensives pour concevoir et prototyper une solution innovante. Le compte à rebours est lancé.",
    quote: "« Passez à l’action et présentez votre projet devant un jury d’experts. »",
    actionText: "INITIALISER L'INSCRIPTION", actionLink: "/inscription"
  },
  archive: {
    id: "archive", color: "#ff6f00", badge: "DATA_VAULT", icon: <Database size={18} />,
    title: "ARCHIVES | ÉDITION 1.0", 
    subtitle: "Revivez la genèse du mouvement Oriental Hack.",
    description: "Plongez dans les archives de la première édition : explorez les photos officielles, découvrez les partenaires et sponsors qui ont soutenu l’événement et parcourez la couverture médiatique qui a accompagné ce lancement.",
    quote: "« Explorez, découvrez et parcourez la genèse de l'événement. »",
    actionText: "ACCÉDER AUX LOGS", actionLink: "/edition1"
  },
  about: {
    id: "about", color: "#bc13fe", badge: "WHO_ARE_WE", icon: <Users size={18} />,
    title: "LE CLUB RYZEN", 
    subtitle: "Un écosystème engagé au cœur de l’innovation.",
    description: "Le Club Ryzen de l’ENCG Oujda contribue au développement des compétences digitales des étudiants de l’École Nationale de Commerce et de Gestion et de l’Université Mohammed Premier.",
    quote: "« Travailler sur des projets concrets, en lien direct avec les besoins du marché et à impact réel. »",
    actionText: "NOTRE MISSION", actionLink: "/about"
  },
  why: {
    id: "why", color: "#ffd700", badge: "THE_OBJECTIVE", icon: <Target size={18} />,
    title: "POURQUOI PARTICIPER ?", 
    subtitle: "Faites grandir votre potentiel !",
    description: "Boostez vos compétences en intelligence artificielle et innovation, développez votre esprit entrepreneurial, élargissez votre réseau et bénéficiez d’un mentorat d’excellence, tout en créant des solutions innovantes pour les organisations de l’ESS.",
    quote: "« Enrichissez votre CV avec une expérience unique et reconnue. »",
    actionText: "DÉCOUVRIR LES AVANTAGES", actionLink: "/pourquoi-participer"
  }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<keyof typeof DECK_DATA>('default');
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollFade, setScrollFade] = useState(1);

  const activeData = DECK_DATA[activeTab];

  const handleHover = (tab: keyof typeof DECK_DATA) => {
    if (tab !== activeTab && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => { setActiveTab(tab); setIsAnimating(false); }, 350); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let fade = 1 - (window.scrollY / (window.innerHeight * 0.4));
      if (fade < 0) fade = 0;
      if (fade > 1) fade = 1;
      setScrollFade(fade);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDeck = () => {
    document.getElementById('cyber-deck')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.pageWrapper} data-state={activeTab} style={{ '--theme-color': activeData.color } as React.CSSProperties}>
      
      {/* 👑 L-BADGE TELEPORT L-HBIL (5s Visible, 5s Hidden) */}
      <div className={styles.creatorBadge}>
        <div className={styles.badgeGlow}></div>
        <Fingerprint size={18} className={styles.fingerprintIcon} />
        <div className={styles.badgeTextWrapper}>
          <span className={styles.badgeTop}>ENCG OUJDA // CLUB RYZEN</span>
          <span className={styles.badgeBottom}>SYS.ARCHITECT: <strong className={styles.creatorName}>ING. OUAIL ELABDI</strong></span>
        </div>
      </div>

      {/* 🎮 MOTEUR 3D */}
      <GameEngineBg activeTab={activeTab} />

      {/* 🎬 HERO SECTION (Native CSS Sticky Scroll) */}
      <div className={styles.heroContainer}>
        <section className={styles.heroSection} style={{ opacity: scrollFade, pointerEvents: scrollFade > 0.5 ? 'auto' : 'none' }}>
          <div className={styles.heroBadge}>
            <Zap size={16} className={styles.zapPulse}/> L'EXPÉRIENCE ULTIME
          </div>
          <h1 className={styles.megaTitle} data-text="ORIENTAL_HACK">ORIENTAL_HACK</h1>
          <h2 className={styles.megaSubtitle}>VERSION 2.0 // DEPLOYMENT</h2>
          <button onClick={scrollToDeck} className={styles.scrollBtn}>
            INITIER L'INTERFACE <ChevronDown className={styles.bounceIcon} />
          </button>
        </section>
      </div>

      {/* 🖥️ CYBER DECK (L-UI x1000 - Background Transparent) */}
      <section id="cyber-deck" className={styles.deckSection}>
        <div className={styles.interfaceContainer}>
          
          {/* --- MAIN DISPLAY (LEFT) --- */}
          <div className={styles.mainDisplay}>
            {/* Details Jdad d 3026 */}
            <div className={styles.cardNoise}></div> 
            <div className={styles.cardCyberGrid}></div>
            <div className={styles.hexOverlay}></div> 
            
            <div key={activeTab} className={`${styles.displayContent} ${isAnimating ? styles.glitchOut : styles.glitchIn}`}>
              
              <div className={styles.cardHeaderDesign}>
                 <div className={styles.badgeWrapper}>
                   <div className={styles.iconBox}>{activeData.icon}</div> 
                   <span className={styles.badgeText}>{activeData.badge}</span>
                 </div>
                 <div className={styles.statusOk}>
                    <Cpu size={14} className={styles.statusPulse} /> SYS.ONLINE
                 </div>
              </div>

              <h1 className={styles.typewriterTitle}>{activeData.title}</h1>
              <h2 className={styles.subtitle}>{activeData.subtitle}</h2>
              
              <div className={styles.textContent}>
                <p>{activeData.description}</p>
                <blockquote className={styles.quoteBlock}>{activeData.quote}</blockquote>
              </div>

              <Link href={activeData.actionLink} className={styles.actionButton}>
                <span className={styles.btnText}>{activeData.actionText}</span>
                <ArrowRight size={20} className={styles.arrow} />
                <div className={styles.btnHoverEffect}></div>
                <div className={styles.btnMicroScan}></div>
              </Link>
              
              {/* HUD Decorations x1000 */}
              <div className={styles.hudCrosshairTL}></div>
              <div className={styles.hudCrosshairBR}></div>
              <div className={styles.hudRadarCircle}></div>
              <div className={styles.dataMetrics}>
                <span>VOL_99%</span>
                <span>TGT_LOCKED</span>
                <span className={styles.metricBlink}>_REC</span>
              </div>
              <div className={styles.scanLaser}></div>
            </div>
          </div>

          {/* --- COMMAND MENU (RIGHT) --- */}
          <div className={styles.commandMenu}>
            <div className={styles.menuHeader}>
              <div className={styles.menuHeaderLine}></div>
              <span>SYSTEM_NAVIGATION // SELECT_NODE</span>
            </div>

            <div className={styles.menuList}>
              <button className={`${styles.menuBtn} ${activeTab === 'default' ? styles.activeBtn : ''}`} onMouseEnter={() => handleHover('default')}>
                <div className={styles.nodeIcon}><Radio size={18} /></div> 
                <span className={styles.nodeLabel} data-text="BROADCAST_OVERVIEW">BROADCAST_OVERVIEW</span>
                <div className={styles.dataStream}></div>
                <div className={styles.btnCyberFill}></div>
              </button>

              <button className={`${styles.menuBtn} ${activeTab === 'register' ? styles.activeBtn : ''} ${styles.btnRed}`} onMouseEnter={() => handleHover('register')}>
                <div className={styles.nodeIcon}><ShieldAlert size={18} /></div> 
                <span className={styles.nodeLabel} data-text="REGISTRATION_PORTAL">REGISTRATION_PORTAL</span>
                <div className={styles.dataStream}></div>
                <div className={styles.btnCyberFill}></div>
              </button>

              <button className={`${styles.menuBtn} ${activeTab === 'archive' ? styles.activeBtn : ''}`} onMouseEnter={() => handleHover('archive')}>
                <div className={styles.nodeIcon}><Database size={18} /></div> 
                <span className={styles.nodeLabel} data-text="ARCHIVE_EDITION_1.0">ARCHIVE_EDITION_1.0</span>
                <div className={styles.dataStream}></div>
                <div className={styles.btnCyberFill}></div>
              </button>

              <button className={`${styles.menuBtn} ${activeTab === 'about' ? styles.activeBtn : ''}`} onMouseEnter={() => handleHover('about')}>
                <div className={styles.nodeIcon}><Users size={18} /></div> 
                <span className={styles.nodeLabel} data-text="THE_RYZEN_CLUB">THE_RYZEN_CLUB</span>
                <div className={styles.dataStream}></div>
                <div className={styles.btnCyberFill}></div>
              </button>

              <button className={`${styles.menuBtn} ${activeTab === 'why' ? styles.activeBtn : ''}`} onMouseEnter={() => handleHover('why')}>
                <div className={styles.nodeIcon}><Target size={18} /></div> 
                <span className={styles.nodeLabel} data-text="THE_OBJECTIVE">THE_OBJECTIVE</span>
                <div className={styles.dataStream}></div>
                <div className={styles.btnCyberFill}></div>
              </button>

              <Link href="/sponsors" className={`${styles.menuBtn} ${styles.externalNode}`}>
                <div className={styles.nodeIcon}><ShieldCheck size={18} /></div> 
                <span className={styles.nodeLabel}>AUTHORIZED_SPONSORS</span> 
                <ArrowRight size={14} className={styles.extArrow}/>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}