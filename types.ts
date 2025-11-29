import { LucideIcon } from "lucide-react";

export interface FeaturePoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ScrollStep {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
