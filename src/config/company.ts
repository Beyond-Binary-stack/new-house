import type { StatItem } from '../types/company';

export const COMPANY = {
  name: 'New House Decoration',
  tagline: 'Where Quality Meets Design',
  description:
    'Premium interior finishing and decoration services for residential and commercial spaces.',
  story:
    'New House Decoration has been transforming spaces into works of art. With years of experience in interior finishing, we bring precision, elegance, and craftsmanship to every project we undertake.',
  vision:
    'To be the most trusted name in interior finishing, known for transforming ordinary spaces into extraordinary living experiences.',
  mission:
    'To deliver exceptional quality in every project through meticulous attention to detail, premium materials, and a deep understanding of our clients\' vision.',
  stats: [
    { label: 'Years Experience', value: 15, suffix: '+', icon: 'Calendar' },
    { label: 'Projects Completed', value: 500, suffix: '+', icon: 'Building2' },
    { label: 'Happy Clients', value: 300, suffix: '+', icon: 'Users' },
    { label: 'Team Members', value: 50, suffix: '+', icon: 'Users2' },
  ] satisfies StatItem[],
} as const;
