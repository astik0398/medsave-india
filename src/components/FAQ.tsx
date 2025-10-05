import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {

  const faqData = [
  {
    question: "What is a medicine price tracker and how does it help in finding the cheapest medicine online?",
    answer: "A medicine price tracker monitors fluctuations in drug costs across various platforms. At MediBachat, our medicine price tracker helps you find the cheapest medicine online by comparing real-time prices from top e-pharmacies in India, ensuring you buy medicine online in India at the lowest rates."
  },
  {
    question: "Is there a medicine price comparison app for India?",
    answer: "While MediBachat is a web-based platform, it functions like a medicine price comparison app for India, allowing you to compare medicine prices online from anywhere. Access our site on mobile for quick medicine price checks and to find the cheapest medicine online."
  },
  {
    question: "What are the best pharmacy online coupons available?",
    answer: "MediBachat curates the best pharmacy online coupons from top e-pharmacies. Look for codes like 1mglabs coupon codes or those offering the highest discount on medicines, and apply them when you buy medicine online in India."
  },
  {
    question: "Can I buy medicines directly through MedSave India?",
    answer: "We don’t sell medicines directly. Instead, we connect you to verified e-pharmacies where you can complete your purchase. This ensures you still get the full benefits, customer service, and delivery from the original seller."
  },
  {
    question: "How to buy medicine online in India safely?",
    answer: "To buy medicine online in India safely, use MediBachat to compare medicine prices online and select licensed pharmacies. We ensure partners offer valid medicine discounts and reliable service, helping you get the highest discount on medicines without compromising quality."
  },
     {
      question: "How can I find the highest discount on medicines?",
      answer: "To find the highest discount on medicines, use MediBachat's comparison tools that scan deals from pharmacies like Apollo Pharmacy and Netmeds. We highlight the highest discount on medicines available, along with exclusive pharmacy online coupons to maximize your savings."
    },
  {
    question: "Can I track medicine price history before I buy?",
    answer: "Yes, you can view the price history for medicines across different e-pharmacies. Our charts help you find the best time to buy and make sure you’re getting the best online medicine deals in India."
  },

   {
    question: "Are your online pharmacy discounts always valid?",
    answer: "We regularly check and update our online pharmacy discounts and coupons to ensure they work. However, some may have usage limits or be available only for specific medicines, so always check the terms before applying them."
  }
];

  return (
    <section id="faq" className="py-20 bg-[#F2F5F9] dark:bg-[#020817] border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 mr-2 text-primary dark:text-[#0A54B6]" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions on Medicine Price Comparison
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
            Find about medicine price comparison, medicine price tracker in India, comparing medicine prices online, highest discount on medicines, pharmacy online coupons, and more from top e-pharmacies like Netmeds, Truemeds, and Apollo.
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