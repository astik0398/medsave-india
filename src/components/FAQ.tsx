import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { useEffect } from "react";

const FAQ = () => {

  const faqData = [
  {
    question: "What is a medicine price tracker and how does it help in finding the cheapest medicine online?",
    answer: "A medicine price tracker monitors drug costs across platforms. MediBachat helps you find the cheapest medicine online by comparing real-time prices from top e-pharmacies in India, ensuring you buy medicine online in India at the lowest rates."
  },
  {
    question: "Is there a medicine price comparison app for India?",
    answer: "While MediBachat is a web-based platform, it functions like a medicine price comparison app for India, allowing you to compare medicine prices online from anywhere. Access our site on mobile for quick medicine price checks and to find the cheapest medicine online."
  },
  {
    question: "What are the best pharmacy online coupons available?",
    answer: "MediBachat curates verified pharmacy online coupons from e-pharmacies like 1mg, Netmeds, and Apollo. Use these offers to get the highest discount on medicines when you buy medicine online in India."
  },
   {
    question: "Can I buy medicines directly through MediBachat?",
    answer: "MediBachat doesn’t sell medicines directly. We connect you to verified online pharmacies, ensuring you get authentic products, full support, and timely delivery."
  },
  {
    question: "How to buy medicine online in India safely?",
    answer: "To safely buy medicine online in India, use MediBachat’s comparison tool to find verified pharmacies offering genuine products, valid prescriptions, and the highest discounts."
  },
  {
    question: "How can I find the highest discount on medicines?",
    answer: "MediBachat highlights the highest discount on medicines from trusted pharmacies like Apollo, Netmeds, and Truemeds. Check our comparison page to save more every time you shop."
  },
  {
    question: "Can I track medicine price history before I buy?",
    answer: "Yes, MediBachat’s price tracker shows past price trends from top pharmacies, helping you decide the best time to purchase and get the biggest savings."
  },

  {
    question: "Are your online pharmacy discounts always valid?",
    answer: "We frequently update our verified online pharmacy discounts and coupon codes. Availability may vary, so check details before applying."
  }
];

 // --- ✅ FAQ Structured Data (JSON-LD) for SEO ---
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Inject JSON-LD script for SEO
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
    <section id="faq" className="py-20 bg-[#F2F5F9] dark:bg-[#020817] border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 mr-2 text-primary dark:text-[#0A54B6]" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              FAQs on Medicine Price Comparison in India
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
            Explore answers about MediBachat’s medicine price tracker, compare medicine prices online, pharmacy coupons, and the highest medicine discounts from trusted Indian pharmacies like Netmeds, Apollo, and Truemeds.

          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Still have questions? */}
          <div className="text-center mt-12 p-8 bg-card rounded-2xl shadow-soft dark:shadow-strong">
            <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Please reach out to our customer support team.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground dark:text-white rounded-lg font-medium hover:shadow-medium transition-all duration-300 hover:scale-105"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;