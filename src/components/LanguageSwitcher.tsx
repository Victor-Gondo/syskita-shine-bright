import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'id' as Language, name: 'Bahasa Indonesia', flag: '🇮🇩' }
];

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

export const LanguageSwitcher = ({ isMobile = false }: LanguageSwitcherProps) => {
  const { language, setLanguage, t } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={isMobile ? "outline" : "ghost"} 
          size={isMobile ? "default" : "sm"} 
          className={`gap-2 ${isMobile ? "w-full justify-start min-h-[44px]" : ""}`}
        >
          <Globe className={`${isMobile ? "h-5 w-5" : "h-4 w-4"}`} />
          <span className={`${isMobile ? "inline" : "hidden sm:inline"}`}>
            {currentLanguage?.flag}
          </span>
          <span className={`${isMobile ? "inline" : "hidden md:inline"}`}>
            {currentLanguage?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border shadow-lg z-[60]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              console.log('Language switching to:', lang.code);
              setLanguage(lang.code);
            }}
            className={`cursor-pointer hover:bg-accent hover:text-accent-foreground ${
              language === lang.code ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};