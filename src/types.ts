export type PageRoute = 'home' | 'courses' | 'services' | 'projects' | 'about' | 'contact';

export type CategoryId = 'automatisme' | 'variateurs' | 'energie' | 'maintenance';

export interface Course {
  id: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  shortDescription: string;
  objectives: string[];
  program: {
    moduleTitle: string;
    topics: string[];
  }[];
  targetAudience: string;
  prerequisites: string;
  duration: string; // e.g. "3 jours (21 heures)"
  level: 'Initiation' | 'Intermédiaire' | 'Avancé' | 'Expert';
  modalities: string; // "Présentiel, En entreprise (Sur site client) ou A distance"
  practicalWork: string; // "70% Travaux Pratiques sur bancs de test industriels"
  equipmentAndSoftware: string[]; // e.g. ["Siemens TIA Portal V18", "Banc API S7-1200", "Variateur Sinamics G120"]
  certification: string; // "Attestation de fin de formation et d'évaluation des acquis"
  price: string; // "Sur devis (Prise en charge OPCO possible)"
  featuredHome?: boolean;
}

export type ServiceId = 'reparation' | 'automatisme' | 'diagnostic' | 'installation';

export interface TechService {
  id: ServiceId;
  title: string;
  shortDescription: string;
  fullDescription: string;
  subFeatures: string[];
  equipmentTypes: string[];
  iconName: string;
  ctaText: string;
}

export interface InterventionProject {
  id: string;
  title: string;
  equipmentType: string;
  sector: string;
  problem: string;
  diagnosis: string;
  solution: string;
  result: string;
  hasPhotosPlaceholder?: boolean;
  isModelExample?: boolean;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  interventionZone: string;
  openingHours: string;
  region: string;
  slogan: string;
}

export type RequestType = 
  | 'Formation'
  | 'Réparation d’une carte électronique'
  | 'Diagnostic ou dépannage'
  | 'Programmation d’un automate'
  | 'Mise en service'
  | 'Demande de devis'
  | 'Autre demande';

export type UrgencyLevel = 'Normal' | 'Prioritaire' | 'Urgence critique (Arrêt de production)';

export interface ContactFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  requestType: RequestType;
  relatedSubject: string; // course title or service title if prefilled
  description: string;
  urgency: UrgencyLevel;
  attachedFileName?: string;
  dataConsent: boolean;
}
