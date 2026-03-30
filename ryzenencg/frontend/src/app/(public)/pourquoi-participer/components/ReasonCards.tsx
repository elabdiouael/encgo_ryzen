import React from 'react';
import { Target, Award, Cpu, Network } from 'lucide-react';
import styles from './ReasonCards.module.css';

export default function ReasonCards() {
  const reasons = [
    {
      id: 1,
      title: "Impact réel",
      icon: <Target size={32} />,
      color: "cyan",
      content: "Votre projet doit démontrer un impact concret et tangible, capable de transformer la performance des entreprises ou de renforcer le rôle des organisations de l’économie sociale et solidaire. Intégrez l’Intelligence Artificielle et l’innovation pour proposer des solutions mesurables, efficaces et à fort bénéfice social ou économique. Montrez comment votre idée peut véritablement changer la réalité et générer de la valeur pour la société et les entreprises."
    },
    {
      id: 2,
      title: "Mentorat d’excellence",
      icon: <Award size={32} />,
      color: "purple",
      content: "Bénéficiez de l’accompagnement de mentors experts en IA, innovation et entrepreneuriat, qui vous guideront tout au long du hackathon pour transformer votre idée en prototype concret, innovant et à fort impact. Recevez des conseils pratiques, stratégies efficaces et retours d’expérience précieux pour maximiser vos chances de réussite et valoriser votre projet."
    },
    {
      id: 3,
      title: "Développement des compétences",
      icon: <Cpu size={32} />,
      color: "cyan",
      content: "Acquérez des compétences concrètes en IA, innovation et entrepreneuriat, et mettez-les en pratique en créant un prototype fonctionnel pendant le hackathon. Cette expérience unique vous prépare à relever des défis réels et à renforcer votre profil professionnel."
    },
    {
      id: 4,
      title: "Réseau et visibilité",
      icon: <Network size={32} />,
      color: "purple",
      content: "Rencontrez des mentors, experts et participants passionnés, et bénéficiez d’une visibilité unique pour votre projet. Les meilleures équipes auront l’opportunité de présenter leur solution devant un jury d’experts et des partenaires, et de créer des contacts précieux pour poursuivre leur initiative après le hackathon."
    }
  ];

  return (
    <div className={styles.cardsGrid}>
      {reasons.map((reason, index) => (
        <div key={reason.id} className={`${styles.card} ${styles[`delay${index + 1}`]}`}>
          <div className={`${styles.iconWrapper} ${reason.color === 'cyan' ? styles.cyanGlow : styles.purpleGlow}`}>
            {reason.icon}
          </div>
          <div className={styles.cardContent}>
            <div className={styles.stepBadge}>0{reason.id}</div>
            <h3 className={styles.cardTitle}>{reason.title}</h3>
            <p className={styles.cardText}>{reason.content}</p>
          </div>
          <div className={styles.cardBorder}></div>
        </div>
      ))}
    </div>
  );
}