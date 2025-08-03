import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages = [
  { code: 'en' as Language, name: 'EN', flag: '🇺🇸' },
  { code: 'id' as Language, name: 'ID', flag: '🇮🇩' }
];

export const MobileLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            console.log('Mobile language switching to:', lang.code);
            setLanguage(lang.code);
          }}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center ${
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};