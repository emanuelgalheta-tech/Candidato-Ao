/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BrandSuggestion {
  id: string;
  name: string;
  slogan: string;
  explanation: string;
  pros: string[];
  seoKeywords: string[];
  themeColor: 'emerald' | 'amber' | 'red' | 'blue' | 'indigo' | 'slate';
}

export interface CVTemplate {
  id: string;
  profession: string;
  category: 'Geral' | 'Técnico' | 'Executivo' | 'Primeiro Emprego';
  description: string;
  expertGuide: string; // 300-500 words
  commonErrors: string[];
  downloadFileName: string;
  // Pre-filled data for live builder
  defaultData: {
    fullName: string;
    title: string;
    phone: string;
    email: string;
    address: string;
    summary: string;
    experience: Array<{ period: string; company: string; role: string; description: string }>;
    education: Array<{ period: string; institution: string; degree: string; company?: string }>;
    skills: string[];
    languages: string[];
  };
}

export interface CoverLetterTemplate {
  id: string;
  title: string;
  targetSector: string;
  description: string;
  expertGuide: string;
  templateText: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  timeLimitSeconds: number;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or rich HTML formatted text
  author: string;
  readTime: string;
  category: 'Entrevistas' | 'Empregabilidade' | 'Legislação' | 'Guias';
  tags: string[];
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
}
