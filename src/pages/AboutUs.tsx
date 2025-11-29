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
              About MediBachat — India’s Medicine Price Tracker Website
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Last Updated: November 9, 2025
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-[1.05rem]">
            <p>
              <strong className="text-foreground">MediBachat</strong> is India’s
              leading <strong>medicine price comparison platform</strong>,
              designed to help users find, compare, and save on medicines from
              trusted online pharmacies like Tata 1mg, Netmeds, and PharmEasy.
              Our mission is simple — to make healthcare more affordable and
              transparent for every Indian household.
            </p>

            <p>
              Founded with the belief that price transparency can transform
              healthcare, MediBachat curates real-time medicine price data from
              multiple sources. We analyze and display accurate comparisons so
              users can make informed choices — saving both time and money on
              every purchase.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6">
              What We Offer
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Real-time price tracking</strong> for branded and
                generic medicines across top Indian pharmacies.
              </li>
              <li>
                <strong>Coupon and offer aggregation</strong> to help you unlock
                the biggest discounts instantly.
              </li>
              <li>
                <strong>Price history and trends</strong> (coming soon) so you
                can decide the best time to buy.
              </li>
              <li>
                <strong>Reliable, verified data</strong> collected ethically from
                official sources.
              </li>
            </ul>

            <p>
              We take pride in offering a clean, user-friendly experience backed
              by technology. Our team works continuously to improve data
              accuracy, add new features, and make MediBachat the most trusted
              name in medicine price comparison.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6">
              Why Choose MediBachat?
            </h2>
            <p>
              Unlike other health blogs or directories, MediBachat focuses
              exclusively on <strong>medicine price comparison</strong>. We are
              not affiliated with any single pharmacy, ensuring complete
              neutrality in the prices we display. Our goal is to empower you
              with transparent, unbiased data so you can choose what’s best for
              your health and wallet.
            </p>

            <p>
              We are a small but dedicated team passionate about the
              intersection of healthcare and technology. Every day, we work to
              build tools that make online medicine shopping smarter and more
              affordable for millions of Indians.
            </p>

            <p>
              For transparency, this About Page was refined with assistance from
              AI tools and edited manually to reflect our real mission and
              values.
            </p>

            <p>
              <strong>Official Website:</strong>{" "}
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
              <strong>Contact Email:</strong>{" "}
              <a
                href="mailto:medibachatforyou@gmail.com"
                className="text-primary hover:underline"
              >
                medibachatforyou@gmail.com
              </a>
            </p>

             <p>
                            <strong>Founder & Operator:</strong>{" "}
              <a
                className="text-primary hover:underline"
              >
                 KUMAR ASTIK
              </a>
            </p>

            <p className="font-semibold text-foreground">
              Thank you for trusting MediBachat — where transparency meets
              savings in healthcare.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
