import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingDown, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-medicines.png";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Scroll to price comparison section
      document.getElementById('price-comparison')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-subtle flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Compare Medicine Prices
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Save Up to 70%
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Find the best prices for your medicines across India's top e-pharmacy platforms. 
                Compare prices, apply coupons, and save money on your healthcare needs.
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter medicine name (e.g., Paracetamol)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button type="submit" variant="hero" className="h-12 px-8">
                Compare Prices
              </Button>
            </form>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-glow rounded-lg">
                  <TrendingDown className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Best Prices</h3>
                  <p className="text-sm text-muted-foreground">Compare across platforms</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary-glow rounded-lg">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Verified Sources</h3>
                  <p className="text-sm text-muted-foreground">Trusted e-pharmacies</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-glow rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Real-time</h3>
                  <p className="text-sm text-muted-foreground">Updated prices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Medicine comparison illustration"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Background decorations */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-primary opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-secondary opacity-20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;