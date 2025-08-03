import { Check, Star, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  
  const getPricingPlans = () => {
    return [
      {
        name: t("pricing.starter.name"),
        price: t("pricing.starter.price"),
        period: t("pricing.starter.period"),
        description: t("pricing.starter.description"),
        features: t("pricing.starter.features") || [],
        limitations: t("pricing.starter.limitations") || [],
        popular: false,
        cta: t("pricing.starter.cta"),
      },
      {
        name: t("pricing.professional.name"),
        price: t("pricing.professional.price"),
        period: t("pricing.professional.period"),
        description: t("pricing.professional.description"),
        features: t("pricing.professional.features") || [],
        limitations: t("pricing.professional.limitations") || [],
        popular: true,
        cta: t("pricing.professional.cta"),
      },
      {
        name: t("pricing.enterprise.name"),
        price: t("pricing.enterprise.price"),
        period: t("pricing.enterprise.period"),
        description: t("pricing.enterprise.description"),
        features: t("pricing.enterprise.features") || [],
        limitations: t("pricing.enterprise.limitations") || [],
        popular: false,
        cta: t("pricing.enterprise.cta"),
      },
    ];
  };
  
  const pricingPlans = getPricingPlans();

  const addOns = [
    {
      name: "Advanced Security",
      price: "$29/month",
      description: "Enhanced security features and compliance tools",
      features: ["SSO integration", "Advanced audit logs", "Compliance reporting"],
    },
    {
      name: "Custom Integrations",
      price: "$99/month",
      description: "Connect with your existing business systems",
      features: ["Custom API development", "Third-party integrations", "Data synchronization"],
    },
    {
      name: "Premium Analytics",
      price: "$79/month",
      description: "Deep insights and predictive analytics",
      features: ["Predictive modeling", "Custom dashboards", "Advanced reporting"],
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans so you can test our platform before committing.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms.",
    },
    {
      question: "Do you offer discounts for annual payments?",
      answer: "Yes, we offer a 20% discount when you pay annually instead of monthly.",
    },
    {
      question: "What happens if I exceed my frontliner limit?",
      answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or we'll automatically adjust your billing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead 
        title="Pricing - SYSKITA Platform"
        description="Choose the perfect SYSKITA plan for your business. Flexible pricing for frontliner management solutions with features that scale with your needs."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("pricing.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            {t("pricing.subtitle")}
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              14-Day Free Trial
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              No Setup Fees
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Cancel Anytime
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary shadow-strong scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6">
                    {plan.name === "Enterprise" ? (
                      <CTAButton 
                        variant="speak"
                        className="w-full"
                      />
                    ) : (
                      <CTAButton 
                        variant="demo"
                        className="w-full"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supercharge your SYSKITA platform with powerful add-ons designed to meet specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <span className="text-primary font-bold">{addon.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{addon.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Have questions about our pricing? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Frontliner Management?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Start your free trial today and see how SYSKITA can revolutionize your business operations.
          </p>
          <CTAButton 
            variant="demo"
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          />
        </div>
      </section>
    </div>
  );
};

export default Pricing;