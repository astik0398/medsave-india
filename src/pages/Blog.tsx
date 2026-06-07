import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts, getCategoryColor } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MediBachat Blog | Medicine Price Tips, Healthcare Guides & Pharmacy News in India"
        description="Read MediBachat's blog for expert insights on medicine prices, online pharmacy comparisons, healthcare tips, telemedicine, and ways to save on medicines in India."
        path="/blog"
        keywords="medicine blog India, online pharmacy guide, healthcare tips, medicine price comparison blog, MediBachat blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "MediBachat Blog",
          url: "https://medibachat.in/blog",
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author.trim() },
            image: p.image,
            url: `https://medibachat.in/blog/${p.id}`,
          })),
        }}
      />
      <Header />
      <main className="flex-1 py-16 dark:bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              MediBachat Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore all our latest articles and insights about healthcare, medicine prices, and online pharmacies in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Link to={`/blog/${post.id}`} aria-label={post.title}>
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </Link>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
