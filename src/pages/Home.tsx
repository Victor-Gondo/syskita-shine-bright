import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Centralized{" "}
                  <span className="text-primary-light">Sales, Ops & Finance</span>{" "}
                  Reporting
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-lg">
                  Streamline your business operations with SYSKITA's powerful B2B SaaS platform. 
                  Get real-time insights across all your departments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="SYSKITA Dashboard Preview"
                className="rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Scale Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for modern B2B companies to streamline operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sales Analytics</h3>
                <p className="text-muted-foreground">
                  Real-time sales performance tracking with advanced analytics and forecasting capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Operations Management</h3>
                <p className="text-muted-foreground">
                  Streamline your operational processes with automated workflows and reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Financial Reporting</h3>
                <p className="text-muted-foreground">
                  Comprehensive financial insights with customizable dashboards and KPI tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of companies already using SYSKITA to streamline their processes and drive growth.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;