const VisionMission = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vision & Mission
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Our commitment to transforming business operations
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower every business to operate with complete clarity and efficiency 
              by providing a single, reliable source of truth for all operational data.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to simplify complex business processes, improve decision-making, 
              and help companies scale smarter through centralized reporting and actionable insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;