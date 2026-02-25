export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  image: string;
  overview: string;
  problem: string;
  process: string[];
  tools: string[];
  outcomes: string[];
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'design' | 'software';
}

export enum SectionId {
  HERO = 'hero',
  WORK = 'work',
  ABOUT = 'about',
  CONTACT = 'contact'
}