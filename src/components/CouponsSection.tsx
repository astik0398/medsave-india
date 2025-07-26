import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Calendar, Tag, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CouponsSection = () => {
  const couponData = [
    {
      platform: "Netmeds",
      logo: "🏥",
      coupons: [
        {
          code: "SAVE20",
          title: "20% Off on First Order",
          description: "Valid on orders above ₹500",
          discount: "Up to ₹100",
          expiry: "31 Dec 2024",
          isNew: true
        },
        {
          code: "HEALTH15",
          title: "15% Off on Health Products",
          description: "No minimum order value",
          discount: "Up to ₹75",
          expiry: "15 Jan 2025",
          isNew: false
        }
      ]
    },
    {
      platform: "Tata 1mg",
      logo: "💊",
      coupons: [
        {
          code: "FIRST25",
          title: "25% Off for New Users",
          description: "Valid on orders above ₹300",
          discount: "Up to ₹150",
          expiry: "28 Dec 2024",
          isNew: true
        },
        {
          code: "MEDICINE10",
          title: "10% Off on All Medicines",
          description: "Valid on all prescription drugs",
          discount: "Up to ₹50",
          expiry: "20 Jan 2025",
          isNew: false
        }
      ]
    },
    {
      platform: "PharmEasy",
      logo: "🔬",
      coupons: [
        {
          code: "PHARMA30",
          title: "30% Off + Free Delivery",
          description: "Valid on orders above ₹999",
          discount: "Up to ₹200",
          expiry: "5 Jan 2025",
          isNew: true
        },
        {
          code: "WELLNESS12",
          title: "12% Off on Wellness Products",
          description: "Valid on vitamins & supplements",
          discount: "Up to ₹80",
          expiry: "10 Feb 2025",
          isNew: false
        }
      ]
    },
    {
      platform: "Apollo Pharmacy",
      logo: "⚕️",
      coupons: [
        {
          code: "APOLLO40",
          title: "40% Off on Health Checkups",
          description: "Book health packages online",
          discount: "Up to ₹500",
          expiry: "25 Dec 2024",
          isNew: true
        },
        {
          code: "GENERIC20",
          title: "20% Off on Generic Medicines",
          description: "Valid on all generic drugs",
          discount: "Up to ₹100",
          expiry: "30 Jan 2025",
          isNew: false
        }
      ]
    }
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Coupon Copied!",
      description: `Coupon code "${code}" has been copied to clipboard.`,
    });
  };

  return (
    <section id="coupons" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gift className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Coupons & Offers
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save even more with exclusive discount coupons from India's top e-pharmacy platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {couponData.map((platform, platformIndex) => (
            <Card key={platformIndex} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">{platform.logo}</span>
                  <span className="text-xl">{platform.platform} Coupons</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {platform.coupons.map((coupon, couponIndex) => (
                  <div
                    key={couponIndex}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-foreground">{coupon.title}</h4>
                          {coupon.isNew && (
                            <Badge variant="secondary" className="text-xs">
                              NEW
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{coupon.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Tag className="h-3 w-3" />
                            <span>{coupon.discount}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>Expires: {coupon.expiry}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Code:</span>
                        <code className="px-2 py-1 bg-primary-glow text-primary text-sm font-mono rounded">
                          {coupon.code}
                        </code>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(coupon.code)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Coupons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CouponsSection;