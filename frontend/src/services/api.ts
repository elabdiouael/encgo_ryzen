import { InscriptionRequest, InscriptionResponse, ContactMessage, SponsorshipRequest, DashboardStats, EquipeDto } from '../types';

const API_BASE_URL = 'http://localhost:8080/api/v1';

// 🔥 Zdt lik had l-Interfaces hna bach n-garantiw TypeScript may-dirch sda3
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
    const response = await fetch(`${API_BASE_URL}/inscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // 🔥 L-HACK HOWA HADA: N-9raw chno gal Spring Boot b-dabt
      const errorText = await response.text();
      console.error("🔥 REJET DU BACKEND :", errorText);
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
      
      // 🔥 L-RISK MANAGEMENT L-7A9I9I HNA: N-9raw l-erreur mn l-Backend
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