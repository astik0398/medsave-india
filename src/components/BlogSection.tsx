import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import online_medicine_buying from "@/assets/online medicine buying.png"

const BlogSection = () => {
  const blogPosts = [
    {
      id: "7-online-medicine-shopping-hacks-to-reduce-bills",
      title: "Top 7 Online Shopping Hacks to Reduce Your Medicine Bill",
      excerpt: "Discover effective strategies to reduce your medical expenses without compromising on quality healthcare.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Health Tips",
      image: online_medicine_buying,
      featured: true
    },
    {
      id: 2,
      title: "Understanding Generic vs Brand Name Medicines",
      excerpt: "Learn the key differences between generic and brand name medications and make informed choices.",
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
      readTime: "4 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "How to Use Medicine Price Comparison Tools",
      excerpt: "A comprehensive guide to finding the best deals on medications using online comparison platforms.",
      author: "MediBachat Team",
      date: "March 10, 2024",
      readTime: "3 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Medicine Storage Best Practices",
      excerpt: "Essential tips for properly storing your medications to maintain their effectiveness and safety.",
      author: "Dr. Priya Sharma",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Digital Health: The Future of Medicine Shopping in India",
      excerpt: "Explore how technology is revolutionizing the way we purchase and manage our medications.",
      author: "Tech Health Team",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Common Medicine Side Effects and How to Manage Them",
      excerpt: "Understanding potential side effects and when to consult your healthcare provider.",
      author: "Dr. Amanda Rodriguez",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "Health Tips",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop&crop=center"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "health tips":
        return "bg-gradient-to-r from-green-100 to-green-200 text-green-800 dark:from-green-100 dark:to-green-200 dark:text-green-700";
      case "education":
        return "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-100 dark:to-blue-200 dark:text-blue-700";
      case "guide":
        return "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-100 dark:to-purple-200 dark:text-purple-700";
      case "safety":
        return "bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-100 dark:to-red-200 dark:text-red-700";
      case "technology":
        return "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 dark:from-cyan-100 dark:to-cyan-200 dark:text-cyan-700";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 dark:from-gray-900/20 dark:to-gray-800/20 dark:text-gray-300";
    }
  };

  return (
    <section className="py-20 dark:bg-[#020817] border-t">
      <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12" id="blog">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Latest Blog
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert insights, health tips, and the latest trends in medicine and healthcare.
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
          {blogPosts.filter(post => !post.featured).map(post => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
          
           {/* View All Button */}
       
       <div className="flex justify-center items-center mt-6">
          <button className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
    <ArrowRight className="w-10 h-10" />
  </button>
       </div>
        </div>

       
      </div>
    </section>
  );
};

export default BlogSection;