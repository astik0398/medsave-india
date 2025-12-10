import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, CheckCircle, Bell } from "lucide-react";
import { supabase } from "@/lib/supabaseClient.js"; // Adjust path based on your folder structure

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  setIsSubmitting(true);

  try {
    const formData = new FormData();
    formData.append("access_key", "6466632c-274d-4d98-9582-7c8e4598aca5");
    formData.append("email", email);
    formData.append("subject", "New Newsletter Subscription");
    formData.append("from_name", "Medsave Newsletter");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Subscribed Successfully!",
        description: "You'll receive weekly updates on medicine prices and exclusive offers.",
      });
      setEmail("");
      const { error } = await supabase
      .from("newsletter")
      .insert([{ email, mail_sent: false }]);
    } else {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again.",
      });
      console.error(result);
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Unable to connect to the server.",
    });
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="py-20 bg-[#005ED9] dark:bg-[#020817] border-t border-primary/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur shadow-strong border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="p-2 mr-2 bg-primary-glow dark:bg-gradient-primary rounded-full">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Stay Updated with Best Prices
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get weekly newsletters with the latest medicine price drops, exclusive coupons, 
                and health tips delivered straight to your inbox.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary dark:text-[#005CD4] flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Weekly price alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary dark:text-[#005CD4] flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Exclusive discount coupons</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary dark:text-[#005CD4] flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Health tips & news</span>
              </div>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="h-12 px-8 dark:text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Bell className="mr-2 h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary dark:text-primary">₹2Cr+</div>
                <div className="text-sm text-muted-foreground">Money Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Medicines Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary dark:text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;