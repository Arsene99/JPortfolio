export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  dataUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // Percentage 0-100
  category: 'statistics' | 'programming' | 'visualization' | 'tools';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Analysis {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  avatar: string;
}

export interface Contact {
  email: string;
  phone: string;
  facebook: string;
  whatsapp: string;
  address: string;
}

export const INITIAL_ANALYSES: Analysis[] = [
  {
    id: '1',
    title: 'Impact de l\'inflation sur le panier de la ménagère',
    summary: 'Une analyse économétrique des prix des produits de première nécessité au Bénin en 2023.',
    content: 'Le contenu détaillé de l\'analyse statistique...',
    date: 'Mars 2024',
    category: 'Économie'
  }
];

export const INITIAL_PROFILE: Profile = {
  name: 'Jean Paul',
  title: 'Étudiant en Statistique & Planification',
  about: 'Passionné par l\'analyse de données et la modélisation statistique, je m\'efforce de transformer des données complexes en informations exploitables pour la prise de décision stratégique.',
  avatar: 'https://picsum.photos/seed/jeanpaul/400/400'
};

export const INITIAL_CONTACT: Contact = {
  email: 'mangnapejeanpaul60864840@gmail.com',
  phone: '+229 00 00 00 00',
  facebook: 'https://facebook.com/jeanpaul',
  whatsapp: 'https://wa.me/22900000000',
  address: 'Parakou, Bénin'
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Analyse de la Pauvreté au Bénin',
    description: 'Étude statistique approfondie sur les déterminants de la pauvreté multidimensionnelle à l\'aide de données d\'enquête.',
    image: 'https://picsum.photos/seed/stats1/800/600',
    tags: ['R', 'Stata', 'Économétrie'],
    link: '#',
    dataUrl: '#'
  },
  {
    id: '2',
    title: 'Prévision de la Production Agricole',
    description: 'Modélisation de séries temporelles pour prédire les rendements du maïs dans le département du Borgou.',
    image: 'https://picsum.photos/seed/stats2/800/600',
    tags: ['Python', 'Time Series', 'Forecasting'],
    link: '#',
    dataUrl: '#'
  },
  {
    id: '3',
    title: 'Dashboard de Planification Urbaine',
    description: 'Visualisation interactive des indicateurs de développement durable pour la ville de Parakou.',
    image: 'https://picsum.photos/seed/stats3/800/600',
    tags: ['Power BI', 'SQL', 'GIS'],
    link: '#',
    dataUrl: '#'
  }
];

export const INITIAL_SKILLS: Skill[] = [
  { id: '1', name: 'R / RStudio', level: 90, category: 'statistics' },
  { id: '2', name: 'Python (Pandas, Scikit-learn)', level: 85, category: 'programming' },
  { id: '3', name: 'STATA', level: 80, category: 'statistics' },
  { id: '4', name: 'SPSS', level: 75, category: 'statistics' },
  { id: '5', name: 'Excel Avancé (VBA)', level: 95, category: 'tools' },
  { id: '6', name: 'Power BI / Tableau', level: 85, category: 'visualization' },
  { id: '7', name: 'SQL (PostgreSQL)', level: 80, category: 'programming' },
  { id: '8', name: 'CSPro', level: 70, category: 'tools' }
];

export const INITIAL_EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'INSAE Bénin',
    role: 'Stagiaire Statisticien',
    period: 'Juin 2023 - Août 2023',
    description: 'Participation au traitement et à l\'apurement des données du Recensement Général de la Population.'
  },
  {
    id: '2',
    company: 'ENSPD - Université de Parakou',
    role: 'Étudiant en Statistique et Planification',
    period: '2021 - Présent',
    description: 'Formation intensive en mathématiques appliquées, économétrie et planification stratégique.'
  }
];
