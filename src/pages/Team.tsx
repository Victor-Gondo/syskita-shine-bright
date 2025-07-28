import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import { SEOHead } from "@/components/SEOHead";
import { Linkedin, ExternalLink } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Francis Tjiterosampurno",
      role: "Founder & CEO",
      bio: "Founder and CEO of SYSKITA and PT Pangan Kreasi Makmur (Francis Organic), Francis built one of Indonesia's fastest-growing FMCG brands from the ground up, expanding into major national retail chains and achieving 141% CAGR growth from 2018–2023. With a background in Business Analytics and Information Management from Purdue University, he brings expertise in retail, supply chain, and SaaS product strategy.",
      funFact: "Started his first company at age 14 and scaled it to nationwide distribution.",
      linkedinUrl: "#",
      imageAlt: "Francis Tjiterosampurno - Founder & CEO"
    },
    {
      name: "Victor Gondo Poetra",
      role: "Co-Founder & CTO", 
      bio: "Victor is an AI engineer and software developer with experience at Datasaur, Commie Capital, OSU College of Business, and EdenFarm. He has built LLM-powered applications, Text-to-SQL models, and mobile features for large-scale systems. Holding a B.Sc. in Computer Science from Oregon State University, he leads SYSKITA's technical vision, ensuring a robust and scalable SaaS platform.",
      funFact: "Passionate about AI-driven solutions and building tools that scale globally.",
      linkedinUrl: "#",
      imageAlt: "Victor Gondo Poetra - Co-Founder & CTO"
    }
  ];


  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Meet the Founders | SYSKITA Leadership Team"
        description="Meet the founders behind SYSKITA - combining deep expertise in entrepreneurship, SaaS, and AI engineering to transform business operations."
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet the Founders
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The team behind SYSKITA brings together deep expertise in entrepreneurship, SaaS, and AI engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe great companies are built by teams that combine business vision and technical expertise. Get to know the people leading SYSKITA's mission to transform sales, operations, and field execution management.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  {/* Photo Placeholder */}
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Name and Role */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold text-lg">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {member.bio}
                    </p>
                  </div>

                  {/* Fun Fact */}
                  <div className="bg-muted/30 rounded-lg p-4 mb-6">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Fun Fact:</span> {member.funFact}
                    </p>
                  </div>

                  {/* LinkedIn Link */}
                  <div className="text-center">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(member.linkedinUrl, '_blank')}
                    >
                      <Linkedin size={16} />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Join us on our journey to transform business operations. Learn more or book a demo today.
            </p>
            <CTAButton variant="book" size="lg" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;