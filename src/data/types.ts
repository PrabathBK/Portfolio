// Type definitions for portfolio data structures

export type ProjectCategory = 'FPGA/RTL' | 'IoT/Embedded' | 'Software' | 'AI/ML' | 'Fun';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  techStack: string[];
  summary: string;
  description: string;
  images: string[];
  githubLink?: string;
  externalLink?: string;
  videoLink?: string;
  featured: boolean;
  importance: number;
  date: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bulletPoints: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  details: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  details: string[];
  image?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date?: string;
  link?: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  link?: string;
  image?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
  interests: string[];
  profileImage: string;
}

export interface Skills {
  languages: string[];
  developerTools: string[];
  frameworks: string[];
  databases: string[];
  operatingSystems: string[];
  softSkills: string[];
}

export interface ExtraCurricular {
  id: string;
  title: string;
  organization: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  year?: string;
}

export interface SportsActivity {
  id: string;
  title: string;
  organization: string;
  description?: string;
}

export interface Reference {
  name: string;
  title: string;
  organization: string;
  department?: string;
  email: string;
  phone: string;
  credentials?: string;
}
