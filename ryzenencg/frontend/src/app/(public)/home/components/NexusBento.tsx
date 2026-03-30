"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, Database, Target, Users, ShieldCheck } from 'lucide-react';
import styles from './NexusBento.module.css';

interface NexusBentoProps {
  activeNode: string | null;
  setActiveNode: (node: string | null) => void;
}

export default function NexusBento({ activeNode, setActiveNode }: NexusBentoProps) {
  
  // Fonction bach n-3erfou wach l-Carte m-focusya awla m-dellema
  const getCardClass = (nodeName: string) => {
    if (!activeNode) return styles.cardIdle; // L-7ala L-3adiya (7ta wa7ed ma m-hoveri)
    if (activeNode === nodeName) return styles.cardActive; // Hadi hiya li 9ssnaha (K-t-tla3 l-3ndek)
    return styles.cardInactive; // L-Khrin (K-y-rje3ou l-lor w y-t-floutaw)
  };

  return (
    <div className={styles.bentoContainer}>
      
      {/* ======================= */}
      {/* 1. INSCRIPTION (Main)   */}
      {/* ======================= */}
      <div 
        className={`${styles.cyberCard} ${styles.span8} ${getCardClass('register')}`}
        onMouseEnter={() => setActiveNode('register')}
        onMouseLeave={() => setActiveNode(null)}
      >
        <div className={styles.header}><ShieldAlert size={14}/> SYSTEM.REGISTRATION</div>
        <h3>PRÊT À RELEVER LE DÉFI ?</h3>
        <p>Les places sont limitées. Formez votre squad de 4 opérateurs et rejoignez l'arène.</p>
        <Link href="/inscription" className={styles.linkBtn}>
          S'INSCRIRE MAINTENANT <ArrowRight size={18} className={styles.arrow} />
        </Link>
      </div>

      {/* ======================= */}
      {/* 2. ARCHIVES 1.0         */}
      {/* ======================= */}
      <div 
        className={`${styles.cyberCard} ${styles.span4} ${getCardClass('archive')}`}
        onMouseEnter={() => setActiveNode('archive')}
        onMouseLeave={() => setActiveNode(null)}
      >
        <div className={styles.header}><Database size={14}/> DATA_VAULT</div>
        <h3>ÉDITION 1.0</h3>
        <p>Revivez la genèse du mouvement et son impact.</p>
        <Link href="/edition1" className={styles.linkText}>ACCÉDER <ArrowRight size={16} /></Link>
      </div>

      {/* ======================= */}
      {/* 3. À PROPOS             */}
      {/* ======================= */}
      <div 
        className={`${styles.cyberCard} ${styles.span4} ${getCardClass('about')}`}
        onMouseEnter={() => setActiveNode('about')}
        onMouseLeave={() => setActiveNode(null)}
      >
        <div className={styles.header}><Users size={14}/> WHO_ARE_WE</div>
        <h3>LE CLUB RYZEN</h3>
        <p>L'équipe visionnaire derrière l'événement.</p>
        <Link href="/about" className={styles.linkText}>NOTRE MISSION <ArrowRight size={16} /></Link>
      </div>

      {/* ======================= */}
      {/* 4. POURQUOI PARTICIPER  */}
      {/* ======================= */}
      <div 
        className={`${styles.cyberCard} ${styles.span4} ${getCardClass('why')}`}
        onMouseEnter={() => setActiveNode('why')}
        onMouseLeave={() => setActiveNode(null)}
      >
        <div className={styles.header}><Target size={14}/> THE_OBJECTIVE</div>
        <h3>POURQUOI PARTICIPER ?</h3>
        <p>Prix, mentorat et création d'avenir.</p>
        <Link href="/pourquoi-participer" className={styles.linkText}>AVANTAGES <ArrowRight size={16} /></Link>
      </div>

      {/* ======================= */}
      {/* 5. SPONSORS             */}
      {/* ======================= */}
      <div 
        className={`${styles.cyberCard} ${styles.span4} ${getCardClass('sponsors')}`}
        onMouseEnter={() => setActiveNode('sponsors')}
        onMouseLeave={() => setActiveNode(null)}
      >
        <div className={styles.header}><ShieldCheck size={14}/> AUTHORIZED_NODES</div>
        <h3>PARTENAIRES</h3>
        <p>Ceux qui rendent cette aventure possible.</p>
        <Link href="/sponsors" className={styles.linkText}>VOIR SPONSORS <ArrowRight size={16} /></Link>
      </div>

    </div>
  );
}