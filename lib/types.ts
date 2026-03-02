import { ReactNode } from "react";

export interface StackItem {
  name: string;
  icon: ReactNode;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  previewImage: string;
  previewAlt: string;
}

export interface Project {
  id: string;
  thumbnail: string;
  title: string;
  tools: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  gradientColor: string;
}
