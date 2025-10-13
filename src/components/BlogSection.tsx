import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import online_medicine_buying from "@/assets/online medicine buying.png"
import online_coupon_discount from "@/assets/online medicine coupon discount (433 x 192 px).png"

const BlogSection = () => {
  const blogPosts = [
    {
      id: "7-online-medicine-shopping-hacks-to-reduce-bills",
      title: "Top 7 Online Medicine Shopping Hacks to Reduce Your Medicine Prices",
      excerpt: "Discover effective strategies to reduce your medical expenses without compromising on quality healthcare.",
      author: "Team Medibachat",
      date: "August 11, 2025",
      readTime: "8 min read",
      category: "Health Tips",
      image: online_medicine_buying,
      featured: true
    },
    {
      id: "online-medicine-discount-coupons-in-india",
      title: "Pharmacy Discount Coupons in India",
      excerpt: "Discover the best pharmacy discount coupons in India for 2025 and learn how MediBachat helps you find it.",
      author: "Team MediBachat",
      date: "August 12, 2025",
      readTime: "4 min read",
      category: "Education",
      image: online_coupon_discount
    },
    {
      id: "compare-medicine-prices-online-india",
      title: "How to Compare Medicine Prices Online in India?",
      excerpt: "Compare medicine prices online in India instantly and find the cheapest medicine from Tata 1mg, Netmeds, PharmEasy.",
      author: "Team MediBachat",
      date: "August 15, 2025",
      readTime: "6 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: "why-the-same-medicine-costs-different-on-every-app",
      title: "Why the Same Medicine Costs Different?",
      excerpt: "Ever wondered why the same medicine is priced differently on Tata 1mg, Netmeds, PharmEasy, and Apollo Pharmacy?",
      author: "Team MediBachat",
      date: "August 16, 2025",
      readTime: "8 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: "ai-in-online-medicine-shopping-india",
      title: "AI Changing Online Medicine Shopping in India",
      excerpt: "Discover how AI is revolutionizing online pharmacies in India with price comparison and smarter ways to buy medicine.",
      author: "Team MediBachat",
      date: "September 05, 2025",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "global-vs-indian-online-pharmacies",
      title: "Global vs Indian Online Pharmacies",
      excerpt: "Discover how online pharmacies in India differ from global players in affordability, speed, and innovation.",
      author: "Team MediBachat ",
      date: "September 06, 2025",
      readTime: "8 min read",
      category: "Health Tips",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


      {
      id: "gst-2-impact-online-pharmacy-prices-india",
      title: "How GST 2.0 Will Impact Online Pharmacy Prices in India?",
      excerpt: "Discover how GST 2.0 changes medicine prices in India. Learn its impact on online pharmacies and healthcare affordability",
      author: "Team MediBachat ",
      date: "September 13, 2025",
      readTime: "9 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1710922962986-a9e8de6dbb68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


     {
      id: "gst-2-health-insurance-premiums-india",
      title: "Will GST 2.0 Make Health Insurance Premiums More Expensive in India?",
      excerpt: "Explore how GST 2.0 impacts health insurance premiums in India. Learn if policyholders will face higher costs and what it means for affordable coverage.",
      author: "Team MediBachat ",
      date: "September 13, 2025",
      readTime: "14 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1707999558198-d5f93aafa75b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


         {
      id: "telemedicine-india-online-consultations",
      title: "Telemedicine in India: How Online Consultations Save Time and Money?",
      excerpt: "Discover how telemedicine in India makes healthcare affordable and accessible. Learn how online consultations save both time and money for patients.",
      author: "Team MediBachat ",
      date: "September 14, 2025",
      readTime: "10 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1675270855267-3c73bfd13849?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


         {
      id: "top-online-doctor-consultation-apps-india-2025",
      title: "Top 10 Online Doctor Consultation Apps in India (2025 Guide)",
      excerpt: "Discover the top 10 online doctor consultation apps in India (2025). Compare Practo, Apollo 24/7, Tata 1mg, PharmEasy, Mfine & more for affordable, instant healthcare.",
      author: "Team MediBachat ",
      date: "October 02, 2025",
      readTime: "4 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1758691461932-d0aa0ebf6b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMGRvY3RvcnxlbnwwfHwwfHx8Mg%3D%3D"
    },

           {
      id: "first-time-online-doctor-consultation-guide-2025",
      title: "First-Time User Guide: What to Expect in Your First Online Doctor Consultation?",
      excerpt: "Nervous about your first online doctor consultation? This 2025 guide walks you through what to expect, how to prepare, costs, and tips for a smooth telemedicine experience.",
      author: "Team MediBachat ",
      date: "October 02, 2025",
      readTime: "12 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

             {
      id: "drone-delivery-of-medicines-india-2030",
      title: "Will Drone Delivery of Medicines Become a Reality in India by 2030?",
      excerpt: "Explore if drone delivery of medicines will become a reality in India by 2030. Learn about regulations, benefits, challenges, and the future of e-pharmacy logistics.",
      author: "Team MediBachat ",
      date: "October 02, 2025",
      readTime: "7 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1630428312167-4693ac0189fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmUlMjBkZWxpdmVyeXxlbnwwfHwwfHx8Mg%3D%3D"
    },

               {
      id: "gamification-in-healthcare-apps-reward-healthy-lifestyle",
      title: "Gamification in Healthcare: Apps That Reward You for Staying Healthy",
      excerpt: "Discover how gamification in healthcare apps motivates you to stay fit. Explore top apps in India that reward healthy habits with points, perks & savings",
      author: "Team MediBachat ",
      date: "October 03, 2025",
      readTime: "9 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1661160094555-a798a7df499f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwc3xlbnwwfHwwfHx8Mg%3D%3D"
    },

                   {
      id: "decoding-medicine-labels-mrp-batch-expiry",
      title: "Decoding Medicine Labels: What Do MRP, Batch Number, and Expiry Really Mean",
      excerpt: "Confused by medicine labels? Learn what MRP, batch number, expiry date, and other details really mean so you can buy medicines safely and smartly.",
      author: "Team MediBachat ",
      date: "October 03, 2025",
      readTime: "11 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDI%3D"
    },


                       {
      id: "online-pharmacies-health-insurance-guide",
      title: "Do Online Pharmacies Accept Health Insurance? A Complete Guide",
      excerpt: "Wondering if online pharmacies in India accept health insurance? This complete guide explains coverage, rules, and how to save money on digital healthcare.",
      author: "Team MediBachat ",
      date: "October 04, 2025",
      readTime: "11 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoJTIwaW5zdXJhbmNlLnxlbnwwfHwwfHx8Mg%3D%3D"
    },

                           {
      id: "why-do-medicine-prices-differ-between-online-and-offline-pharmacies",
      title: "Why Do Medicine Prices Differ Between Online and Offline Pharmacies?",
      excerpt: "Wondering why medicines cost less online than at local chemists? Discover key factors like discounts, margins, and regulations behind the price gap.",
      author: "Team MediBachat ",
      date: "October 04, 2025",
      readTime: "8 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHwy"
    },


                               {
      id: "does-homeopathy-really-work-or-placebo",
      title: "Does Homeopathy Really Work or Is It Just a Placebo?",
      excerpt: "Is homeopathy effective or just a placebo? Explore scientific evidence, myths, and real-world experiences to understand the truth behind homeopathic medicine.",
      author: "Team MediBachat ",
      date: "October 04, 2025",
      readTime: "12 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1725267882596-2d08e560b250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZW9wYXRoeXxlbnwwfHwwfHx8Mg%3D%3D"
    },

                             {
      id: "best-cough-medicine-india-price-comparison-guide",
      title: "Best Cough Medicine in India: Price Comparison & Effectiveness Guide 2025",
      excerpt: "Discover India’s top cough syrups—compare prices (₹66–₹159/100ml), ingredients, and effectiveness for dry, wet, and chronic coughs. Find budget and premium picks, plus safety tips.",
      author: "Team MediBachat ",
      date: "October 13, 2025",
      readTime: "07 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1635166304271-04931640a450?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291Z2glMjBzeXJ1cHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=600"
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
          
           {/* View All Button with Modal */}
       
       <div className="flex justify-center items-center mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-10 h-10" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">All Blog Posts</DialogTitle>
                <DialogDescription>
                  Explore all our latest articles and insights about healthcare and medicine.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {blogPosts.map(post => (
                  <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="mb-3 line-clamp-2 text-sm">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="w-full group/btn">
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
       </div>
        </div>

       
      </div>
    </section>
  );
};

export default BlogSection;