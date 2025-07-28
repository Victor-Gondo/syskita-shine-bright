import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, Camera, ClipboardList, Users, BarChart3, Shield, Smartphone, Server, Cloud, Monitor, Code, Navigation, Route, AlertTriangle, Clock, TrendingUp, Zap } from "lucide-react";

const MERQ = () => {
  const keyFeatures = [
    {
      icon: Navigation,
      title: "Real-Time Live Location Tracking",
      description: "Monitor your field team's exact location every 30 seconds with GPS accuracy down to 3 meters. See who's where, when they arrived, and how long they've been there.",
      highlight: true
    },
    {
      icon: Route,
      title: "Smart Route Optimization & Planning",
      description: "AI-powered route planning that optimizes travel time and fuel costs. Track actual vs planned routes with detailed analytics."
    },
    {
      icon: MapPin,
      title: "Geofence Alerts & Territory Management",
      description: "Set up virtual boundaries around stores and territories. Get instant alerts when team members enter or leave designated areas."
    },
    {
      icon: Clock,
      title: "Complete Location History & Analytics",
      description: "Access 90-day location history with detailed timelines, distance traveled, time spent at each location, and productivity insights."
    },
    {
      icon: Camera,
      title: "Photo Upload & Before/After Validation", 
      description: "Capture shelf, display, and promo compliance visually with GPS-stamped photos for complete audit trails."
    },
    {
      icon: ClipboardList,
      title: "Stock & Sales Data Entry",
      description: "Log stock levels, expiry dates, competitor pricing, and sales orders with location verification."
    },
    {
      icon: Users,
      title: "Dynamic Forms & Surveys",
      description: "Create custom forms for different roles and projects with location-based triggers and conditions."
    },
    {
      icon: TrendingUp,
      title: "Live Dashboard & Performance Analytics",
      description: "Real-time visibility into team performance, location patterns, and productivity metrics with predictive insights."
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
    { typical: "Basic GPS check-ins only", merq: "Real-time location tracking every 30 seconds with 3m accuracy" },
    { typical: "No location history", merq: "90-day detailed location history with analytics and insights" },
    { typical: "Manual route planning", merq: "AI-powered route optimization with live traffic updates" },
    { typical: "Limited reporting", merq: "Real-time dashboards with location intelligence and predictive analytics" },
    { typical: "No geofencing capabilities", merq: "Advanced geofencing with custom alerts and territory management" },
    { typical: "Basic attendance tracking", merq: "Comprehensive time-at-location analytics with productivity scoring" },
    { typical: "No location fraud prevention", merq: "Advanced spoof detection with movement pattern analysis" },
    { typical: "Static forms", merq: "Location-triggered dynamic forms with conditional logic" }
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
            MERQ – Real-Time Field Team Intelligence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Revolutionary field management with live location tracking, route optimization, and AI-powered analytics. Know exactly where your team is and what they're accomplishing – in real-time.
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
              MERQ is SYSKITA's revolutionary field management platform that transforms how brands manage their frontline teams. With industry-leading real-time location tracking, AI-powered route optimization, and comprehensive analytics, MERQ provides unprecedented visibility into field operations. From GPS-verified store visits to intelligent performance insights, MERQ ensures perfect execution at every retail touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Location Intelligence Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Location Intelligence at Your Fingertips</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the most advanced field tracking technology. MERQ's real-time location system provides unprecedented visibility into your team's activities with military-grade accuracy and AI-powered insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${feature.highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                    <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  {feature.highlight && (
                    <div className="flex items-center gap-1 mt-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">Featured</span>
                    </div>
                  )}
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

      {/* Advanced Location Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Advanced Location Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Go beyond basic GPS tracking with intelligent features that transform raw location data into actionable business insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Response</h3>
              <p className="text-muted-foreground">
                Panic button with instant location sharing to managers and emergency contacts. Automatic alerts for unusual movement patterns or prolonged inactivity.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-secondary/5 border border-secondary/10">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-muted-foreground">
                AI analyzes movement patterns to predict optimal visit times, identify territory gaps, and suggest performance improvements based on location data.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-accent/5 border border-accent/10">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Anti-Fraud Protection</h3>
              <p className="text-muted-foreground">
                Advanced algorithms detect GPS spoofing, fake check-ins, and suspicious movement patterns. ML-powered verification ensures authentic field activities.
              </p>
            </div>
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