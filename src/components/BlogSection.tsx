import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts, getCategoryColor } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section className="py-20 dark:bg-[#020817] border-t border-primary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" id="blog">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Latest Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Stay informed with expert insights, health tips, and latest trends in medicine prices and healthcare.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <Card key={post.id} className="mb-12 overflow-hidden group hover:shadow-lg transition-all duration-300 dark:shadow-strong border-[0.5px] border-primary/20 border-primary/20">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative overflow-hidden h-64 md:h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(post.category)} font-semibold`}>
                      Featured
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).slice(0, 5).map(post => (
            <Card key={post.id} className="border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
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
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}

          {/* View All link to /blog */}
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/blog"
              aria-label="View all blog posts"
              className="flex flex-col items-center justify-center gap-2 group"
            >
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-medium text-foreground">View All</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
