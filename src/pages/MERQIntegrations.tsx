import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Users, Cloud, MessageCircle, Zap, FileText, ArrowRight } from "lucide-react";

const MERQIntegrations = () => {
  const integrationCategories = [
    {
      icon: Database,
      title: "ERP Integrations",
      description: "Connect with SAP, Oracle, Microsoft Dynamics, and other enterprise systems for seamless data flow.",
      examples: ["SAP Business One", "Oracle NetSuite", "Microsoft Dynamics", "Odoo"]
    },
    {
      icon: Users,
      title: "CRM Integrations", 
      description: "Sync customer data and sales activities with leading CRM platforms for unified customer management.",
      examples: ["Salesforce", "HubSpot", "Microsoft CRM", "Zoho CRM"]
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure photo and document storage with automatic backup to your preferred cloud platform.",
      examples: ["Amazon S3", "Google Cloud Storage", "Microsoft Azure", "Dropbox Business"]
    },
    {
      icon: MessageCircle,
      title: "Messaging & Notifications",
      description: "Send alerts, reports, and updates through popular messaging and email platforms.",
      examples: ["WhatsApp Business", "Slack", "Microsoft Teams", "Email SMTP"]
    },
    {
      icon: Zap,
      title: "Automation Platforms",
      description: "Trigger workflows and automate processes with no-code integration platforms.",
      examples: ["Zapier", "Microsoft Power Automate", "Integromat", "IFTTT"]
    },
    {
      icon: FileText,
      title: "Reporting & Analytics",
      description: "Export data to business intelligence and reporting tools for advanced analytics.",
      examples: ["Power BI", "Tableau", "Google Analytics", "Custom Dashboards"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="MERQ Integrations | Connect with ERP, CRM & Cloud Services"
        description="MERQ seamlessly integrates with ERP systems, CRM platforms, cloud storage, and messaging tools via REST APIs for complete operational connectivity."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Powerful Integrations for Seamless Operations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            MERQ connects with your ERP, CRM, and reporting tools via REST APIs.
          </p>
        </div>
      </section>

      {/* Integrations Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground mb-3">Popular integrations:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Developer-Friendly REST APIs</h2>
            <p className="text-lg text-muted-foreground mb-8">
              MERQ offers comprehensive REST APIs with detailed documentation, webhooks, and SDKs to integrate seamlessly with your existing technology stack.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-2">RESTful APIs</h3>
                <p className="text-sm text-muted-foreground">Full CRUD operations with JSON responses</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Webhooks</h3>
                <p className="text-sm text-muted-foreground">Real-time event notifications</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Authentication</h3>
                <p className="text-sm text-muted-foreground">Secure JWT-based API access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Request API Documentation</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get detailed API documentation and integration support from our technical team.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact Sales
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default MERQIntegrations;