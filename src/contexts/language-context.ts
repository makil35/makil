import { createContext } from "react";
import type { Lang } from "@/lib/routes";

export type Language = Lang;

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
