export type ProjectCategory = "web" | "mobile" | "ai" | "web3";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-line pitch shown on cards. */
  tagline: string;
  /** Short paragraph for cards and metadata. */
  summary: string;
  /** Longer case-study paragraphs for the detail page. */
  overview: string[];
  role: string;
  platforms: string[];
  categories: ProjectCategory[];
  /** Hex colour used for glows and accents on this project's UI. */
  accent: string;
  image: ProjectImage;
  url?: string;
  featured?: boolean;
  features: ProjectFeature[];
  stack: StackGroup[];
  highlights?: string[];
}

export interface Role {
  title: string;
  period: string;
  points: string[];
}

export interface Experience {
  company: string;
  location: string;
  roles: Role[];
}

export interface SkillGroup {
  title: string;
  icon: "code" | "layout" | "smartphone" | "server" | "blocks" | "plug" | "rocket" | "sparkles";
  items: string[];
}
