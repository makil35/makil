import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { detectLangFromPath, swapLangPath, type Lang } from "@/lib/routes";

type Language = Lang;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Language is derived from URL — single source of truth.
  const language: Language = detectLangFromPath(location.pathname);

  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    const loadTranslations = async () => {
      const module = await import(`../locales/${language}.ts`);
      if (!cancelled) setTranslations(module.default);
    };
    loadTranslations();
    return () => {
      cancelled = true;
    };
  }, [language]);

  // Persist preference + sync <html lang>
  useEffect(() => {
    localStorage.setItem("language", language);
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    const target = swapLangPath(location.pathname, lang);
    navigate(target + location.hash);
  };

  const t = (key: string): string => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
