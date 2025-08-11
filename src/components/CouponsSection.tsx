import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Calendar, Tag, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import netmeds from "../assets/netmeds trans.png";
import onemg from "../assets/1mg trans.png";
import truemeds from "../assets/truemeds trans.png";
import pharmeasy from "../assets/pharmeasy trans.png";
import apollo from "../assets/apllo pharmacy trans.png";
import { supabase } from "@/lib/supabaseClient.js"; // Adjust path based on your folder structure

const CouponsSection = () => {

    const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);

 const fetchCoupons = async () => {
  setLoading(true);
  try {
    const { data, error } = await supabase
      .from('coupons')
      .select('data')
      .order('fetched_at', { ascending: false })
      .limit(1)
      .single();

    if (error) throw error;

    console.log('data of coupons===>', data);
    

    setCoupons(data.data || []);
  } catch (err) {
    console.error('Error fetching coupons:', err);
  } finally {
    setLoading(false);
  }
};

    // useEffect to trigger coupon fetch when activeTab changes
  useEffect(() => {
    fetchCoupons();
  }, []);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Coupon Copied!",
      description: `Coupon code "${code}" has been copied to clipboard.`,
    });
  };

  return (
    <section id="coupons" className="py-20 bg-[#F2F5F9] dark:bg-[#020817] border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gift className="h-8 w-8 mr-2 text-secondary dark:text-[#23BC89]" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Coupons & Offers
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Save even more with exclusive discount coupons from India's top e-pharmacy platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coupons.map((platform, platformIndex) => (
            <Card key={platformIndex} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <img width='50px' src={platform.logo}   alt={`${platform.platform} coupon code and offers`}  />
                  <span className="text-xl">{platform.platform.toUpperCase()} COUPON CODE & OFFERS</span>
                </CardTitle>
              </CardHeader>
              <CardContent >
               <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
                 {platform.coupons.map((coupon, couponIndex) => (
                  <div
                    key={couponIndex}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-foreground">{coupon.title ? coupon.title: coupon.additionalDetail}</h4>
                          {coupon.isNew && (
                            <Badge variant="secondary" className="text-xs">
                              NEW
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{coupon.additionalDetail}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Tag className="h-3 w-3" />
                            <span>{coupon.discount || 'Up to ₹100'}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>Expires: {coupon.validTill}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Code:</span>
                        <code className="px-2 py-1 bg-primary-glow dark:bg-[#005CD3] text-primary text-sm font-mono rounded">
                          {coupon.couponCode}
                        </code>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(coupon.couponCode)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </div>
                ))}
               </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="dark:text-white" variant="hero" size="lg">
            View All Coupons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CouponsSection;