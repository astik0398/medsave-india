import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import BlogPost from "./pages/BlogPost";
import ScrollHandler from "./components/ui/ScrollHandler";
import Disclaimer from "./pages/Disclaimer";
import ResetPasswordPage from "./components/ResetPasswordPage";
import Pricing from "./components/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>

  <ScrollHandler />


          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about-medibachat" element={<AboutUs />} />  {/* Add this */}
            <Route path="/terms-of-service" element={<TermsOfService />} />  {/* Add this */}
            <Route path="/disclaimer" element={<Disclaimer />} />  {/* Add this */}
            <Route path="/reset-password" element={<ResetPasswordPage />} />  {/* Add this */}

            <Route path="/pricing" element={<Pricing />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
