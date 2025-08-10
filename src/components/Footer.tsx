import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about-us" },
      // { label: "How It Works", href: "#how-it-works" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    features: [
      { label: "Price Comparison", href: "#price-comparison" },
      // { label: "Coupons & Offers", href: "#coupons" },
      { label: "Price History", href: "#price-history" },
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
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#F2F5F9] dark:bg-[#020817] border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="MedSave India" className="h-8 w-8" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MedSave India
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              India's leading medicine price comparison platform. Compare prices, 
              find coupons, and save money on your healthcare needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div style={{alignItems:'center'}} className="flex space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>medibachatforyou@gmail.com</span>
              </div>
              <div style={{alignItems:'center'}} className="flex space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 798-001-8498</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
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
            <span>© 2024 MedSave India. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in India. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
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
        {/* <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclaimer:</strong> MedSave India is an independent price comparison platform. 
            We are not affiliated with any pharmacy. Prices are subject to change. 
            Always verify prices and availability on the respective pharmacy websites before purchase.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;