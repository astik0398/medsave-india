import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, Clock, AlertCircle, Download, Home } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";
import jsPDF from "jspdf";
import logo from "../assets/medi bachat dark mode (1).png";

interface PaymentDetails {
  orderId: string;
  amount: number;
  status: "SUCCESS" | "PENDING" | "FAILED";
  transactionId: string;
  timestamp: string;
  paymentMethod: string;
  planName: string;
  name: string;
}

interface OrderDetails {
  orderId: string;
  amount: number;
  status: string;
  created_at: string;
  payment_session_id: string;
  payment_method_display: string;
}

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const downloadReceipt = async () => {
    if (!paymentDetails) return;

    const doc = new jsPDF();

    // Add logo (top-left)
    try {
      doc.addImage(logo, "PNG", 15, 10, 40, 40);
    } catch (err) {
      console.log("Logo load failed:", err);
    }

    // Title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Payment Receipt", 105, 30, { align: "center" });

    // Draw a line under title
    doc.setLineWidth(0.2);
    doc.line(15, 38, 195, 38);

    let y = 45;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Utility function for clean key-value layout
    const addRow = (label: string, value: string) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, 20, y);

      doc.setFont("helvetica", "normal");

      const textLines = doc.splitTextToSize(value || "N/A", 120);
      doc.text(textLines, 70, y);

      y += textLines.length * 8;
    };

    addRow("Name:", paymentDetails.name);
    addRow("Order ID:", paymentDetails.orderId);
    addRow("Transaction ID:", paymentDetails.transactionId);
    addRow("Plan:", paymentDetails.planName);
    addRow("Amount Paid:", `₹${paymentDetails.amount}`);
    addRow("Payment Method:", paymentDetails.paymentMethod);
    addRow("Date & Time:", paymentDetails.timestamp);

    // Footer
    y += 15;
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your purchase!", 105, y, { align: "center" });

    doc.save(`Receipt_${paymentDetails.orderId}.pdf`);
  };

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        setLoading(true);

        // ⭐ Get orderId from URL params first
        let orderId = searchParams.get("orderId");
        const planName = searchParams.get("plan");
        const userId = searchParams.get("customer_id");
        const name = searchParams.get("name");

        // If not in URL, try localStorage
        if (!orderId) {
          orderId = localStorage.getItem("lastOrderId");
          console.log("📦 Order ID from localStorage:", orderId);
        } else {
          console.log("📦 Order ID from URL:", orderId);
        }

        if (!orderId) {
          throw new Error(
            "Order ID not found. Payment session may have expired."
          );
        }

        console.log("🔍 Verifying payment for orderId:", orderId);

        // Call backend to verify payment status
        const response = await fetch(
          "https://medicompare-production.up.railway.app/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderId,
              userId,
              planName,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to verify payment");
        }

        const data: OrderDetails = await response.json();
        console.log("✅ Payment verified:", data);

        // Map Cashfree status to our status
        const paymentStatus =
          data.status === "PAID"
            ? "SUCCESS"
            : data.status === "UNPAID"
            ? "PENDING"
            : "FAILED";

        // Set payment details based on response
        setPaymentDetails({
          orderId: data.orderId || orderId,
          amount: data.amount || 50,
          status: paymentStatus as "SUCCESS" | "PENDING" | "FAILED",
          transactionId: data.payment_session_id || "N/A",
          timestamp: data.created_at
            ? new Date(data.created_at).toLocaleString("en-IN")
            : new Date().toLocaleString("en-IN"),
          paymentMethod: data.payment_method_display,
          planName,
          name,
        });

        // Store order ID for reference
        localStorage.setItem("lastOrderId", orderId);
      } catch (err: any) {
        console.error("❌ Payment verification error:", err);
        setError(err.message || "Failed to verify payment");

        // Get orderId for display even on error
        const orderId =
          searchParams.get("orderId") ||
          localStorage.getItem("lastOrderId") ||
          "N/A";

        // Set pending status on error (payment might still be processing)
        setPaymentDetails({
          orderId,
          amount: 50,
          status: "PENDING",
          transactionId: searchParams.get("cf_payment_id") || "N/A",
          timestamp: new Date().toLocaleString("en-IN"),
          paymentMethod: "Unknown",
          planName: searchParams.get("plan"),
          name: searchParams.get("name"),
        });
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mb-4"></div>
          <p className="text-gray-300 font-medium">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  const isSuccess = paymentDetails?.status === "SUCCESS";
  const isPending = paymentDetails?.status === "PENDING";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F2F5F9] dark:bg-[#020817] py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Status Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Header with Status Icon */}
            <div
              className={`py-8 px-6 text-center ${
                isSuccess
                  ? "bg-green-500 dark:bg-green-500/20"
                  : isPending
                  ? "bg-amber-500 dark:bg-amber-500/20"
                  : "bg-red-500 dark:bg-red-500/20"
              }`}
            >
              {isSuccess && (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <CheckCircle className="w-20 h-20 text-green-400 animate-pulse" />
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    Payment Successful! 🎉
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Your transaction has been completed successfully
                  </p>
                </>
              )}

              {isPending && (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Clock
                        className="w-20 h-20 text-amber-400 animate-spin"
                        style={{ animationDuration: "2s" }}
                      />
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    Payment Pending
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Your payment is being processed. Please wait...
                  </p>
                </>
              )}

              {!isSuccess && !isPending && (
                <>
                  <div className="flex justify-center mb-4">
                    <AlertCircle className="w-20 h-20 text-red-400" />
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    Payment Failed
                  </h1>
                  <p className="text-gray-300 text-lg">
                    {error || "Something went wrong"}
                  </p>
                </>
              )}
            </div>

            {/* Payment Details */}
            {paymentDetails && (
              <div className="px-6 py-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Name */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      Name
                    </p>
                    <p className="text-white text-lg font-semibold break-all">
                      {paymentDetails.name}
                    </p>
                  </div>

                  {/* Order ID */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      Order ID
                    </p>
                    <p className="text-white text-lg font-semibold break-all">
                      {paymentDetails.orderId}
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      Amount Paid
                    </p>
                    <p className="text-green-400 text-lg font-semibold">
                      ₹{paymentDetails.amount}
                    </p>
                  </div>

                  {/* Plan */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      Plan Name
                    </p>
                    <p className="text-green-400 text-lg font-semibold">
                      {paymentDetails.planName}
                    </p>
                  </div>

                  {/* Transaction ID */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 col-span-2">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      Transaction ID
                    </p>
                    <p className="text-white text-sm font-mono break-all">
                      {paymentDetails.transactionId}
                    </p>
                  </div>

                  {/* Timestamp */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      Date & Time
                    </p>
                    <p className="text-white text-sm">
                      {paymentDetails.timestamp}
                    </p>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      Payment Method
                    </p>
                    <p className="text-white text-sm">
                      {paymentDetails.paymentMethod}
                    </p>
                  </div>
                </div>

                {/* Status Message */}
                {isSuccess && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-300 text-sm">
                      ✅ Your payment has been successfully processed. You now
                      have full access to premium features.
                    </p>
                  </div>
                )}

                {isPending && (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <p className="text-amber-300 text-sm">
                      ⏳ Your payment is being verified. This usually takes a
                      few moments. We'll notify you once it's confirmed.
                    </p>
                  </div>
                )}

                {!isSuccess && !isPending && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-300 text-sm">
                      ❌{" "}
                      {error ||
                        "Your payment could not be processed. Please try again or contact support."}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="px-6 py-6 border-t border-white/10 bg-white/5 flex gap-4 flex-wrap">
              {isSuccess && (
                <>
                  <button
                    onClick={downloadReceipt}
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    <Download className="w-5 h-5" />
                    Download Receipt
                  </button>

                  <button
                    onClick={() => navigate("/")}
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    <Home className="w-5 h-5" />
                    Go to Dashboard
                  </button>
                </>
              )}

              {isPending && (
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02]"
                >
                  Refresh Status
                </button>
              )}

              {!isSuccess && !isPending && (
                <>
                  <button
                    onClick={() => navigate("/payment")}
                    className="flex-1 min-w-[200px] bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => navigate("/contact-support")}
                    className="flex-1 min-w-[200px] bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    Contact Support
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>If you have any questions, please contact us at our mail</p>
            <p className="mt-2 text-gray-500">
              Support: medibachatforyou@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccess;
