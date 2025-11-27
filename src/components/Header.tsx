import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  TicketPercentIcon,
  HelpCircle,
  Phone,
  House,
  Scale,
  ChartNoAxesCombined,
  IndianRupee,
  Wallet,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logo from "@/assets/medi bachat dark mode (1).png";
import logoLight from "@/assets/medibachat all images (3).png";
import { supabase } from "@/lib/supabaseClient.js";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "next-themes";

const Header = () => {
  const { user, openLoginModal } = useAuth();
  
  const getInitials = (fullName: string) => {
    if (!fullName) return "";
    const names = fullName.split(" ");
    const initials = names.map((n) => n[0].toUpperCase()).slice(0, 2);
    return initials.join("");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { label: "Home", href: "/#home", icon: House },
    { label: "Compare Price", href: "/#price-comparison", icon: Scale },
    { label: "Coupons", href: "/#coupons", icon: TicketPercentIcon },
    {
      label: "Price History",
      href: "/#price-history",
      icon: ChartNoAxesCombined,
    },
    { label: "FAQ", href: "/#faq", icon: HelpCircle },

{ label: "Pricing", href: "/pricing", icon: Wallet },
    // { label: "Contact", href: "/#contact", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={theme === "dark" ? logo : logoLight}
            alt="MedSave India"
            className="h-40 w-40"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <item.icon className="h-4 w-4 relative top-[1.2px]" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          {user ? (
            <>
              {/* Profile Icon */}
              <div
                style={{
                  marginRight: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
                className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold"
              >
                {getInitials(user.full_name)}
              </div>

              {/* Logout Button */}
              <Button
                variant="hero"
                size="sm"
                className="bg-red-500 pl-4 pr-4 hover:bg-red-600 text-white dark:text-white"
                onClick={async () => {
                  await supabase.auth.signOut(); // Logout from Supabase
                  window.location.reload(); // refresh to reset state
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            /* Login Button */
            <Button
              variant="hero"
              size="sm"
              className="dark:text-white pl-4 pr-4"
              onClick={openLoginModal}
            >
              Log In
            </Button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />

          {user && (
            <div
              style={{
                marginRight: "10px",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold"
            >
              {getInitials(user.full_name)}
            </div>
          )}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
            <div className="pt-4">
              {user ? (
                <>
                  {/* Logout Button */}
                  <Button
                    variant="hero"
                    size="sm"
                    className="bg-red-500 pl-4 pr-4 hover:bg-red-600 text-white dark:text-white w-full"
                    onClick={async () => {
                      await supabase.auth.signOut(); // Logout from Supabase
                      window.location.reload(); // refresh to reset state
                    }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                /* Login Button */
                <Button
                  variant="hero"
                  size="sm"
                  className="dark:text-white w-full"
                  onClick={openLoginModal}
                >
                  Log In
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
