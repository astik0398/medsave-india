import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PriceComparison from "@/components/PriceComparison";
import CouponsSection from "@/components/CouponsSection";
import PriceHistory from "@/components/PriceHistory";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FlashDeals from "@/components/FlashDeals";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import DownloadApp from "@/components/DownloadApp";
import RefillReminderSection from "@/components/RefillReminderSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Medicine Price Comparison Online in India | Compare Drug Prices, Coupons & Deals - MediBachat"
        description="Compare medicine prices across Tata 1mg, Netmeds, PharmEasy, Apollo Pharmacy & Truemeds. Find verified coupons & save up to 70% on medicines in India."
        path="/"
        keywords="medicine price comparison, compare drug prices, online medicine discount, cheapest medicine online, buy medicine online India, medicine coupons"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "MediBachat",
          url: "https://medibachat.in/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://medibachat.in/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Header />
      <Hero />
      <PriceComparison />
      <FlashDeals />
      <CouponsSection />
      <Testimonials/>
      <PriceHistory />
      <HowItWorks />
      <BlogSection />
      <FAQ />
      {/* <DownloadApp /> */}
      <RefillReminderSection/>
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
