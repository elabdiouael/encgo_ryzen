export enum Role {
  CHEF = 'CHEF',
  MEMBRE = 'MEMBRE',
}

export interface ParticipantDto {
  nomComplet: string;
  email: string;
  telephone: string;
  etablissement: string;
  niveauEtude: string; // 🔥 JDID
  role?: Role | string; 
}

export interface EquipeDto {
  id: number;
  nomEquipe: string;
  region: string;              // 🔥 JDID
  ville: string;               // 🔥 JDID
  experienceHackathon: string; // 🔥 JDID
  detailsExperience?: string;  
  competencesEquipe: string[]; // 🔥 JDID
  motivation: string;          
  comprehensionTheme: string;  
  aUneIdee: boolean;           // 🔥 JDID
  titreProjet?: string;        
  descriptionProjet?: string;  
  problemeIdentifie?: string;  
  impactPotentiel?: string;    
  faisabilite?: string;        
  ambitionApres?: string;      
  projetIdee?: string;         // L-9dim (Au cas où)
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

export interface DashboardStats {
  totalEquipes: number;
  totalParticipants: number;
  projetsSoumis: number;
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