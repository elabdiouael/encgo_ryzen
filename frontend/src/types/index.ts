export enum Role {
  CHEF = 'CHEF',
  MEMBRE = 'MEMBRE',
}

export interface ParticipantDto {
  nomComplet: string;
  email: string;
  telephone: string;
  etablissement: string;
  niveauEtude: string;
  role?: Role | string; 
}

export interface EquipeDto {
  id: number;
  nomEquipe: string;
  region: string;
  ville: string;
  experienceHackathon: string;
  detailsExperience?: string;  
  competencesEquipe: string[];
  motivation: string;          
  comprehensionTheme: string;  
  aUneIdee: boolean;
  titreProjet?: string;        
  descriptionProjet?: string;  
  problemeIdentifie?: string;  
  impactPotentiel?: string;    
  faisabilite?: string;        
  ambitionApres?: string;      
  dateInscription: string;
  membres: ParticipantDto[]; 
}

export interface InscriptionRequest {
  nomEquipe: string;
  projetIdee?: string;
  membres: ParticipantDto[]; 
}

export interface InscriptionResponse {
  message: string;
  equipeId: number;
  dateInscription: string;
}

export interface ContactMessage {
  id?: number; 
  nom: string;
  email: string;
  sujet: string;
  message: string;
  dateEnvoi?: string;
  isReplied?: boolean; 
  reponseAdmin?: string; 
}

export interface SponsorshipRequest {
  id?: number;
  entreprise: string;
  responsable: string;
  email: string;
  telephone: string;
  message: string;
}

// 🔥 THE FIXED INTERFACE: Synchronisée avec le Dashboard Admin
export interface DashboardStats {
  totalEquipes: number;
  totalParticipants: number;
  projetsSoumis: number;
  totalSponsors: number;
  totalMessages: number;
  totalArchives: number;
  serverStatus: string;
}

export interface ArchiveSlotData {
  id?: number;
  category: string;
  title: string;
  description: string;
  imageUrl?: string; 
  videoUrl?: string; 
}