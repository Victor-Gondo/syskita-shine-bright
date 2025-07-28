import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways to Improve Retail Execution with Centralized Data",
      excerpt: "Discover actionable strategies to enhance your retail operations through unified data management and real-time insights.",
      category: "Tips & Insights",
      readTime: "6 min read",
      date: "March 15, 2024"
    },
    {
      title: "The Future of FMCG Operations: Why Visibility Matters",
      excerpt: "Explore how operational visibility is transforming the FMCG industry and driving competitive advantage.",
      category: "Company News",
      readTime: "5 min read",
      date: "March 12, 2024"
    },
    {
      title: "Case Study: How SYSKITA Helped a Brand Cut Reporting Time by 70%",
      excerpt: "Real-world success story showing how centralized reporting transformed a major FMCG brand's operations.",
      category: "Case Studies",
      readTime: "8 min read",
      date: "March 10, 2024"
    },
    {
      title: "Building Better Dashboards: Essential Metrics for FMCG Teams",
      excerpt: "Learn which KPIs matter most for FMCG operations and how to visualize them effectively.",
      category: "Tips & Insights",
      readTime: "7 min read",
      date: "March 8, 2024"
    },
    {
      title: "SYSKITA Platform Update: New Analytics Features Now Available",
      excerpt: "Introducing enhanced analytics capabilities that provide deeper insights into your business operations.",
      category: "Company News",
      readTime: "4 min read",
      date: "March 5, 2024"
    },
    {
      title: "From Spreadsheets to Smart Dashboards: A Digital Transformation Story",
      excerpt: "Follow one company's journey from manual reporting to automated, intelligent business insights.",
      category: "Case Studies",
      readTime: "6 min read",
      date: "March 1, 2024"
    }
  ];

  const categories = [
    "All Posts",
    "Company News", 
    "Tips & Insights",
    "Case Studies"
  ];

  return (
    <div className="min-h-screen">
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