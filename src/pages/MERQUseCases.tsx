import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Store, Truck, Heart } from "lucide-react";

const MERQUseCases = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "FMCG Brands",
      description: "Monitor shelf share, track promotions, and ensure perfect store execution across thousands of retail outlets. Get real-time visibility into how your products perform at point-of-sale."
    },
    {
      icon: Store,
      title: "Retail Chains",
      description: "Coordinate store operations, track merchandising compliance, and maintain brand standards across all locations. Ensure consistent customer experience with automated reporting."
    },
    {
      icon: Truck,
      title: "Distributors & Field Sales",
      description: "Manage route optimization, track sales rep performance, and automate order collection from customers. Streamline the entire distribution workflow with GPS-verified visits."
    },
    {
      icon: Heart,
      title: "Pharma & Healthcare Teams",
      description: "Ensure regulatory compliance, track medical representative visits, and maintain detailed records for audit purposes. Monitor drug availability and expiry management in real-time."
    }
  ];

  return (
    <>
      <SEOHead 
        title="MERQ Use Cases | Industries & Teams That Use MERQ"
        description="Discover how FMCG brands, retail chains, distributors, and healthcare teams use MERQ for field management, compliance, and real-time execution."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Who Uses MERQ?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tailored for teams that need visibility, compliance, and real-time execution.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover how MERQ can fit your operations</h2>
          <CTAButton variant="book" size="lg" />
        </div>
      </section>
    </>
  );
};

export default MERQUseCases;