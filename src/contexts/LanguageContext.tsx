import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { detectLangFromPath, swapLangPath } from "@/lib/routes";
import { LanguageContext, type Language } from "@/contexts/language-context";

// Re-export the hook for backwards compatibility with existing imports.
export { useLanguage } from "@/hooks/useLanguage";

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
