import { Card, CardContent } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={t("home.seo.title")}
        description={t("home.seo.description")}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {t("home.hero.title")}{" "}
                  <span className="text-secondary">{t("home.hero.titleHighlight")}</span>
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-lg">
                  {t("home.hero.subtitle")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="demo" size="lg" />
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt={t("home.hero.altText")}
                className="rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview - 3 Key Benefits */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("home.benefits.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("home.benefits.integration.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.benefits.integration.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("home.benefits.tracking.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.benefits.tracking.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("home.benefits.automation.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.benefits.automation.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("home.howItWorks.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.howItWorks.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("home.howItWorks.step1.title")}</h3>
              <p className="text-muted-foreground">
                {t("home.howItWorks.step1.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("home.howItWorks.step2.title")}</h3>
              <p className="text-muted-foreground">
                {t("home.howItWorks.step2.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("home.howItWorks.step3.title")}</h3>
              <p className="text-muted-foreground">
                {t("home.howItWorks.step3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("home.socialProof.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.socialProof.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-32 h-16 bg-muted border border-border rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Client Logo {i}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial placeholder */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-8 text-center">
                <blockquote className="text-xl italic text-muted-foreground mb-6">
                  "{t("home.socialProof.testimonial.quote")}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full"></div>
                  <div className="text-left">
                    <p className="font-semibold">{t("home.socialProof.testimonial.author")}</p>
                    <p className="text-sm text-muted-foreground">{t("home.socialProof.testimonial.role")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("home.finalCta.title")}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {t("home.finalCta.subtitle")}
          </p>
          <CTAButton variant="book" size="lg" />
        </div>
      </section>
    </div>
  );
};

export default Home;