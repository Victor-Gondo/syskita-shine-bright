import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Camera, ShoppingCart } from "lucide-react";

const Services = () => {
  const subBrands = [
    {
      name: "MERQ – Frontliner Management",
      description: "MERQ is SYSKITA's field execution tool that empowers merchandisers and sales reps with GPS check‑ins, photo uploads, issue tracking, and order‑taking – all synced to the SYSKITA dashboard.",
      buttonText: "Explore MERQ"
    },
    {
      name: "Insight – Advanced Analytics", 
      description: "Insight delivers real‑time dashboards, sales vs. inventory tracking, and predictive analytics to help businesses make smarter decisions faster.",
      buttonText: "Explore Insight"
    },
    {
      name: "Flow – Workflow Automation",
      description: "Flow streamlines approval workflows, PO lifecycle tracking, and issue resolution, ensuring teams stay aligned and efficient.",
      buttonText: "Explore Flow"
    }
  ];

  const merqFeatures = [
    {
      icon: MapPin,
      title: "GPS Check‑ins & Proof of Visit",
      description: "Location-based verification for field visits"
    },
    {
      icon: Camera,
      title: "Real‑Time Photo Upload & Approval",
      description: "Instant documentation and approval workflows"
    },
    {
      icon: ShoppingCart,
      title: "Order Taking, Shelf Share & Promotion Tracking",
      description: "Complete sales execution management"
    }
  ];

  const comparisonData = [
    { typical: "Fragmented tools", syskita: "Fully integrated sub‑brands (MERQ, Insight, Flow)" },
    { typical: "Manual data handling", syskita: "Automated, centralized dashboards" },
    { typical: "Delayed reporting", syskita: "Real‑time sync between field & HQ" }
  ];

  return (
    <>
      <SEOHead 
        title="SYSKITA Services | MERQ, Insight & Flow Solutions"
        description="Explore SYSKITA's comprehensive service offerings including MERQ field management, Insight analytics, and Flow automation tools."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services & Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            SYSKITA provides powerful tools to unify operations and empower teams – all under one platform.
          </p>
          <CTAButton variant="demo" size="lg" />
        </div>
      </section>

      {/* Sub-Brand Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <CardTitle className="text-xl">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base leading-relaxed">
                    {brand.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    {brand.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MERQ Highlight Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">MERQ – The Ultimate Frontliner Management Solution</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              MERQ enables field teams to execute perfectly at store level. With GPS-based check‑ins, photo uploads, and instant approvals, it ensures total visibility and faster decision‑making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {merqFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SYSKITA?</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-lg">Typical Solutions</h3>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-lg">SYSKITA Platform Advantage</h3>
              </div>
            </div>
            
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-muted/30 p-4 rounded-lg flex items-center">
                  <span className="text-muted-foreground">{row.typical}</span>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{row.syskita}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover How SYSKITA Can Power Your Growth</h2>
          <CTAButton variant="book" size="lg" />
        </div>
      </section>
    </>
  );
};

export default Services;