import React from 'react';
import { ShieldAlert, Award, Star, Megaphone, Users, Briefcase, Handshake, User, Cpu } from 'lucide-react';
import styles from './OrganizerCards.module.css';

export default function OrganizerCards() {
  const organizers = [
    // 👑 1. L-PRÉSIDENCE
    {
      id: 1, name: "SOUHAILA", role: "Présidente du Club Ryzen",
      description: "Leader visionnaire et coordinatrice générale de l'Oriental Hack 2.0. Passionnée par l'innovation et l'impact de l'IA.",
      icon: <Star size={24} />, colorClass: styles.purpleAura, image: "/souaila.jpeg" 
    },
    // 🤖 2. THE SYSTEM ARCHITECT (NTA)
    {
      id: 2, name: "OUAIL ELABDI", role: "SYS.ARCHITECT & IT Engineer",
      description: "Le cerveau de la Matrice. Concepteur de la plateforme digitale et garant de l'infrastructure technologique de l'événement.",
      icon: <Cpu size={24} />, colorClass: styles.cyanAura, image: "/orga/ouail.jpeg", 
      isOuail: true // 🔥 Had l-flag bash n-طبقو 3lik l-Filter s-si7ri f l-CSS
    },
    // 🎓 3. LES PROFESSEURS
    {
      id: 3, name: "PROF. ADIL RACHDI", role: "Superviseur & Coordinateur",
      description: "Le Professeur Adil Rachdi est enseignant-chercheur à l’École Nationale de Commerce et de Gestion et supervise les activités parascolaires",
      icon: <Award size={24} />, colorClass: styles.purpleAura, image: "/orga/Le Professeur Adil Rachdi .jpeg" 
    },
    {
      id: 4, name: "PROF. YASSINE AZIZI", role: "Superviseur & Coordinateur",
      description: "Le Professeur Yassine Azizi est enseignant-chercheur à l’École Nationale de Commerce et de Gestion et encadre le Club Ryzen.",
      icon: <Award size={24} />, colorClass: styles.cyanAura, image: "/orga/Le Professeur Yassine Azizi .jpeg" 
    },
    // 🌟 4. LE BUREAU & RESPONSABLES
    { id: 5, name: "IMANE AZLAF", role: "Vice-Présidente", description: "Bras droit de la présidence, elle assure la coordination stratégique.", icon: <Star size={24} />, colorClass: styles.purpleAura, image: "/orga/VicePresidente Imane Azlaf.jpeg" },
    { id: 6, name: "NOUHAILA ARZINE", role: "comité d’organisation", description: "Bras droit de la présidence, elle assure la coordination et le suivi tactique.", icon: <Star size={24} />, colorClass: styles.cyanAura, image: "/orga/Nouhaila Arzine.jpeg" },
    { id: 7, name: "ZINEB BOUDOUASAR", role: "Resp. Communication", description: "Voix de l'événement, elle gère l'image de marque et les relations publiques.", icon: <Megaphone size={24} />, colorClass: styles.purpleAura, image: "/orga/Résponsable Communication Zineb Boudouasar.jpeg" },
    { id: 8, name: "ISLAM BOUCHIKHI", role: "Resp. Ressources Humaines", description: "Garant de la cohésion d'équipe et de l'intégration du comité.", icon: <Users size={24} />, colorClass: styles.cyanAura, image: "/orga/Résponsable Ressources Humane  Islam Bouchikhi.jpeg" },
    { id: 9, name: "SALMA EL BOUCHIKHI", role: "Resp. Trésorerie", description: "Pilier financier, elle gère le budget et la viabilité économique.", icon: <Briefcase size={24} />, colorClass: styles.purpleAura, image: "/orga/Résponsable Trésorière  Salma El Bouchikhi.jpeg" },
    { id: 10, name: "KHLIL MOHAMMED", role: "Resp. Sponsoring", description: "Négociateur hors pair, créateur de ponts avec les partenaires.", icon: <Handshake size={24} />, colorClass: styles.cyanAura, image: "/orga/Résponsable Sponsoring  Khlil Mohammed.jpeg" },
    
    // 🛡️ 5. LES MEMBRES ACTIFS
    { id: 11, name: "AYA BELATTAR", role: "Membre du Comité", description: "Opératrice tactique impliquée dans l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Aya belattar.jpeg" },
    { id: 12, name: "DOHA ABOUBAKER", role: "Membre du Comité", description: "Opératrice tactique impliquée dans l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Doha ABOUBAKER.jpeg" },
    { id: 13, name: "INAS KHALIS", role: "Membre du Comité", description: "Opératrice tactique impliquée dans l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Inas khalis.jpeg" },
    { id: 14, name: "MANAL MIRI", role: "Membre du Comité", description: "Opératrice tactique impliquée dans l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Manal Miri.jpeg" },
    { id: 15, name: "MARYAM IFRAH", role: "Membre du Comité", description: "Opératrice tactique impliquée dans l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Maryam Ifrah.jpeg" },
    { id: 16, name: "YASSINE BOUGHAFRI", role: "Membre du Comité", description: "Opérateur tactique impliqué dans l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Yassine Boughafri.jpeg" },
    { id: 17, name: "ABDELGHANI EL BOUKNIFY", role: "Membre du Comité", description: "Opérateur tactique impliqué dans l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Abdelghani El Bouknify.jpeg" },
    { id: 18, name: "AHMED RAJI", role: "Membre du Comité", description: "Opérateur tactique impliqué dans l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Ahmed Raji.PNG" },
    { id: 19, name: "HOUSSAM BOULAHROUZ", role: "Membre du Comité", description: "Opérateur tactique impliqué dans l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Houssam Boulahrouz.jpeg" },
    { id: 20, name: "ILIAS EL ANGOUDI", role: "Membre du Comité", description: "Opérateur tactique impliqué dans l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Ilias El Angoudi.jpeg" }
    { id: 21, name: "Salma Kaddouri", role: "Membre du Comité", description: "Opérateur tactique impliqué dans l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/salma kaddouri.jpeg" }
  ];

  return (
    <div className={styles.cardsWrapper}>
      {organizers.map((org, index) => (
        <div key={org.id} className={styles.holoCard} style={{ animationDelay: `${index * 0.1}s` }}>
          
          {/* 📸 L-IMAGE B L-BACKGROUND INTERACTIF */}
          <div className={styles.avatarLayer}>
            {/* L-Grid li k-t-khebbi l-k7ouliya */}
            <div className={styles.cyberGridBg}></div>
            {/* L-Animation d d-dwira l-m-dowra mor t-tsswira */}
            <div className={styles.pulseCore}></div>
            
            <img 
              src={org.image} 
              alt={org.name} 
              className={`${styles.orgImage} ${org.isOuail ? styles.ouailFilter : ''}`} 
            />
            <div className={styles.imageOverlay}></div>
          </div>

          <div className={`${styles.topBeam} ${org.colorClass}`}></div>
          
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${org.colorClass}`}>{org.icon}</div>
              <div className={styles.titleBox}>
                <h2 className={styles.orgName} data-text={org.name}>{org.name}</h2>
                <span className={styles.orgRole}>{org.role}</span>
              </div>
            </div>

            <div className={styles.cardBody}><p>{org.description}</p></div>

            <div className={styles.cardFooter}>
              <ShieldAlert size={14} /> STATUS: <span className={styles.statusOnline}>OPÉRATIONNEL</span>
            </div>
          </div>
          
          {/* TRANSFORMER PRIME BORDERS (F l-Hover yt-biyenhom) */}
          <div className={styles.transformerBorders}></div>
        </div>
      ))}
    </div>
  );
}