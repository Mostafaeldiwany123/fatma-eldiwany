export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  duration: string;
  description?: string;
  location: string;
}

export interface SocialLink {
  platform: 'LinkedIn' | 'Email' | 'Other';
  url: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}