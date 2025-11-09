import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <section className="py-10 bg-background text-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              About Us
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Last Updated: November 9, 2025
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-[1.05rem]">
            <p>
              Hello! <strong className="text-foreground">MediBachat</strong> is
              a professional platform where we provide informative, accurate,
              and reliable content focused on{" "}
              <strong className="text-foreground">
                online medicine price comparison
              </strong>
              . Our goal is to make healthcare more affordable and accessible
              for everyone in India by helping users compare medicine prices
              across multiple trusted online pharmacies.
            </p>

            <p>
              At MediBachat, we are driven by our passion for technology and
              healthcare innovation. Our mission is to empower users with
              transparent price data, enabling smarter purchase decisions and
              maximum savings on medicines. We curate, compare, and display the
              latest price information from verified pharmacies to ensure users
              always get the best possible deals.
            </p>

            <p>
              We are constantly improving our platform to enhance your
              experience, offering real-time comparisons, exclusive discounts,
              and detailed insights into drug prices and availability.
            </p>

            <p>
              You can always count on{" "}
              <strong className="text-foreground">MediBachat</strong> to bring
              you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Transparent and updated medicine price comparisons from verified
                Indian pharmacies.
              </li>
              <li>
                Exclusive online coupons and promotional offers to maximize your
                savings.
              </li>
              <li>
                Reliable, easy-to-use interface with accurate data for a smooth
                experience.
              </li>
            </ul>

            <p>
              Our team is dedicated to providing trustworthy information and
              simplifying the medicine-buying experience. Your support motivates
              us to continue improving every day.
            </p>

            <p>
              The About Us page is inspired and adapted with the help of the{" "}
              <a
                href="https://originality.ai/blog/about-us-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                About Us Generator
              </a>
              .
            </p>

            <p>
              We hope you find all the content on{" "}
              <strong className="text-foreground">MediBachat</strong> valuable
              and insightful. Our mission is to make healthcare savings simple,
              transparent, and accessible for every Indian household.
            </p>

            <p>
              <strong>Visit us at:</strong>{" "}
              <a
                href="https://medibachat.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://medibachat.in/
              </a>
            </p>

            <p>
              <strong>For any inquiries or feedback, contact us via email:</strong>{" "}
              <a
                href="mailto:medibachatforyou@gmail.com"
                className="text-primary hover:underline"
              >
                medibachatforyou@gmail.com
              </a>
            </p>

            <p className="font-semibold text-foreground">
              Thank you for visiting MediBachat — your trusted medicine price
              comparison partner!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
