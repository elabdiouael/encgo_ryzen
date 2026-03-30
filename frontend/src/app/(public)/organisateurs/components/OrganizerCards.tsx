import React from 'react';
import { ShieldAlert, Award, Star, Megaphone, Users, Briefcase, Handshake, User } from 'lucide-react';
import styles from './OrganizerCards.module.css';

export default function OrganizerCards() {
  const organizers = [
    // 👑 LES DEUX PREMIERS (Li kano deja)
    {
      id: 1,
      name: "SOUHAILA",
      role: "Présidente du Club Ryzen",
      description: "Leader visionnaire et coordinatrice générale de l'Oriental Hack 2.0. Passionnée par l'innovation et l'impact de l'IA dans l'économie sociale et solidaire.",
      icon: <Star size={24} />,
      colorClass: styles.purpleAura,
      image: "/souaila.jpeg" 
    },
    {
      id: 2,
      name: "PROF. [NOM DU PROF]", 
      role: "Superviseur & Coordinateur Pédagogique",
      description: "Expert en systèmes d'information et parrain de cette édition. Il assure l'encadrement scientifique et la validation des projets technologiques du hackathon.",
      icon: <Award size={24} />,
      colorClass: styles.cyanAura,
      image: "/prof_placeholder.jpg" 
    },
    // 🌟 L-BUREAU (D'après les noms des images)
    {
      id: 3,
      name: "IMANE AZLAF",
      role: "Vice Présidente",
      description: "Bras droit de la présidence, elle assure la coordination stratégique et le bon déroulement des opérations du hackathon.",
      icon: <Star size={24} />,
      colorClass: styles.cyanAura,
      image: "/orga/VicePresidente Imane Azlaf.jpeg"
    },
    {
      id: 4,
      name: "ZINEB BOUDOUASAR",
      role: "Responsable Communication",
      description: "Voix de l'événement, elle gère l'image de marque, les relations publiques et la visibilité de l'Oriental Hack 2.0.",
      icon: <Megaphone size={24} />,
      colorClass: styles.purpleAura,
      image: "/orga/Résponsable Communication Zineb Boudouasar.jpeg"
    },
    {
      id: 5,
      name: "ISLAM BOUCHIKHI",
      role: "Responsable Ressources Humaines",
      description: "Garant de la cohésion d'équipe, il gère le recrutement, l'intégration et le bien-être du comité d'organisation.",
      icon: <Users size={24} />,
      colorClass: styles.cyanAura,
      image: "/orga/Résponsable Ressources Humane  Islam Bouchikhi.jpeg"
    },
    {
      id: 6,
      name: "SALMA EL BOUCHIKHI",
      role: "Responsable Trésorerie",
      description: "Pilier financier, elle gère le budget, les financements et la viabilité économique de l'événement.",
      icon: <Briefcase size={24} />,
      colorClass: styles.purpleAura,
      image: "/orga/Résponsable Trésorière  Salma El Bouchikhi.jpeg"
    },
    {
      id: 7,
      name: "KHLIL MOHAMMED",
      role: "Responsable Sponsoring",
      description: "Négociateur hors pair, il crée des ponts avec les partenaires et assure le soutien logistique et financier.",
      icon: <Handshake size={24} />,
      colorClass: styles.cyanAura,
      image: "/orga/Résponsable Sponsoring  Khlil Mohammed.jpeg"
    },
    {
      id: 15, // New ID
      name: "NOUHAILA ARZINE", // New Name from image_18.png
      role: "Vice-Présidente", // New Role
      description: "Bras droit de la présidence, elle assure la coordination stratégique et le bon déroulement des opérations du hackathon.", // Description (same as Imane)
      icon: <Star size={24} />, // Icon for VP
      colorClass: styles.purpleAura, // Purple color (alternating from previous cyan)
      image: "/orga/Nouhaila Arzine.jpeg" // New Image path (assuming /orga/ directory)
    },
    // 🛡️ LES MEMBRES ACTIFS
    { id: 8, name: "AYA BELATTAR", role: "Membre du Comité", description: "Opératrice tactique impliquée dans la gestion logistique et l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Aya belattar.jpeg" },
    { id: 9, name: "HOUSSAM BOULAHROUZ", role: "Membre du Comité", description: "Opérateur tactique impliquée dans la gestion logistique et l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Houssam Boulahrouz.jpeg" },
    { id: 10, name: "ILIAS EL ANGOUDI", role: "Membre du Comité", description: "Opérateur tactique impliquée dans la gestion logistique et l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Ilias El Angoudi.jpeg" },
    { id: 11, name: "INAS KHALIS", role: "Membre du Comité", description: "Opératrice tactique impliquée dans la gestion logistique et l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Inas khalis.jpeg" },
    { id: 12, name: "MANAL MIRI", role: "Membre du Comité", description: "Opératrice tactique impliquée dans la gestion logistique et l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Manal Miri.jpeg" },
    { id: 13, name: "MARYAM IFRAH", role: "Membre du Comité", description: "Opératrice tactique impliquée dans la gestion logistique et l'organisation.", icon: <User size={24} />, colorClass: styles.cyanAura, image: "/orga/Maryam Ifrah.jpeg" },
    { id: 14, name: "YASSINE BOUGHAFRI", role: "Membre du Comité", description: "Opérateur tactique impliquée dans la gestion logistique et l'organisation.", icon: <User size={24} />, colorClass: styles.purpleAura, image: "/orga/Yassine Boughafri.jpeg" },
    {
      id: 16, // New ID
      name: "AHMED RAJI", // New Name from image_18.png
      role: "Membre du Comité", // Assume Role
      description: "Opérateur tactique impliqué dans la gestion logistique et l'organisation.", // Description (same as other members)
      icon: <User size={24} />, // Icon for Member
      colorClass: styles.cyanAura, // Cyan color (alternating from previous purple)
      image: "/orga/Ahmed Raji.PNG" // New Image path (assuming /orga/ directory, from PNG)
    }
  ];

  return (
    <div className={styles.cardsWrapper}>
      {organizers.map((org, index) => (
        <div 
          key={org.id} 
          className={styles.holoCard} 
          style={{ animationDelay: `${index * 0.15}s` }} /* 🔥 Fix animation delay auto bach y-bano wa7d mor lakhour */
        >
          
          {/* 📸 L-IMAGE LI KAT-BAN F L-HOVER */}
          <div className={styles.avatarLayer}>
            <img src={org.image} alt={org.name} className={styles.orgImage} />
            {/* Overlay bach l-ktaba t-b9a bayna fo9 tsswira */}
            <div className={styles.imageOverlay}></div>
          </div>

          <div className={`${styles.topBeam} ${org.colorClass}`}></div>
          
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${org.colorClass}`}>
                {org.icon}
              </div>
              <div className={styles.titleBox}>
                <h2 className={styles.orgName} data-text={org.name}>{org.name}</h2>
                <span className={styles.orgRole}>{org.role}</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <p>{org.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <ShieldAlert size={14} /> STATUS: <span className={styles.statusOnline}>OPÉRATIONNEL</span>
            </div>
          </div>

          <div className={styles.holoScanline}></div>
        </div>
      ))}
    </div>
  );
}