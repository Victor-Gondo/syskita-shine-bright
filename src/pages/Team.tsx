import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      department: "Leadership",
      bio: "15+ years of experience in enterprise software and business intelligence."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "Former lead architect at major SaaS platforms with deep expertise in scalable systems."
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      department: "Product",
      bio: "Product strategy expert with focus on user experience and market fit."
    },
    {
      name: "David Thompson",
      role: "VP of Sales",
      department: "Sales",
      bio: "Proven track record in B2B SaaS sales and customer relationship management."
    },
    {
      name: "Lisa Wang",
      role: "Head of Engineering",
      department: "Technology",
      bio: "Full-stack development leader with expertise in modern web technologies."
    },
    {
      name: "James Wilson",
      role: "Head of Customer Success",
      department: "Customer Success",
      bio: "Dedicated to ensuring customer satisfaction and platform adoption success."
    }
  ];

  const departments = [
    { name: "Leadership", count: 3, description: "Strategic vision and company direction" },
    { name: "Technology", count: 12, description: "Platform development and architecture" },
    { name: "Product", count: 8, description: "Product strategy and user experience" },
    { name: "Sales", count: 15, description: "Revenue growth and partnerships" },
    { name: "Customer Success", count: 10, description: "Customer support and success" },
    { name: "Marketing", count: 6, description: "Brand and growth marketing" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The passionate professionals behind SYSKITA's success, dedicated to 
              transforming how businesses manage their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders driving innovation and growth at SYSKITA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                    {member.department}
                  </span>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cross-functional teams working together to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{dept.name}</h3>
                    <span className="text-2xl font-bold text-primary">{dept.count}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Culture
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe that great products come from great teams. Our culture is built 
                on collaboration, innovation, and a shared commitment to customer success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Remote-First Approach</h4>
                    <p className="text-muted-foreground">Flexible work environment with team members across the globe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Continuous Learning</h4>
                    <p className="text-muted-foreground">Professional development budget and learning opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Innovation Time</h4>
                    <p className="text-muted-foreground">20% time for personal projects and experimentation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-8 h-96 flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Team Culture Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and customer success.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;