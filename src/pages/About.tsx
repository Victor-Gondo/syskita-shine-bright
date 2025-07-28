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
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to revolutionize how B2B companies manage their sales, 
              operations, and finance reporting through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, SYSKITA emerged from the recognition that modern businesses 
                need unified, intelligent reporting solutions to stay competitive in today's 
                fast-paced market.
              </p>
              <p className="text-lg text-muted-foreground">
                Starting as a small team of industry experts, we've grown into a trusted 
                partner for hundreds of companies worldwide, helping them streamline their 
                operations and make data-driven decisions.
              </p>
              <Button className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
                Learn More About Our Journey
              </Button>
            </div>
            
            <div className="bg-muted rounded-lg p-8 h-96 flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Company Story Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously pushing boundaries to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Reliability</h3>
                <p className="text-muted-foreground">
                  Building trust through consistent, dependable service and support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-muted-foreground">
                  Open communication and honest partnerships with our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  Striving for the highest standards in everything we deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-lg text-muted-foreground">Companies Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-lg text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-lg text-muted-foreground">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-lg text-muted-foreground">Countries Worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;