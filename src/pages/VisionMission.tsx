import { Card, CardContent } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Vision & Mission
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Driving the future of business intelligence and operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground">
                To become the world's leading platform for unified business reporting, 
                empowering organizations to make data-driven decisions with confidence 
                and speed.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a future where every business, regardless of size, has access 
                to enterprise-grade analytics and reporting capabilities that drive growth 
                and operational efficiency.
              </p>
              
              <Card className="border-border/50 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Future Goals
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Global market leadership in B2B SaaS reporting solutions</li>
                    <li>• AI-powered predictive analytics for all business functions</li>
                    <li>• Seamless integration with 1000+ business applications</li>
                    <li>• Zero-configuration intelligent reporting for SMBs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted rounded-lg p-8 h-96 flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Vision Illustration Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-muted rounded-lg p-8 h-96 flex items-center justify-center lg:order-first">
              <span className="text-muted-foreground text-lg">Mission Illustration Placeholder</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To simplify business complexity by providing intuitive, powerful reporting 
                solutions that transform how companies understand and optimize their operations.
              </p>
              <p className="text-lg text-muted-foreground">
                We are committed to delivering exceptional value through innovative technology, 
                outstanding customer service, and continuous improvement based on real user needs.
              </p>
              
              <Card className="border-border/50 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    How We Deliver
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• User-centric design and development approach</li>
                    <li>• Continuous innovation and feature enhancement</li>
                    <li>• World-class customer support and success programs</li>
                    <li>• Secure, scalable, and reliable platform architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles shape our culture and guide our decision-making process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer First</h3>
                <p className="text-muted-foreground">
                  Every decision we make is guided by what's best for our customers and their success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We embrace change, learn from feedback, and constantly evolve our solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaborative Growth</h3>
                <p className="text-muted-foreground">
                  We believe in partnerships and growing together with our customers and team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;