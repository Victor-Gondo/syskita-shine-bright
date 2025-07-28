import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Target, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: TrendingUp,
      industry: "FMCG Brand",
      title: "Increased Store Compliance by 45%",
      description: "A leading consumer goods company transformed their retail execution using MERQ's GPS verification and photo validation features.",
      results: [
        "45% improvement in store compliance",
        "Real-time visibility across 2,500+ outlets",
        "Reduced manual audit time by 60%"
      ],
      challenge: "Manual store audits and inconsistent merchandising execution",
      solution: "MERQ's GPS check-ins, photo validation, and real-time dashboards"
    },
    {
      icon: Clock,
      industry: "Retail Chain",
      title: "Reduced Reporting Time by 70%",
      description: "Regional retail chain streamlined operations and eliminated manual reporting bottlenecks with SYSKITA's integrated platform.",
      results: [
        "70% reduction in reporting time",
        "Automated data collection from 150+ stores",
        "Improved decision-making speed by 50%"
      ],
      challenge: "Time-consuming manual reporting and delayed decision-making",
      solution: "SYSKITA's automated dashboards and real-time data sync"
    },
    {
      icon: Target,
      industry: "Distributor",
      title: "Boosted Sales Order Accuracy by 60%",
      description: "National distributor improved order accuracy and customer satisfaction using MERQ's mobile order-taking capabilities.",
      results: [
        "60% increase in sales order accuracy",
        "Eliminated paper-based order processing",
        "Improved customer satisfaction by 40%"
      ],
      challenge: "Error-prone paper orders and delayed order processing",
      solution: "MERQ's mobile order-taking and digital form validation"
    }
  ];

  return (
    <>
      <SEOHead 
        title="SYSKITA Case Studies | Real-World Success Stories"
        description="Discover how brands transform their operations with SYSKITA and MERQ. Read case studies showing improved compliance, efficiency, and accuracy."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How SYSKITA Transforms Operations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover real-world results from brands using SYSKITA and MERQ.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <study.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-medium mb-2">{study.industry}</div>
                  <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="grid grid-cols-1 gap-3 text-xs">
                        <div>
                          <span className="font-medium text-foreground">Challenge: </span>
                          <span className="text-muted-foreground">{study.challenge}</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Solution: </span>
                          <span className="text-muted-foreground">{study.solution}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Results Overview */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Results Across Industries</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Outlets Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-sm text-muted-foreground">Compliance Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">See How SYSKITA Can Help You</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join successful brands transforming their operations with SYSKITA's comprehensive platform.
          </p>
          <CTAButton variant="book" size="lg" />
        </div>
      </section>
    </>
  );
};

export default CaseStudies;