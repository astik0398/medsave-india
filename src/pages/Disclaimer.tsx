import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import SEO from "@/components/SEO";

const Disclaimer: React.FC = () => {
  return (
    <div>
        <SEO
          title="Disclaimer | MediBachat"
          description="MediBachat displays medicine prices from multiple online pharmacies for informational purposes. Read our full disclaimer here."
          path="/disclaimer"
        />
        <Header/>

        <section className="py-10 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Disclaimer
          </h1>
          <p className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong> November 9, 2025
          </p>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-[1.05rem]">
          <p>
            MediBachat displays medicine prices sourced from multiple online
            platforms. The prices shown on our website are approximate and
            intended for informational purposes only. We do not guarantee that
            the price displayed on MediBachat will exactly match the price you
            see on the respective e-pharmacy’s official website. For the most
            accurate and updated prices, please visit the official website of
            the respective pharmacy. Discounts and savings may vary depending on
            the platform. All pharmacy names, brands, and trademarks are the
            property of their respective owners.
          </p>

          <p>
            The information provided on MediBachat is for general informational
            and educational purposes only. It should{" "}
            <strong>not</strong> be considered as medical advice, diagnosis, or
            treatment recommendation. MediBachat does not endorse, recommend, or
            promote any particular medicine, brand, or pharmacy listed on the
            site. We do not provide any warranties regarding the accuracy,
            reliability, or completeness of the information displayed.
          </p>

          <p>
            Before starting, changing, or stopping any medication, please
            consult a qualified healthcare professional. Users are solely
            responsible for verifying all information and making payments
            directly through the respective e-pharmacy at the time of purchase.
          </p>

          <p>
            For any queries or concerns, you may contact us at{" "}
            <a
              href="mailto:medibachatforyou@gmail.com"
              className="text-primary hover:underline"
            >
              medibachatforyou@gmail.com
            </a>
            . By using MediBachat, you agree to our{" "}
            <a
            target="_blank"
              href="/terms-of-service"
              className="text-primary hover:underline"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
            target="_blank"
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>

          <p className="italic border-l-4 border-primary pl-4 text-foreground dark:text-muted-foreground">
            While buying medicines online can be convenient and cost-effective,
            please ensure you purchase only from verified and licensed
            pharmacies to avoid potential health risks.
          </p>
        </div>
      </div>
    </section>

    <Footer/>
    </div>
  );
};

export default Disclaimer;
