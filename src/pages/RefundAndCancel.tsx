import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundAndCancel: React.FC = () => {
  return (
    <>
      <Header />
      <section className="py-10 bg-background text-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Cancellation & Refund Policy
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Last Updated: November 29, 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-[1.05rem]">

            <p>
              MediBachat believes in helping its customers as far as possible and therefore follows a liberal cancellation policy. Below are the guidelines of our Cancellation & Refund process:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have already been communicated to the vendors/merchants and they have initiated the shipping process.
              </li>

              <li>
                MediBachat does not accept cancellation requests for perishable items such as flowers, eatables, etc. However, refund or replacement may be provided if the customer establishes that the delivered product quality was not satisfactory.
              </li>

              <li>
                If you receive damaged or defective items, please report the issue to our Customer Service team on the same day of delivery. The request will be processed after the merchant verifies the condition of the product.
              </li>

              <li>
                If you feel the delivered product does not match what was shown on the website or does not meet your expectations, notify our Customer Service team on the same day of receiving the product. The team will review your complaint and take the appropriate action.
              </li>

              <li>
                For products that come with a manufacturer warranty, kindly contact the manufacturer directly for any issues related to the warranty.
              </li>

              <li>
                In case a refund is approved by MediBachat, it will take <strong className="text-foreground">1–2 business days</strong> for the amount to be processed and credited back to the customer.
              </li>
            </ul>

            <p className="font-semibold text-foreground">
              We are committed to ensuring a smooth and transparent experience for all our users.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RefundAndCancel;
