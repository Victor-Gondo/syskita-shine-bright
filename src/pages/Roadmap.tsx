import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Zap, BarChart3, Workflow, Brain } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q3 2025",
      title: "Beta release of MERQ integrations",
      description: "Enhanced API connectivity with major ERP and CRM systems, enabling seamless data flow between MERQ and your existing business tools.",
      icon: Zap,
      status: "upcoming"
    },
    {
      quarter: "Q4 2025", 
      title: "Launch of Insight analytics product",
      description: "Advanced analytics platform with predictive insights, custom reporting, and real-time business intelligence dashboards.",
      icon: BarChart3,
      status: "upcoming"
    },
    {
      quarter: "Q1 2026",
      title: "Workflow automation enhancements in Flow",
      description: "Intelligent workflow automation with conditional logic, automated approvals, and smart task routing based on business rules.",
      icon: Workflow,
      status: "upcoming"
    },
    {
      quarter: "Q2 2026",
      title: "AI-powered sales forecasting",
      description: "Machine learning algorithms that analyze historical data and market trends to provide accurate sales predictions and recommendations.",
      icon: Brain,
      status: "future"
    }
  ];

  return (
    <>
      <SEOHead 
        title="SYSKITA Roadmap | What's Next for Our Platform"
        description="Discover what's coming next for SYSKITA. Explore our product roadmap including MERQ integrations, Insight analytics, Flow automation, and AI-powered features."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            What's Next for SYSKITA?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're building the future of operational excellence.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Roadmap</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
              
              <div className="space-y-8">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                    
                    <Card className="md:ml-16 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                {item.quarter}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                item.status === 'upcoming' 
                                  ? 'bg-secondary/20 text-secondary-foreground' 
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                {item.status === 'upcoming' ? 'Coming Soon' : 'In Planning'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why This Roadmap Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Enhanced Integration</h3>
                <p className="text-muted-foreground">
                  Our upcoming integrations will connect SYSKITA with your entire tech stack, 
                  creating a unified operational ecosystem that eliminates data silos.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Intelligent Automation</h3>
                <p className="text-muted-foreground">
                  AI-powered features will automate routine tasks, predict trends, and provide 
                  actionable insights to help you stay ahead of the competition.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Deeper insights into your operations with predictive analytics, custom reports, 
                  and real-time dashboards that drive better decision-making.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Built to grow with your business, our platform will support enterprises of any 
                  size with customizable features and flexible deployment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Join the Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to experience new features as we build them. 
              Get early access to beta releases and help shape the future of SYSKITA.
            </p>
            <CTAButton variant="speak" size="lg" />
            <p className="text-sm text-muted-foreground mt-4">
              Request early access to upcoming features and beta programs
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;