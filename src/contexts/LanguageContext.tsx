import React, { useEffect } from "react";
import en from "@/locales/en";
import { LanguageContext, type Language } from "@/contexts/language-context";

// Re-export the hook for backwards compatibility with existing imports.
export { useLanguage } from "@/hooks/useLanguage";

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const language: Language = "en";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = "en";
    }
  }, []);

  const setLanguage = (_lang: Language) => {
    /* English-only site */
  };

  const t = (key: string): string => (en as Record<string, string>)[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
