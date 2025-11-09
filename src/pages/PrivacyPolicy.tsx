import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <section className="py-10 bg-background text-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> November 9, 2025
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-[1.05rem]">
            <p>
              This Privacy Policy describes our policies and procedures on the
              collection, use, and disclosure of your information when you use
              our service and tells you about your privacy rights and how the
              law protects you.
            </p>

            <p>
              We use your personal data to provide and improve the service. By
              using the service, you agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy was created with the help of the{" "}
              <a
                href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Free Privacy Policy Generator
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              Interpretation and Definitions
            </h2>

            <h3 className="text-lg font-semibold text-foreground">
              Interpretation
            </h3>
            <p>
              The words with initial capital letters have meanings defined under
              the following conditions. These definitions shall have the same
              meaning whether they appear in singular or plural.
            </p>

            <h3 className="text-lg font-semibold text-foreground">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account</strong> means a unique account created for you
                to access our service or parts of our service.
              </li>
              <li>
                <strong>Company</strong> refers to MediBachat.
              </li>
              <li>
                <strong>Cookies</strong> are small files placed on your device
                by a website, containing details of your browsing history and
                preferences.
              </li>
              <li>
                <strong>Personal Data</strong> means any information relating to
                an identified or identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the website,{" "}
                <a
                  href="https://medibachat.in/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://medibachat.in/
                </a>
                .
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company or legal entity on behalf of which such
                individual is using the Service.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              Collecting and Using Your Personal Data
            </h2>

            <h3 className="text-lg font-semibold text-foreground">
              Types of Data Collected
            </h3>

            <p>
              While using our Service, we may ask you to provide certain
              personally identifiable information such as your name, email
              address, and usage data.
            </p>

            <h4 className="text-lg font-semibold text-foreground">
              Usage Data
            </h4>
            <p>
              Usage data is collected automatically and may include your IP
              address, browser type, browser version, the pages you visit, and
              the time spent on those pages.
            </p>

            <h4 className="text-lg font-semibold text-foreground">
              Tracking Technologies and Cookies
            </h4>
            <p>
              We use cookies and similar technologies to track activity on our
              service and store information. You can instruct your browser to
              refuse all cookies or indicate when a cookie is being sent.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Use of Your Personal Data
            </h3>
            <p>
              We may use your personal data to provide and maintain our service,
              manage your account, contact you, and improve our offerings. We
              may also use the data for business transfers, analytics, and
              compliance with legal obligations.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Data Retention and Deletion
            </h3>
            <p>
              We retain your personal data only as long as necessary to fulfill
              the purposes outlined in this Privacy Policy. You may request
              deletion of your personal data by contacting us.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Security of Your Personal Data
            </h3>
            <p>
              We use commercially acceptable means to protect your personal
              data. However, please remember that no method of transmission over
              the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              Children's Privacy
            </h2>
            <p>
              Our service does not address anyone under the age of 13. We do not
              knowingly collect personal data from children. If you believe your
              child has provided us with personal data, please contact us for
              removal.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. You are
              advised to review this page periodically for any changes. Updates
              take effect when posted here.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:medibachatforyou@gmail.com"
                  className="text-primary hover:underline"
                >
                  medibachatforyou@gmail.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://medibachat.in/#contact"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://medibachat.in/#contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
