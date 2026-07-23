export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  bannerImage: string;
  images: string[];
  features?: { title: string; description: string }[];
}
