import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../locales/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, params?: Record<string, string>) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }

    if (value === undefined || value === null) {
      return key; // Return key if translation not found
    }

    // If it's an array, return it as is
    if (Array.isArray(value)) {
      return value;
    }

    // If it's not a string, return the key
    if (typeof value !== 'string') {
      return key;
    }

    // Replace parameters if provided
    if (params) {
      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        return acc.replace(new RegExp(`{{${paramKey}}}`, 'g'), paramValue);
      }, value as string);
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};