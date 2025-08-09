import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {

  const faqData = [
  {
    question: "How do you collect the online medicine price comparison data?",
    answer: "We collect online medicine price comparison data from multiple trusted e-pharmacy platforms in India. Our automated systems track prices in real time, and we manually verify them to ensure you always see the most accurate and updated rates before buying medicines online."
  },
  {
    question: "Is MedSave India affiliated with the best e-pharmacies in India?",
    answer: "No, MedSave India is completely independent. We are not owned by any pharmacy platform, ensuring unbiased comparisons. This way, when you search for the best e-pharmacy in India, you can trust our results are purely based on price, discounts, and reliability."
  },
  {
    question: "Do you offer discount coupons for medicines?",
    answer: "Yes, we regularly update and verify exclusive discount coupons for medicines from India's top online pharmacies. You can apply these e-pharmacy promo codes at checkout to save more on your orders."
  },
  {
    question: "Can I buy medicines directly through MedSave India?",
    answer: "We don’t sell medicines directly. Instead, we connect you to verified e-pharmacies where you can complete your purchase. This ensures you still get the full benefits, customer service, and delivery from the original seller."
  },
  {
    question: "Are your online pharmacy discounts always valid?",
    answer: "We regularly check and update our online pharmacy discounts and coupons to ensure they work. However, some may have usage limits or be available only for specific medicines, so always check the terms before applying them."
  },
     {
      question: "How do you ensure the quality of partner pharmacies?",
      answer: "All our partner e-pharmacies are licensed by the appropriate authorities and follow strict quality standards. We only work with well-established platforms that have good customer reviews and reliable service records."
    },
  {
    question: "Can I track medicine price history before I buy?",
    answer: "Yes, you can view the price history for medicines across different e-pharmacies. Our charts help you find the best time to buy and make sure you’re getting the best online medicine deals in India."
  }
];

  return (
    <section id="faq" className="py-20 bg-[#F2F5F9] dark:bg-[#020817] border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 mr-2 text-primary dark:text-[#0A54B6]" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers about online medicine price comparison, best e-pharmacies in India, and exclusive pharmacy discount coupons
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
                      <span className="font-semibold text-foreground">{faq.question}</span>
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