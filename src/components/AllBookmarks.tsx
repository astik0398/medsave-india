import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Truck, Clock, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient.js";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import Header from "./Header";
import Footer from "./Footer";
import netmeds from "../assets/netmeds trans.png";
import onemg from "../assets/1mg trans.png";
import truemeds from "../assets/truemeds trans.png";
import pharmeasy from "../assets/pharmeasy trans.png";
import apollo from "../assets/apllo pharmacy trans.png";
import medkart from "../assets/medkart_pharmacy_logo-removebg-preview.png"
import medibuddyLogo from "../assets/images__3_-removebg-preview.png"

const AllBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, openLoginModal } = useAuth();

   const logoMap = {
          netmeds: netmeds,
          tata1mg: onemg,
          pharmeasy: pharmeasy,
          apollopharmacy: apollo,
          truemeds: truemeds,
          medkart: medkart,
          medibuddy: medibuddyLogo
        };

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    fetchBookmarks();
  }, [user]);

  const fetchBookmarks = async () => {
    try {
      const { data, error } = await supabase
        .from("bookmarks")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      console.log('bookmak data', data);
      
      setBookmarks(data || []);
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
      toast({
        title: "Error",
        description: "Could not load bookmarks.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const removeBookmark = async (bookmarkId: string) => {
    try {
      const { error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("id", bookmarkId);

      if (error) throw error;

      setBookmarks(bookmarks.filter((b: any) => b.id !== bookmarkId));
      toast({
        title: "Removed",
        description: "Bookmark removed successfully.",
      });
    } catch (error) {
      console.error("Error removing bookmark:", error);
      toast({
        title: "Error",
        description: "Could not remove bookmark.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Bookmarks
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Please log in to view your bookmarks.
            </p>
            <Button variant="hero" onClick={openLoginModal}>
              Log In
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-muted-foreground">Loading bookmarks...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Bookmarks
            </h1>
            <p className="text-lg text-muted-foreground">
              Your saved medicine price comparisons
            </p>
          </div>

          {bookmarks.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                You haven't bookmarked any medicines yet.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {bookmarks.map((bookmark: any) => {
                const item = bookmark.search_result;
                return (
                  <Card
                    key={bookmark.id}
                    className="relative overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <img
  src={logoMap[item.platform.toLowerCase().replace(/\s/g, '')] || "💊"}
  width="45px"
  alt={`${item.platform} medicine price logo`}
/>

                          <h3 className="font-semibold text-foreground">
                            {item.platform}
                          </h3>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-muted-foreground">
                              {item.rating}
                            </span>
                          </div>
                          <div className="flex justify-center mt-4">
                            <Trash2
                              className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-700"
                              onClick={() => removeBookmark(bookmark.id)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-baseline space-x-2 mb-1">
                            <span className="text-2xl font-bold text-foreground">
                              ₹{item.price}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{item.originalPrice}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {item.discount}% OFF
                          </Badge>
                        </div>

                        {item.couponCode && (
                          <div className="p-2 bg-primary-glow dark:bg-[#005CD3] rounded-md">
                            <p className="text-xs text-primary font-medium">
                              COUPON: {item.couponCode}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Truck className="h-4 w-4" />
                          <span>{item.deliveryTime}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span
                            className={
                              item.inStock ? "text-secondary" : "text-destructive"
                            }
                          >
                            {item.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>

                        <a href={item.buyUrl} target="_blank">
                          <Button
                            className="w-full mt-4"
                            variant={item.inStock ? "default" : "outline"}
                            disabled={!item.inStock}
                          >
                            {item.inStock ? (
                              <>
                                Buy Now <ExternalLink className="ml-2 h-4 w-4" />
                              </>
                            ) : (
                              "Notify When Available"
                            )}
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBookmarks;
