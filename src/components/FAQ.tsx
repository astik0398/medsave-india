import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      question: "How do you collect the price data?",
      answer: "We use automated systems to collect price data from partner e-pharmacy websites frequently. Our technology ensures that prices are accurate and up-to-date. We also verify prices manually to maintain data quality."
    },
    {
      question: "Is MedSave India affiliated with the pharmacy platforms?",
      answer: "No, MedSave India is an independent platform. We are not owned by or affiliated with any of the e-pharmacy platforms we compare. This ensures unbiased price comparisons and recommendations."
    },
    {
      question: "Do you charge any fees for using the service?",
      answer: "No, MedSave India is completely free to use. We don't charge users any fees for price comparisons, coupon access, or any other features. Our revenue comes from affiliate partnerships with e-pharmacies."
    },
    {
      question: "Can I buy medicines directly through MedSave India?",
      answer: "No, we don't sell medicines directly. We redirect you to the respective e-pharmacy platforms where you can complete your purchase. This ensures you get the same customer service and guarantees from the original seller."
    },
    {
      question: "How accurate are the coupon codes?",
      answer: "We verify all coupon codes regularly and remove expired ones. However, some coupons might have usage limits or specific terms. We recommend checking the terms on the e-pharmacy website before applying any coupon."
    },
    {
      question: "How do you ensure the quality of partner pharmacies?",
      answer: "All our partner e-pharmacies are licensed by the appropriate authorities and follow strict quality standards. We only work with well-established platforms that have good customer reviews and reliable service records."
    },
    {
      question: "Can I track price history for any medicine?",
      answer: "Yes, we maintain price history data for medicines and provide charts showing price trends over time. This helps you identify the best times to buy and understand pricing patterns across different platforms."
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
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Get answers to common questions about MedSave India and how we help you save on medicines
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
          <div className="text-center mt-12 p-8 bg-card rounded-2xl shadow-soft">
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