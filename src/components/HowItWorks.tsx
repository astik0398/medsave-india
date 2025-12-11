import { Card, CardContent } from "@/components/ui/card";
import { Search, BarChart3, Tag, Wallet } from "lucide-react";
import { useEffect } from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Search Medicine",
      description: "Enter the name of your branded or generic medicine in our search bar to find the best prices.",
      color: "text-primary"
    },
    {
      step: 2,
      icon: BarChart3,
      title: "Compare Prices",
      description: "View real-time drug prices for medicines from multiple trusted online pharmacies in India.",
      color: "text-secondary dark:text-primary"
    },
    {
      step: 3,
      icon: Tag,
      title: "Apply Coupons",
      description: "Get exclusive online medicine discount coupons and promotional offers to maximize your savings.",
      color: "text-accent dark:text-primary"
    },
    {
      step: 4,
      icon: Wallet,
      title: "Save Money",
      description: "Purchase from the platform with the best deal and enjoy significant savings on your healthcare.",
      color: "text-secondary dark:text-primary"
    }
  ];

  const schemaData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How MediBachat Medicine Price Tracker Works",
  "description": "Learn how to search, compare, apply coupons, and save money on medicines online in India using MediBachat.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Search Medicine",
      "text": "Enter the name of your branded or generic medicine in the MediBachat search bar to find the best prices."
    },
    {
      "@type": "HowToStep",
      "name": "Compare Prices",
      "text": "View real-time price comparison for medicines from multiple trusted online pharmacies in India."
    },
    {
      "@type": "HowToStep",
      "name": "Apply Coupons",
      "text": "Use exclusive medicine discount coupons and offers to maximize your savings."
    },
    {
      "@type": "HowToStep",
      "name": "Save Money",
      "text": "Purchase from the pharmacy with the best deal and enjoy significant savings on your medicines."
    }
  ]
};

useEffect(() => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
}, []);

  return (
    <section className="py-10 bg-background mb-10 border-t ">
      <h1 className="sr-only">How MediBachat Works — Medicine Price Comparison Tool in India</h1>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How MediBachat Medicine Price Tracker Works?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Track <a style={{color:'blue'}} href="#">medicine prices online</a>, compare medicine prices, and get the highest discounts on medicines in India in just 4 simple steps.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-4 gap-10 relative">
              {/* Connection Lines */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-[#005CD4] to-[#11B77F] opacity-40"></div>
              
              {steps.map((step, index) => (
                <article key={index} className="relative">
                  <Card className="text-center  shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      {/* Step Number */}
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                        <span className="text-2xl font-bold text-primary-foreground dark:text-white">{step.step}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className={`inline-flex p-4 bg-muted rounded-2xl mb-4 ${step.color}`}>
                        <step.icon className="h-8 w-8" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </article >
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div></div>
                )}
                
                <Card className="shadow-soft border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Step Number & Icon */}
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                          <span className="text-lg font-bold text-primary-foreground">{step.step}</span>
                        </div>
                        <div className={`p-3 bg-muted rounded-xl ${step.color}`}>
                          <step.icon className="h-6 w-6" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="border-primary/20 text-center p-6 bg-[#B8D4F9] dark:bg-[#020817] dark:border dark:border-grey-900 rounded-2xl">
            <h4 className="font-semibold text-primary mb-2">100% Verified</h4>
            <p className="text-sm text-muted-foreground">All partner pharmacies are licensed and verified</p>
          </div>
          
          <div className="border-primary/20 text-center p-6 bg-[#C2F0E0] dark:bg-[#020817] dark:border dark:border-grey-900 rounded-2xl">
            <h4 className="font-semibold text-secondary dark:text-primary mb-2">Real-time Prices</h4>
            <p className="text-sm text-muted-foreground">Prices updated every hour for accuracy</p>
          </div>
          
          <div className="border-primary/20 text-center p-6 bg-[#B8D4F9] dark:bg-[#020817] dark:border dark:border-grey-900 rounded-2xl">
            <h4 className="font-semibold text-primary mb-2">Free to Use</h4>
            <p className="text-sm text-muted-foreground">No hidden charges or subscription fees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;