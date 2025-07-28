import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";

// Blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: "enhancing-frontliner-productivity",
    title: "Enhancing Frontliner Productivity with Smart Analytics",
    excerpt: "Discover how data-driven insights can transform your frontliner operations and boost overall productivity.",
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced business environment, frontliners are the backbone of customer service and operational excellence. However, managing and optimizing their productivity remains a significant challenge for many organizations. Smart analytics has emerged as a game-changing solution that empowers businesses to unlock the full potential of their frontline workforce.</p>
      
      <h2>The Power of Data-Driven Decision Making</h2>
      <p>Smart analytics transforms raw operational data into actionable insights that drive meaningful improvements in frontliner productivity. By leveraging advanced algorithms and machine learning capabilities, organizations can identify patterns, predict trends, and make informed decisions that directly impact their bottom line.</p>
      
      <h3>Key Benefits of Smart Analytics for Frontliners</h3>
      <ul>
        <li><strong>Real-time Performance Monitoring:</strong> Track individual and team performance metrics as they happen, enabling immediate interventions when needed.</li>
        <li><strong>Predictive Scheduling:</strong> Use historical data and predictive modeling to optimize staff scheduling and resource allocation.</li>
        <li><strong>Skill Gap Analysis:</strong> Identify training needs and development opportunities for individual team members.</li>
        <li><strong>Customer Satisfaction Correlation:</strong> Connect frontliner performance metrics with customer satisfaction scores to optimize service delivery.</li>
      </ul>
      
      <h2>Implementation Best Practices</h2>
      <p>Successfully implementing smart analytics for frontliner productivity requires a strategic approach that considers both technological capabilities and human factors.</p>
      
      <h3>1. Define Clear Objectives</h3>
      <p>Before implementing any analytics solution, it's crucial to define what success looks like for your organization. Whether you're focusing on reducing response times, improving customer satisfaction scores, or optimizing resource utilization, having clear objectives guides the entire implementation process.</p>
      
      <h3>2. Ensure Data Quality</h3>
      <p>The effectiveness of smart analytics depends heavily on the quality of input data. Implement robust data collection processes and validation mechanisms to ensure accuracy and reliability.</p>
      
      <h3>3. Foster a Data-Driven Culture</h3>
      <p>Technology alone isn't enough. Organizations must cultivate a culture where data-driven decision making is valued and encouraged at all levels.</p>
      
      <h2>Measuring Success</h2>
      <p>To evaluate the impact of smart analytics on frontliner productivity, organizations should track key performance indicators (KPIs) that align with their business objectives:</p>
      
      <ul>
        <li>Average resolution time</li>
        <li>Customer satisfaction scores</li>
        <li>Employee engagement levels</li>
        <li>Operational efficiency metrics</li>
        <li>Cost per transaction</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Smart analytics represents a significant opportunity for organizations to enhance frontliner productivity while improving customer experiences. By leveraging data-driven insights, businesses can create more efficient operations, better-trained teams, and ultimately, more satisfied customers.</p>
      
      <p>The key to success lies in choosing the right analytics platform, implementing it strategically, and fostering a culture that embraces data-driven decision making. With the right approach, smart analytics can transform your frontliner operations and drive sustainable business growth.</p>
    `,
    category: "Analytics",
    readTime: "8 min read",
    date: "Nov 25, 2024",
    author: "Sarah Johnson",
    authorRole: "Product Manager",
    tags: ["Analytics", "Productivity", "Frontliners", "Data-Driven"],
    views: "2.3k",
  },
  {
    id: "future-of-customer-service",
    title: "The Future of Customer Service: AI and Human Collaboration",
    excerpt: "Explore how AI-powered tools are revolutionizing customer service while preserving the human touch.",
    content: `
      <h2>The Evolution of Customer Service</h2>
      <p>Customer service has undergone a dramatic transformation over the past decade. From traditional call centers to omnichannel support experiences, the industry continues to evolve rapidly. Today, we're witnessing the emergence of a new paradigm: the seamless collaboration between artificial intelligence and human agents.</p>
      
      <h2>AI as an Enabler, Not a Replacement</h2>
      <p>Contrary to popular belief, AI isn't here to replace human customer service agents. Instead, it serves as a powerful enabler that amplifies human capabilities and creates more meaningful customer interactions.</p>
      
      <h3>Key Areas Where AI Enhances Human Performance:</h3>
      <ul>
        <li><strong>Intelligent Routing:</strong> AI algorithms analyze customer inquiries and route them to the most qualified agents based on expertise, availability, and historical performance.</li>
        <li><strong>Real-time Assistance:</strong> AI provides agents with real-time suggestions, knowledge base articles, and solution recommendations during customer interactions.</li>
        <li><strong>Sentiment Analysis:</strong> Advanced AI can detect customer emotions and alert agents to adjust their approach accordingly.</li>
        <li><strong>Automated Documentation:</strong> AI automates routine documentation tasks, allowing agents to focus more on customer interactions.</li>
      </ul>
      
      <h2>Building the Perfect Hybrid Model</h2>
      <p>The most successful customer service organizations are those that have mastered the art of combining AI efficiency with human empathy. This hybrid model leverages the strengths of both approaches while minimizing their respective weaknesses.</p>
      
      <h3>Best Practices for Implementation:</h3>
      <ol>
        <li><strong>Start with Simple Automation:</strong> Begin by automating routine tasks and gradually expand AI capabilities based on results and feedback.</li>
        <li><strong>Invest in Agent Training:</strong> Ensure your human agents are trained to work effectively alongside AI tools and understand their capabilities.</li>
        <li><strong>Maintain Human Oversight:</strong> Always keep humans in the loop for complex or sensitive customer issues.</li>
        <li><strong>Continuously Optimize:</strong> Use data and feedback to continuously improve both AI algorithms and human processes.</li>
      </ol>
      
      <h2>The Customer Perspective</h2>
      <p>Modern customers have high expectations for service quality, speed, and personalization. They want quick resolutions to simple issues but also value human connection for complex problems. The AI-human collaboration model meets these diverse needs by:</p>
      
      <ul>
        <li>Providing instant responses to common questions through AI chatbots</li>
        <li>Escalating complex issues to trained human agents with full context</li>
        <li>Offering 24/7 availability through intelligent automation</li>
        <li>Personalizing interactions based on customer history and preferences</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>As AI technology continues to advance, we can expect even more sophisticated forms of human-AI collaboration. Natural language processing will become more nuanced, predictive analytics will become more accurate, and the line between human and AI assistance will become increasingly seamless.</p>
      
      <p>Organizations that embrace this collaborative approach today will be best positioned to deliver exceptional customer experiences tomorrow. The future of customer service isn't about choosing between AI and humans—it's about creating synergy between them.</p>
    `,
    category: "Technology",
    readTime: "6 min read",
    date: "Nov 22, 2024",
    author: "Michael Chen",
    authorRole: "Technology Lead",
    tags: ["AI", "Customer Service", "Technology", "Innovation"],
    views: "1.8k",
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead 
        title={`${post.title} - SYSKITA Blog`}
        description={post.excerpt}
      />
      
      {/* Navigation */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            {/* Author and Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}, {post.authorRole}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                <span>{post.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Button */}
              <div className="mt-8 pt-8 border-t border-border text-center">
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3">{relatedPost.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">
                    <Link 
                      to={`/blog/${relatedPost.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{relatedPost.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{relatedPost.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;