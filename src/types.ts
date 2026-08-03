/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  category: 'travel' | 'fashion' | 'gaming' | 'freelance';
  description: string;
  highlights: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  shortLabel: string;
  category: string;
  proficiency: number;
  description: string;
}

export interface SkillItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface InterestItem {
  id: string;
  name: string;
  detail: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'F&B' | 'Travel' | 'Fashion' | 'Gaming' | 'Photography';
  year: string;
  client: string;
  summary: string;
  deliverables: string[];
  imageUrl: string;
  behanceUrl?: string;
}
