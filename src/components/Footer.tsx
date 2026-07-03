import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about-medibachat" },
      // { label: "How It Works", href: "#how-it-works" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-of-service" },
      { label: "Refund & Cancellation", href: "/refund-and-cancellation" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
    features: [
      { label: "Medicine Price Comparison", href: "#price-comparison" },
      // { label: "Coupons & Offers", href: "#coupons" },
      { label: "Medicine Price History", href: "#price-history" },
      { label: "Medicine Search", href: "#home" },
    ],
    support: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
      // { label: "Help Center", href: "#help" },
      { label: "Report Issue", href: "#contact" },
    ],
    platforms: [
      { label: "Netmeds", href: "#" },
      { label: "Tata 1mg", href: "#" },
      { label: "PharmEasy", href: "#" },
      // { label: "Apollo Pharmacy", href: "#" },
    ],
  };

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/medi_bachat?igsh=OXgwcHZqOGdmZzBz", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#F2F5F9] dark:bg-[#020817] border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-8 mt-[-20px]">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="MedSave India" className="h-8 w-8" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MediBachat - Kumar Astik
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              India's leading medicine price comparison platform. Compare
              prices, find coupons, and save money on your healthcare needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div
                style={{ alignItems: "center" }}
                className="flex space-x-2 text-sm text-muted-foreground"
              >
                <Mail className="h-4 w-4" />
                <span>medibachatforyou@gmail.com</span>
              </div>
              <div
                style={{ alignItems: "center" }}
                className="flex space-x-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>+91 798-001-8498</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">MediBachat</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Features</h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Platforms */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Partners</h4>
            <ul className="space-y-3">
              {footerLinks.platforms.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-[-40px]">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 MediBachat Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in India. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
              target="_blank"
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary-glow rounded-lg"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 mb-[-30px] p-4 bg-muted/50 rounded-lg border-l-4 border-r-4 border-blue-500">
          <p className="text-sm text-muted-foreground">
            <strong>Medical Disclaimer:</strong> This website provides
            information for comparison purposes only and is not intended as
            medical advice, diagnosis, or treatment. The content should not be
            used as a substitute for professional medical advice. Always consult
            with a qualified healthcare provider before making decisions about
            medications, treatments, or health conditions. Prices and
            availability are subject to change without notice. MediBachat is not
            affiliated with any pharmacy and does not sell medicines directly.
          </p>
        </div>

        {/* <!-- hitwebcounter Code START --> */}

        <div style={{display:'flex', justifyContent:'center', marginTop:'60px', marginBottom:'-50px'}}>
          <a href="https://www.hitwebcounter.com" target="_blank">
            <img
              src="https://hitwebcounter.com/counter/counter.php?page=21365985&style=0025&nbdigits=5&type=page&initCount=0"
              title="Counter Widget"
              alt="Visit counter For Websites"
              style={{ border: 0 }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
