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
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: House },
    { label: "Compare Price", href: "#price-comparison", icon: Scale },
    { label: "Coupons", href: "#coupons", icon: TicketPercentIcon },
    {
      label: "Price History",
      href: "#price-history",
      icon: ChartNoAxesCombined,
    },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="MedSave India" className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MedSave India
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-14">
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
          <Button
            variant="hero"
            size="sm"
            className="dark:text-white"
            onClick={() => {
              const target = document.getElementById("home");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                // Wait ~600ms to allow scroll animation to complete
                setTimeout(() => {
                  window.dispatchEvent(new Event("focusSearchInput"));
                }, 600);
              }
            }}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
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
              <Button
                variant="hero"
                size="sm"
                className="w-full dark:text-white"
                onClick={() => {
                  const target = document.getElementById("home");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    // Wait ~600ms to allow scroll animation to complete
                    setTimeout(() => {
                      window.dispatchEvent(new Event("focusSearchInput"));
                    }, 600);
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
