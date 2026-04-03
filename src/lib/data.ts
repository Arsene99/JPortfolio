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
