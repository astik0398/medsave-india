import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FlashDeals from "@/components/FlashDeals";
import PriceComparison from "@/components/PriceComparison";
import CouponsSection from "@/components/CouponsSection";
import PriceHistory from "@/components/PriceHistory";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FlashDeals />
      <PriceComparison />
      <CouponsSection />
      <PriceHistory />
      <HowItWorks />
      <FAQ />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
