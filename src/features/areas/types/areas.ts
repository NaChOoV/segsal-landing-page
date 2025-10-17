export type MediaItem = { kind: 'image' | 'video'; src: string; alt?: string };

export interface Subarea {
  id: string;
  name: string;
  summary?: string;
  media?: MediaItem[];
  description?: string;
  certifications?: string[];
}

export interface Area {
  id: string;
  name: string;
  heroMedia?: string;
  subareas: Subarea[];
}
