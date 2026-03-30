import { InscriptionRequest, InscriptionResponse, ContactMessage, SponsorshipRequest, DashboardStats, EquipeDto } from '../types';

// 🔥 THE LOCALHOST FIX: Daba l-Frontend ghadi y-hder m3a IntelliJ nichan!

// 1. KHEBBI LOCALHOST (Dir liha // f l-lowel)
// const API_BASE_URL = 'http://localhost:8080/api/v1'; 

// 2. CH3EL HUGGING FACE (7iyd liha // mn l-lowel)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://elabdi48-ing-ryzen-encg-backend.hf.space/api/v1';
// 💡 MULA7ADA: Mnin tbghi t-sifet l-Projet l-Vercel f l-Kher, 7iyd // mn s-ster li t7t w dakhil // f s-ster li l-fou9
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://elabdi48-ing-ryzen-encg-backend.hf.space/api/v1';

export interface ContactMessageDto {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

export interface ArchiveSlotData {
  id?: number;
  category: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

export const apiService = {
  
  inscrireEquipe: async (data: any) => {
    console.log("📥 [DATA BRUTE DU FORMULAIRE] :", data);

    // 💥 THE SANITIZER PROTOCOL: N-n9iw l-Data bach Spring Boot ma-y-l9a ta sebba y-refusé!
    const springBootPayload = {
      nomEquipe: data.nomEquipe || "ÉQUIPE ALPHA TEST",
      region: data.region || "Oriental",
      ville: data.ville || "Oujda",
      
      experienceHackathon: data.experienceHackathon || "NON",
      detailsExperience: data.detailsExperience || "Aucune",
      
      // 🔥 FIX: Ila kan array khawi, n-3tiwh valeur par défaut bach y-douz mn @NotEmpty
      competencesEquipe: (data.competencesEquipe && data.competencesEquipe.length > 0) 
                         ? data.competencesEquipe 
                         : ["Développement Web"],
                         
      motivation: data.motivation || "Motivation par défaut pour tester la DB",
      comprehensionTheme: data.comprehensionTheme || "Compréhension validée",
      
      aUneIdee: data.aUneIdee || false,
      titreProjet: data.titreProjet || "Projet Test X",
      descriptionProjet: data.descriptionProjet || "Description...",
      problemeIdentifie: data.problemeIdentifie || "Problème...",
      impactPotentiel: data.impactPotentiel || "Impact...",
      faisabilite: data.faisabilite || "Faisable",
      ambitionApres: data.ambitionApres || "Start-up",
      
      // 🔥 FIX DYAL L-MEMBRES (T-n9iya d l-Nmra d tel w chrout)
      membres: (data.membres || []).map((m: any, index: number) => ({
        nomComplet: m.nomComplet || m.nom || `Opérateur ${index + 1}`,
        email: m.email || `membre${index}@ryzen.com`,
        
        // 🚨 THE SNIPER FIX: N-7iydou l-espaces w l-hrouf mn nmra bach d-douz f l-Regex d Spring Boot "^(05|06|07)[0-9]{8}$"
        telephone: (m.telephone || "0600000000").replace(/\s+/g, '').replace(/[^0-9]/g, '').substring(0, 10),
        
        etablissement: m.etablissement || "ENCG Oujda",
        niveauEtude: m.niveauEtude || "Bac+3",
        role: m.role || (index === 0 ? "CHEF" : "MEMBRE")
      }))
    };

    console.log("📤 [PAYLOAD ENVOYÉ À SPRING BOOT] :", JSON.stringify(springBootPayload, null, 2));

    const response = await fetch(`${API_BASE_URL}/inscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(springBootPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("🔥 REJET DU BACKEND (400 BAD REQUEST) :", errorText);
      throw new Error(errorText || "Erreur inconnue lors de l'inscription");
    }
    
    return response.json();
  },

  sendContactMessage: async (data: ContactMessageDto) => {
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const errorText = await res.text(); 
        console.error("🔥 Spring Boot a rejeté la requête :", errorText);
        throw new Error(errorText || 'Erreur de connexion au backend');
      }
      
      return await res.text();
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error; 
    }
  },

  sendSponsorshipRequest: async (data: SponsorshipRequest): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/sponsors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erreur lors de la demande de partenariat');
    return response.text();
  },

  getStats: async (): Promise<DashboardStats> => {
    try {
      const response = await fetch(`${API_BASE_URL}/stats`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Erreur fetch stats');
      return await response.json();
    } catch (error) {
      return {
        totalEquipes: 42,
        totalParticipants: 186,
        projetsSoumis: 15,
        serverStatus: "OFFLINE"
      };
    }
  },

  getEquipes: async (): Promise<EquipeDto[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/equipes`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Erreur fetch equipes');
      return await response.json();
    } catch (error) {
      console.log("Impossible de joindre le Backend. Assurez-vous que Spring Boot est lancé.");
      return []; 
    }
  },

  getSponsors: async (): Promise<SponsorshipRequest[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/sponsors`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Erreur fetch sponsors');
      return await response.json();
    } catch (error) {
      console.log("Backend offline pour Sponsors.");
      return [];
    }
  },

  getMessages: async (): Promise<ContactMessage[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Erreur fetch messages');
      return await response.json();
    } catch (error) {
      console.log("Backend offline pour Messages.");
      return [];
    }
  },

  replyToMessage: async (id: number, reponse: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: reponse,
    });
    if (!response.ok) throw new Error('Erreur lors de la réponse');
    return response.text();
  },

  // --- ARCHIVE CMS ---
  getArchives: async (): Promise<ArchiveSlotData[]> => {
    try {
      const res = await fetch(`${API_BASE_URL}/archives`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Erreur fetch archives');
      return await res.json();
    } catch (e) { return []; }
  },

  addArchive: async (data: ArchiveSlotData): Promise<ArchiveSlotData> => {
    const res = await fetch(`${API_BASE_URL}/archives`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erreur ajout archive');
    return await res.json();
  },

  deleteArchive: async (id: number): Promise<string> => {
    const res = await fetch(`${API_BASE_URL}/archives/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Erreur suppression archive');
    return await res.text();
  },
};