import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About SYSKITA
            </h1>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SYSKITA was created to give businesses full control and visibility over their operations. 
                Designed for FMCG and retail teams, SYSKITA connects sales, finance, operations, and production 
                into one centralized platform. Our mission is to help companies scale with confidence by making 
                data-driven decisions easy and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section - Timeline Style */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our mission to transform business operations.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              
              <div className="space-y-12">
                {/* 2025 Milestone */}
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-medium">
                    2025
                  </div>
                  <Card className="flex-1 border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        SYSKITA Founded
                      </h3>
                      <p className="text-muted-foreground">
                        The beginning of our journey to revolutionize business operations reporting 
                        with a vision to create a centralized platform for modern businesses.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* 2026 Milestone */}
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-medium">
                    2026
                  </div>
                  <Card className="flex-1 border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        First Enterprise Rollout
                      </h3>
                      <p className="text-muted-foreground">
                        Successfully launched our platform with leading FMCG brands, establishing 
                        ourselves as a trusted partner in enterprise-level operations management.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* 2027 Milestone */}
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-medium">
                    2027
                  </div>
                  <Card className="flex-1 border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        Advanced Analytics Launch
                      </h3>
                      <p className="text-muted-foreground">
                        Introducing cutting-edge analytics features with AI-powered insights, 
                        predictive modeling, and advanced business intelligence capabilities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Built for FMCG & Retail Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our platform is specifically designed to meet the unique challenges of fast-moving 
              consumer goods and retail operations, providing the tools you need to stay ahead 
              in competitive markets.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Speed</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time data processing for fast-paced environments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
                <p className="text-muted-foreground text-sm">
                  Precise reporting for confident decision-making
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground text-sm">
                  Dependable platform you can trust for critical operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;