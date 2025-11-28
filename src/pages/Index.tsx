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

const Index = () => {
  return (
    <div className="min-h-screen">
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
      <DownloadApp />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
