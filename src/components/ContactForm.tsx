import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsSubmitting(true);

  try {
    const formPayload = new FormData();
    formPayload.append("access_key", "6466632c-274d-4d98-9582-7c8e4598aca5");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", message: "" });
    } else {
      console.error("Error submitting form:", data);

      toast({
        title: "Error Sending the Message!",
        description: "There was a problem sending your message. Please try again!",
      });
    }
  } catch (error) {
    console.error("Fetch error:", error);

    toast({
      title: "Network Error!",
      description: "Please check your internet connection and try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-20 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about medicine prices or need help? We're here to
            assist you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div style={{ alignItems:'center'}} className="flex items-start space-x-4">
                  <div  className="p-3 bg-primary-glow dark:bg-gradient-primary rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Email
                    </h4>
                    <p className="text-muted-foreground">
                      medsaveindia@gmail.com
                    </p>
                    {/* <p className="text-sm text-muted-foreground">
                      We'll respond within 24 hours
                    </p> */}
                  </div>
                </div>

                <div style={{alignItems:'center'}} className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary-glow dark:bg-gradient-primary rounded-lg">
                    <Phone className="h-6 w-6 text-secondary dark:text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Phone
                    </h4>
                    <p className="text-muted-foreground">+91 798-001-8498</p>
                   
                  </div>
                </div>

                <div style={{alignItems:'center'}} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-glow rounded-lg dark:bg-gradient-primary">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Office
                    </h4>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="p-6 bg-[#F2F5F9] dark:bg-[#020817] dark:border dark:border-gray-800 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-3">Quick Help</h4>
              <div className="space-y-2">
                <a
                  href="#faq"
                  className="block text-sm text-primary hover:underline"
                >
                  → How do you collect price data?
                </a>
                <a
                  href="#faq"
                  className="block text-sm text-primary hover:underline"
                >
                  → Are the prices updated in real-time?
                </a>
                <a
                  href="#faq"
                  className="block text-sm text-primary hover:underline"
                >
                  → Is MedSave India free to use?
                </a>
                <a
                  href="#faq"
                  className="block text-sm text-primary hover:underline"
                >
                  → View all FAQs
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  variant="hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
