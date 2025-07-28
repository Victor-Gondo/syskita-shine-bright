import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Business Intelligence: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the business intelligence landscape and how they'll impact your organization.",
      category: "Industry Insights",
      readTime: "5 min read",
      date: "March 15, 2024",
      featured: true
    },
    {
      title: "How to Build a Data-Driven Culture in Your Organization",
      excerpt: "Practical steps to foster a culture that values data-driven decision making across all departments.",
      category: "Best Practices",
      readTime: "7 min read",
      date: "March 10, 2024",
      featured: false
    },
    {
      title: "SYSKITA Product Update: New Analytics Dashboard Features",
      excerpt: "Discover the latest enhancements to our analytics dashboard that will streamline your reporting workflow.",
      category: "Product Updates",
      readTime: "4 min read",
      date: "March 8, 2024",
      featured: false
    },
    {
      title: "ROI Calculation: Measuring the Impact of Centralized Reporting",
      excerpt: "Learn how to quantify the business value of implementing centralized reporting solutions.",
      category: "Case Studies",
      readTime: "6 min read",
      date: "March 5, 2024",
      featured: false
    },
    {
      title: "Integration Guide: Connecting Your CRM with SYSKITA",
      excerpt: "Step-by-step guide to seamlessly integrate your CRM system with SYSKITA for unified reporting.",
      category: "Technical Guides",
      readTime: "8 min read",
      date: "March 1, 2024",
      featured: false
    },
    {
      title: "Customer Success Story: How TechCorp Increased Efficiency by 40%",
      excerpt: "Real-world case study showing how one of our clients transformed their operations with SYSKITA.",
      category: "Case Studies",
      readTime: "5 min read",
      date: "February 28, 2024",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Industry Insights",
    "Best Practices",
    "Product Updates",
    "Case Studies",
    "Technical Guides"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              SYSKITA Blog
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Insights, updates, and best practices for modern business intelligence and operations management
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Post</h2>
            <Card className="border-border/50 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-muted h-64 lg:h-auto flex items-center justify-center">
                    <span className="text-muted-foreground text-lg">Featured Post Image Placeholder</span>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        Industry Insights
                      </span>
                      <span className="text-sm text-muted-foreground">March 15, 2024</span>
                      <span className="text-sm text-muted-foreground">5 min read</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      The Future of Business Intelligence: Trends to Watch in 2024
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Explore the latest trends shaping the business intelligence landscape and how they'll impact your organization. From AI-powered analytics to real-time reporting capabilities.
                    </p>
                    <Button className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="bg-muted h-48 flex items-center justify-center">
                    <span className="text-muted-foreground">Blog Post Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights, product updates, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;