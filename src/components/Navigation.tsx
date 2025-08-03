import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileLanguageSwitcher } from "@/components/MobileLanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  const productItems = [
    { name: "MERQ – Frontliner Management", path: "/merq" },
    { name: "Insight – Advanced Analytics", path: "/insight" },
    { name: "Flow – Workflow Automation", path: "/flow" },
  ];

  const companyItems = [
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.visionMission"), path: "/vision-mission" },
    { name: t("nav.team"), path: "/team" },
    { name: t("nav.caseStudies"), path: "/case-studies" },
  ];

  const solutionsItems = [
    { name: t("nav.roadmap"), path: "/roadmap" },
    { name: t("nav.faq"), path: "/faq" },
    { name: t("nav.pricing"), path: "/pricing" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50" onClick={closeAllDropdowns}>
      <div className="container mx-auto px-4 py-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-foreground">SYSKITA</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {t("nav.home")}
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('products')}
                className="flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {t("nav.products")}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('company')}
                className="flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {t("nav.company")}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {openDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {companyItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('solutions')}
                className="flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {t("nav.solutions")}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-36 bg-background border border-border rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {solutionsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/blog"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {t("nav.blog")}
            </Link>
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <CTAButton variant="book" />
          </div>

          {/* Mobile Language Switcher & Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <MobileLanguageSwitcher />
            <Button 
              variant="ghost" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {/* Home */}
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              
              {/* Mobile Products Section */}
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">{t("nav.products")}</p>
                {productItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm text-muted-foreground hover:text-primary pl-4 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Company Section */}
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">{t("nav.company")}</p>
                {companyItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm text-muted-foreground hover:text-primary pl-4 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Solutions Section */}
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">{t("nav.solutions")}</p>
                {solutionsItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm text-muted-foreground hover:text-primary pl-4 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Blog */}
              <Link
                to="/blog"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/blog"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.blog")}
              </Link>
              
              
              <CTAButton 
                variant="book" 
                className="w-fit mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;