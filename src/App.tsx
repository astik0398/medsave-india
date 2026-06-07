import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import LoginModal from "@/components/LoginModal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import ScrollHandler from "./components/ui/ScrollHandler";
import Disclaimer from "./pages/Disclaimer";
import ResetPasswordPage from "./components/ResetPasswordPage";
import Pricing from "./components/Pricing";
import AllBookmarks from "./components/AllBookmarks"
import RefundAndCancel from "./pages/RefundAndCancel";
import PaymentSuccess from "./components/PaymentSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <LoginModal />
          <BrowserRouter>
            <ScrollHandler />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/about-medibachat" element={<AboutUs />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/refund-and-cancellation" element={<RefundAndCancel/>}/>
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/all-bookmarks" element={<AllBookmarks/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
