import { Check, X, Search, Clock, Heart, Bell, Pill, Gift, HeadphonesIcon, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "month",
      badge: "Default",
      description: "First-time users",
      features: [
        { icon: Search, text: "30 searches per month", included: true },
        { icon: Sparkles, text: "Ad-Free Experience", included: false },
        { icon: Clock, text: "7-day price history", included: true },
        { icon: Clock, text: "Recently viewed (last 5)", included: true },
        { icon: Pill, text: "Basic salt alternatives", included: true },
        { icon: Heart, text: "No favorites", included: false },
        { icon: Bell, text: "No price drop alerts", included: false },
        { icon: Gift, text: "No coupon suggestions", included: false },
      ],
      cta: "Choose Plan",
      variant: "outline" as const,
      popular: false,
      color: "text-muted-foreground",
    },
    {
      name: "Saver",
      price: "₹39",
      period: "month",
      badge: "Light Buyers",
      description: "Light monthly medicine buyers",
      features: [
        { icon: Search, text: "300 searches per month", included: true },
        { icon: Sparkles, text: "Ad-Free Experience", included: true },
        { icon: Clock, text: "30-day price history", included: true },
        { icon: Heart, text: "Save up to 20 medicines", included: true },
        { icon: Bell, text: "Email price drop alerts", included: true },
        { icon: Pill, text: "Basic salt alternatives", included: true },
        { icon: Clock, text: "Recently viewed (20)", included: true },
        { icon: Gift, text: "Basic coupon suggestions", included: true },
        { icon: HeadphonesIcon, text: "Support within 48 hours", included: true },
      ],
      cta: "Choose Plan",
      variant: "hero" as const,
      popular: true,
      color: "text-primary",
    },
    {
      name: "Pro",
      price: "₹79",
      period: "month",
      badge: "Most Popular",
      description: "Regular users, chronic patients, families",
      features: [
        { icon: Search, text: "Unlimited searches", included: true },
        { icon: Sparkles, text: "Ad-Free Experience", included: true },
        { icon: Clock, text: "90-day price history", included: true },
        { icon: Heart, text: "Unlimited saved medicines", included: true },
        { icon: Bell, text: "WhatsApp price drop alerts", included: true },
        { icon: Pill, text: "Advanced salt alternatives", included: true },
        { icon: Gift, text: "Advanced coupon suggestions", included: true },
        { icon: Clock, text: "Unlimited recently viewed", included: true },
        { icon: HeadphonesIcon, text: "Priority support", included: true },
      ],
      cta: "Choose Plan",
      variant: "outline" as const,
      popular: false,
      color: "text-primary",
    },
  ];

  const faqData = [
    {
      question: "Can I use MediBachat for free?",
      answer: "Yes! Our Free plan gives you 30 searches per month with access to basic features like 7-day price history and salt alternatives. It's perfect for getting started with medicine price comparison, checking medicine prices online, and tracking price history.",
    },
    {
      question: "What happens if I reach my search limit?",
      answer: "If you reach your monthly search limit on the Free or Saver plan, you can either wait for the next month when your limit resets, or upgrade to a higher plan. The Pro plan offers unlimited searches so you never have to worry about limits.",
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to all the features. If you downgrade, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Why should I upgrade to a paid plan?",
      answer: "Our Saver and Pro plans unlock features for frequent buyers — unlimited searches, long-term price history, advanced coupon alerts, and an ad-free experience. These upgrades enhance your medicine price comparison experience and help you save more.",
    },
   {
  question: "How many medicine price checks can I do per day?",
  answer: "This depends on your plan:\n\n• Free plan: 30 searches/month\n• Saver: 300 searches/month\n• Pro: Unlimited searches\n\nYou can upgrade anytime if you compare prices frequently."
},

  ];

  const handleSelectPlan = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // Add your plan selection logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F5F9] dark:bg-[#020817]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
<section className="relative pt-12 md:pt-16 pb-20 md:pb-24 overflow-hidden">

          <div className="absolute inset-0" />
          <div className="container relative">
            <div className="text-center max-w-5xl mx-auto mb-12 md:mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                Pricing – Medicine Price Comparison & Unlock Premium Features
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                MediBachat helps you compare medicine prices across India’s top pharmacies 
  like Netmeds, Apollo, Tata 1mg, and Truemeds. Choose a plan that fits your 
  needs and unlock advanced features like price history, alerts, and 
  ad-free medicine price checking.

              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 max-w-7xl mx-auto mb-16">
              {plans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col animate-fade-in hover:shadow-lg transition-all duration-300 ${
                    plan.popular ? "border-primary shadow-md ring-2 ring-primary/20 scale-[1.02] md:scale-105" : "border-border"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                      {plan.badge}
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6 pt-8">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      plan.popular ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {plan.badge}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-2 font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className={`text-4xl md:text-5xl font-bold ${plan.color}`}>{plan.price}</span>
                      <span className="text-muted-foreground text-sm ml-2">/{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 px-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                            )}
                            <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                            <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground"}`}>
                              {feature.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button 
                      variant={plan.variant} 
                      className="w-full"
                      size="lg"
                      onClick={() => handleSelectPlan(plan.name)}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
           <div className="max-w-3xl mx-auto animate-fade-in">
  {/* Heading */}
  <div className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      <HelpCircle className="h-8 w-8 mr-2 text-primary dark:text-[#0A54B6]" />
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Frequently Asked Questions
      </h2>
    </div>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
      Want to compare medicine prices for free? Try
  <a href="/" className="text-primary"> MediBachat </a>now.

    </p>
  </div>

  {/* Card Wrapper */}
  <Card className="shadow-soft">
    <CardContent className="p-6">
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-lg px-4"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <h3 className="font-semibold text-foreground m-0">{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CardContent>
  </Card>
</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
