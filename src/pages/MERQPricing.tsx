import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const MERQPricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Basic features for small teams",
      price: "Contact Sales",
      features: [
        "Up to 10 field users",
        "GPS check-ins & geofencing",
        "Photo upload & validation",
        "Basic stock tracking",
        "Standard forms",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Full feature set + dashboards",
      price: "Contact Sales",
      features: [
        "Up to 50 field users",
        "All Starter features",
        "Real-time dashboards",
        "Advanced analytics",
        "Dynamic form builder",
        "Manager approval workflows",
        "API access",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom features, integrations, SLAs",
      price: "Custom Quote",
      features: [
        "Unlimited users",
        "All Professional features",
        "Custom integrations",
        "White-label options",
        "Advanced security controls",
        "Custom SLAs",
        "Dedicated account manager",
        "On-site training"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead 
        title="MERQ Pricing | Scalable Plans for Field Management"
        description="Choose the right MERQ plan for your team. Starter, Professional, and Enterprise options with scalable pricing to grow with your business."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Choose the Right Plan for Your Team
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Scalable pricing to grow with your business.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-md' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan CTA Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom plan?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have specific requirements or need a tailored solution? Our team will work with you to create the perfect plan for your organization.
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Contact Us
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a free trial available?</h3>
              <p className="text-muted-foreground">Yes, we offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise customers.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is training included?</h3>
              <p className="text-muted-foreground">Professional plans include online training resources. Enterprise plans include dedicated onboarding and on-site training options.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MERQPricing;