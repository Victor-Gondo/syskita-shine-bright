import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Camera, Package, DollarSign, FileText, Clock, CheckCircle, BarChart3 } from "lucide-react";

const MERQFeatures = () => {
  const features = [
    {
      icon: MapPin,
      title: "GPS Check-ins & Geofencing",
      description: "Verify store visits with location-based check-ins and geofencing technology for accurate attendance tracking."
    },
    {
      icon: Camera,
      title: "Photo Upload & Before/After Validation",
      description: "Capture visual proof of merchandising activities with before/after comparisons and instant validation."
    },
    {
      icon: Package,
      title: "Stock, Sales & Expiry Tracking", 
      description: "Monitor inventory levels, record sales data, and track product expiry dates for complete stock management."
    },
    {
      icon: DollarSign,
      title: "Competitor Price & Promo Capture",
      description: "Track competitor pricing and promotional activities to stay ahead in the market with real-time intelligence."
    },
    {
      icon: FileText,
      title: "Dynamic Role-Based Forms",
      description: "Create custom forms tailored to different roles and projects with flexible field configurations."
    },
    {
      icon: Clock,
      title: "Live Location & Attendance Logs",
      description: "Track team locations in real-time with automated attendance logging and 30-day historical data."
    },
    {
      icon: CheckCircle,
      title: "Approvals & Real-Time Manager Feedback",
      description: "Streamline approval workflows with instant manager feedback and real-time status updates."
    },
    {
      icon: BarChart3,
      title: "Integrated Dashboards & Exports",
      description: "Access comprehensive analytics dashboards with flexible export options for data analysis."
    }
  ];

  return (
    <>
      <SEOHead 
        title="MERQ Features | All-in-One Frontliner Management Tools"
        description="Discover MERQ's comprehensive features for frontliner management including GPS check-ins, photo validation, stock tracking, and real-time dashboards."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            All-in-One Tools for Frontliner Management
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From GPS check-ins to real-time dashboards, MERQ powers perfect retail execution.
          </p>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to see MERQ in action?</h2>
          <CTAButton variant="book" size="lg" />
        </div>
      </section>
    </>
  );
};

export default MERQFeatures;