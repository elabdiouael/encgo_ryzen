import { InscriptionRequest, InscriptionResponse, ContactMessage, SponsorshipRequest, DashboardStats, EquipeDto, ArchiveSlotData } from '../types';

// 🔥 CONFIGURATION URL: Hugging Face LIVE
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://elabdi48-ing-ryzen-encg-backend.hf.space/api/v1';

export interface ContactMessageDto {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

export const apiService = {
  
  inscrireEquipe: async (data: any) => {
    const springBootPayload = {
      nomEquipe: data.nomEquipe || "ÉQUIPE SANS NOM",
      region: data.region || "Oriental",
      ville: data.ville || "Oujda",
      experienceHackathon: data.experienceHackathon || "NON",
      detailsExperience: data.detailsExperience || "Aucune",
      competencesEquipe: (data.competencesEquipe && data.competencesEquipe.length > 0) 
                         ? data.competencesEquipe 
                         : ["Développement"],
      motivation: data.motivation || "Motivation Ryzen",
      comprehensionTheme: data.comprehensionTheme || "Thème validé",
      aUneIdee: data.aUneIdee || false,
      titreProjet: data.titreProjet || "",
      descriptionProjet: data.descriptionProjet || "",
      problemeIdentifie: data.problemeIdentifie || "",
      impactPotentiel: data.impactPotentiel || "",
      faisabilite: data.faisabilite || "",
      ambitionApres: data.ambitionApres || "",
      membres: (data.membres || []).map((m: any, index: number) => ({
        nomComplet: m.nomComplet || `Membre ${index + 1}`,
        email: m.email || `user${index}@hackathon.com`,
        telephone: (m.telephone || "0600000000").replace(/\s+/g, '').replace(/[^0-9]/g, '').substring(0, 10),
        etablissement: m.etablissement || "ENCG",
        niveauEtude: m.niveauEtude || "Bac+3",
        role: m.role || (index === 0 ? "CHEF" : "MEMBRE")
      }))
    };

    const response = await fetch(`${API_BASE_URL}/inscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(springBootPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Erreur lors de l'envoi");
    }
    return response.json();
  },

  sendContactMessage: async (data: ContactMessageDto) => {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erreur Backend');
    return await res.text();
  },

  sendSponsorshipRequest: async (data: SponsorshipRequest): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/sponsors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erreur Sponsoring');
    return response.text();
  },

  getStats: async (): Promise<DashboardStats> => {
    try {
      const response = await fetch(`${API_BASE_URL}/stats`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Erreur stats');
      return await response.json();
    } catch (error) {
      // 🔥 THE SHIELD FIX: Rjja3 ga3 l-khayrat bach Vercel build ma-y-t-plantash
      return {
        totalEquipes: 0,
        totalParticipants: 0,
        projetsSoumis: 0,
        totalSponsors: 0,
        totalMessages: 0,
        totalArchives: 0,
        serverStatus: "OFFLINE"
      };
    }
  },

  getEquipes: async (): Promise<EquipeDto[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/equipes`, { cache: 'no-store' });
      return await response.json();
    } catch (e) { return []; }
  },

  getSponsors: async (): Promise<SponsorshipRequest[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/sponsors`, { cache: 'no-store' });
      return await response.json();
    } catch (e) { return []; }
  },

  getMessages: async (): Promise<ContactMessage[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, { cache: 'no-store' });
      return await response.json();
    } catch (e) { return []; }
  },

  replyToMessage: async (id: number, reponse: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: reponse,
    });
    return response.text();
  },

  getArchives: async (): Promise<ArchiveSlotData[]> => {
    try {
      const res = await fetch(`${API_BASE_URL}/archives`, { cache: 'no-store' });
      return await res.json();
    } catch (e) { return []; }
  },

  addArchive: async (data: ArchiveSlotData): Promise<ArchiveSlotData> => {
    const res = await fetch(`${API_BASE_URL}/archives`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  deleteArchive: async (id: number): Promise<string> => {
    const res = await fetch(`${API_BASE_URL}/archives/${id}`, { method: 'DELETE' });
    return await res.text();
  },
};