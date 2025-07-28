import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { CTAButton } from "@/components/ui/cta-button";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways FMCG Brands Can Improve In-Store Execution with Tech",
      excerpt: "Discover how modern technology solutions are revolutionizing in-store execution for FMCG brands. Learn practical strategies to enhance merchandising, compliance, and sales performance.",
      category: "Tips & Insights",
      readTime: "7 min read",
      date: "March 20, 2024",
      metaTitle: "5 Ways FMCG Brands Can Improve In-Store Execution with Tech | SYSKITA",
      metaDescription: "Learn how FMCG brands can leverage technology to improve in-store execution, boost compliance, and drive sales performance with practical strategies and real-world examples."
    },
    {
      title: "How GPS-Based Merchandising Boosts Compliance",
      excerpt: "Explore the power of GPS verification in ensuring merchandising compliance. See how location-based technology transforms field team accountability and execution quality.",
      category: "Technology",
      readTime: "6 min read",
      date: "March 18, 2024",
      metaTitle: "How GPS-Based Merchandising Boosts Compliance | SYSKITA Blog",
      metaDescription: "Discover how GPS-based merchandising technology improves compliance rates, ensures accurate store visits, and enhances field team accountability."
    },
    {
      title: "Why Real-Time Dashboards Are a Game Changer for Sales Teams",
      excerpt: "Real-time dashboards provide instant visibility into sales performance and field operations. Learn how immediate data access transforms decision-making and team productivity.",
      category: "Sales & Analytics",
      readTime: "8 min read",
      date: "March 15, 2024",
      metaTitle: "Why Real-Time Dashboards Are a Game Changer for Sales Teams | SYSKITA",
      metaDescription: "Learn how real-time dashboards transform sales team performance by providing instant visibility, improving decision-making, and boosting productivity."
    },
    {
      title: "PDP Law Compliance for SaaS in Indonesia – What You Need to Know",
      excerpt: "Navigate Indonesia's Personal Data Protection Law (UU 27/2022) requirements for SaaS platforms. Essential compliance guidelines for data security and privacy protection.",
      category: "Compliance & Legal",
      readTime: "10 min read",
      date: "March 12, 2024",
      metaTitle: "PDP Law Compliance for SaaS in Indonesia – Complete Guide | SYSKITA",
      metaDescription: "Complete guide to Indonesia's Personal Data Protection Law (UU 27/2022) compliance for SaaS platforms. Essential requirements and best practices."
    },
    {
      title: "Case Study: How a Brand Reduced Reporting Time by 70% with MERQ",
      excerpt: "Real success story of a major brand that transformed their reporting process using MERQ's automated field management solution. See the complete transformation journey.",
      category: "Case Studies",
      readTime: "9 min read",
      date: "March 10, 2024",
      metaTitle: "Case Study: 70% Reporting Time Reduction with MERQ | SYSKITA Success Stories",
      metaDescription: "Real case study showing how a major brand reduced reporting time by 70% using MERQ's field management solution. Complete transformation details and results."
    }
  ];

  const categories = [
    "All Posts",
    "Tips & Insights",
    "Technology", 
    "Sales & Analytics",
    "Compliance & Legal",
    "Case Studies"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="SYSKITA Insights | Tips, News & Case Studies"
        description="Read expert tips, company news, and case studies on operations, reporting, and scaling with SYSKITA."
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              SYSKITA Insights
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Expert insights, industry trends, and success stories from the world of FMCG and retail operations
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📊</span>
                      </div>
                      <span className="text-muted-foreground text-sm">Featured Image</span>
                    </div>
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
                    <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Meta Title:</p>
                      <p className="text-xs font-medium line-clamp-1">{post.metaTitle}</p>
                      <p className="text-xs text-muted-foreground mb-1 mt-2">Meta Description:</p>
                      <p className="text-xs line-clamp-2">{post.metaDescription}</p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Read More →
                      </Button>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <CTAButton variant="demo" className="w-full text-sm py-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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


      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with SYSKITA Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest insights on FMCG operations, retail execution tips, and industry trends delivered to your inbox.
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