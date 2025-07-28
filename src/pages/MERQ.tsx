import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, Camera, ClipboardList, Users, BarChart3, Shield, Smartphone, Server, Cloud, Monitor, Code } from "lucide-react";

const MERQ = () => {
  const keyFeatures = [
    {
      icon: MapPin,
      title: "GPS Check‑ins & Proof of Visit",
      description: "Real-time verification with geofencing."
    },
    {
      icon: Camera,
      title: "Photo Upload & Before/After Validation", 
      description: "Capture shelf, display, and promo compliance visually."
    },
    {
      icon: ClipboardList,
      title: "Stock & Sales Data Entry",
      description: "Log stock levels, expiry dates, competitor pricing, and sales orders."
    },
    {
      icon: Users,
      title: "Dynamic Forms & Surveys",
      description: "Admins can create custom forms for different roles and projects."
    },
    {
      icon: BarChart3,
      title: "Live Location & Attendance",
      description: "Clock-in/out, track location every 5 minutes, view 30-day history."
    },
    {
      icon: Monitor,
      title: "Integrated Dashboards",
      description: "Managers approve/reject submissions and track KPIs in real-time."
    }
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: "Check-In Process",
      description: "Frontliners log in, check in with GPS at assigned outlets."
    },
    {
      step: "2", 
      title: "Data Submission",
      description: "Submit stock, sales, and merchandising data with photos via Android app."
    },
    {
      step: "3",
      title: "Real-Time Approval",
      description: "Managers approve/reject in real-time, data flows directly into SYSKITA dashboards."
    }
  ];

  const comparisonData = [
    { typical: "Manual data collection", merq: "Offline-first Android app with auto-sync" },
    { typical: "Limited reporting", merq: "Real-time dashboards integrated with SYSKITA" },
    { typical: "No GPS verification", merq: "Geofenced check-in/out + spoof detection" },
    { typical: "Static forms", merq: "Dynamic, role-based form creation" },
    { typical: "No integrated approvals", merq: "Instant manager approval/rejection workflows" },
    { typical: "No API or export flexibility", merq: "Full REST API support + CSV/PDF exporting" }
  ];

  const securityFeatures = [
    "Follows OWASP ASVS Level 1 and CIS IG1 security controls.",
    "Compliant with Indonesia's Personal Data Protection Law (UU 27/2022).",
    "Uses secure JWT-based authentication and encrypted data storage (AES‑256 at rest, TLS 1.2+ in transit).",
    "All uploads handled via presigned URLs to secure cloud storage."
  ];

  const techHighlights = [
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "React Native (offline-first)."
    },
    {
      icon: Server,
      title: "Backend",
      description: "Golang + PostgreSQL + PostGIS."
    },
    {
      icon: Cloud,
      title: "Image Storage",
      description: "Secure object storage with presigned URLs."
    },
    {
      icon: Monitor,
      title: "Admin Dashboard",
      description: "Web interface for real-time approvals, metrics, and audits."
    },
    {
      icon: Code,
      title: "API Integration",
      description: "API-first design with REST endpoints for ERP/CRM integration."
    }
  ];

  return (
    <>
      <SEOHead 
        title="MERQ – Frontliner Management | SYSKITA"
        description="MERQ is SYSKITA's powerful mobile + web solution for managing merchandisers, sales reps, and field teams with GPS verification, photo reporting, and real-time dashboards."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            MERQ – Frontliner Management Made Simple
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            A powerful mobile + web solution to manage merchandisers, sales reps, and field teams – fully integrated with SYSKITA.
          </p>
          <CTAButton variant="demo" size="lg" />
        </div>
      </section>

      {/* What is MERQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What is MERQ?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MERQ is SYSKITA's dedicated frontliner management platform that helps brands execute perfectly at retail level. From GPS-verified store visits to photo-based reporting and real-time dashboards, MERQ ensures total field visibility, compliance, and performance tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How MERQ Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How MERQ Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why MERQ is Better</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-lg">Typical Field Tools</h3>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-lg">MERQ Advantage</h3>
              </div>
            </div>
            
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-muted/30 p-4 rounded-lg flex items-center">
                  <span className="text-muted-foreground">{row.typical}</span>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{row.merq}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Security & Compliance</h2>
            <div className="grid gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Highlights Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tech Highlights</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            MERQ integrates mobile, web, and dashboards:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {techHighlights.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Empower Your Field Teams with MERQ</h2>
          <CTAButton variant="book" size="lg" />
        </div>
      </section>
    </>
  );
};

export default MERQ;