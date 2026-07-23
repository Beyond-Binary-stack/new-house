import type { StatItem } from '../types/company';

export const COMPANY = {
  name: 'New House Decoration',
  tagline: 'Where Quality Meets Design',
  description:
    'Premium interior finishing and decoration services for residential and commercial spaces in Egypt.',
  story:
    'Founded with a passion for transforming ordinary spaces into extraordinary living experiences, New House Decoration has grown into one of the most trusted names in interior finishing across Egypt. Over the years, we have completed hundreds of projects ranging from luxury villas and apartments to commercial establishments and hospitality venues. Our commitment to quality materials, skilled craftsmanship, and client satisfaction has earned us a reputation for excellence that sets us apart in the industry.',
  vision:
    'To be the most trusted and sought-after name in interior finishing across Egypt and the Middle East, known for transforming ordinary spaces into extraordinary living experiences through unparalleled craftsmanship and design innovation.',
  mission:
    'To deliver exceptional quality in every project through meticulous attention to detail, premium materials, innovative techniques, and a deep understanding of our clients\' vision and lifestyle needs.',
  stats: [
    { label: 'Years Experience', value: 15, suffix: '+', icon: 'Calendar' },
    { label: 'Projects Completed', value: 500, suffix: '+', icon: 'Building2' },
    { label: 'Happy Clients', value: 300, suffix: '+', icon: 'Users' },
    { label: 'Team Members', value: 50, suffix: '+', icon: 'Users2' },
  ] satisfies StatItem[],
} as const;
