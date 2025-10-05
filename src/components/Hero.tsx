import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingDown, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-medicines.png";
import { supabase } from "@/lib/supabaseClient.js"; // Adjust path based on your folder structure

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const currentDate = new Date();
  const formattedDate = `${String(currentDate.getDate()).padStart(
    2,
    "0"
  )}-${String(currentDate.getMonth() + 1).padStart(
    2,
    "0"
  )}-${currentDate.getFullYear()}`;

  const finalDateTime = new Date()
  .toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  })
  .replace(",", "")
  .replace(/\//g, "-");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

     // Insert into all_qwery (always log the search query + date)
  const { error: logError } = await supabase
    .from("all_qwery")
    .insert([
      {
        searchQuery: searchQuery,   // the term user typed
        searched_at: finalDateTime
      },
    ]);

  if (logError) {
    console.error("Supabase log error:", logError);
  }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://medicompare-production.up.railway.app/search",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ medicineName: searchQuery }),
        }
      );

      const result = await response.json();

      // Filter out platforms with errors
      const validEntries = Object.entries(result).filter(
        ([, data]) => !(data as any)?.error
      );

      if (validEntries.length === 0) {
        setError("No valid results found.");
        return;
      }

      // Get the first valid medicine name
      const firstMedicineName = (validEntries as any)[0][1].name;
      localStorage.setItem("price_history_name", firstMedicineName);
      localStorage.setItem("med_qwery", searchQuery);

      // Build prices array with null safety
const pricesArray = validEntries.map(([platform, data]) => {
  const numericPrice = parseFloat(
    ((data as any).price?.replace(/[^\d.]/g, "") ?? "0")
  );
  return { [platform]: numericPrice };
});

      // Check if record already exists
      const { data: existingRecords, error: selectError } = await supabase
        .from("price_history")
        .select("*")
        .eq("medicineName", firstMedicineName)
        .eq("date", formattedDate);

      if (selectError) {
        console.error("Supabase select error:", selectError);
      } else if (existingRecords && existingRecords.length > 0) {
        console.log(
          "Record already exists for this medicine and date. Skipping insert."
        );
      } else {
        // Insert into Supabase only if no record exists
        const { data: insertData, error: insertError } = await supabase
          .from("price_history")
          .insert([
            {
              prices: pricesArray,
              medicineName: firstMedicineName,
              date: formattedDate,
            },
          ]);

        if (insertError) {
          console.error("Supabase insert error:", insertError);
        }
      }

      console.log("----result----", result);

      const filteredResult = Object.fromEntries(validEntries);

      localStorage.setItem("priceData", JSON.stringify(filteredResult));
      window.dispatchEvent(new Event("priceDataUpdated"));
      document
        .getElementById("price-comparison")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching medicine data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleFocusEvent = () => {
      inputRef.current?.focus();
    };

    window.addEventListener("focusSearchInput", handleFocusEvent);
    return () => {
      window.removeEventListener("focusSearchInput", handleFocusEvent);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#F2F5F9] dark:bg-[#020817] flex items-center"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Compare Medicine Prices
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Save Up to 70%
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
               Use our <strong>medicine price comparison app</strong> to <strong>compare medicine prices online</strong>, get the <strong>highest discount on medicines</strong>, and access <strong><a href="https://www.netmeds.com/" style={{color:'#004FB7'}} target="_blank">Netmeds</a>, <a style={{color:'#004FB7'}} href="https://pharmeasy.in/" target="_blank">PharmEasy</a>, <a style={{color:'#004FB7'}} href="https://www.1mg.com/" target="_blank">Tata 1mg</a> </strong> deals instantly. Buy medicines online India with exclusive pharmacy coupons. 
              </p>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-4 max-w-lg"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Enter medicine name (e.g., Himalaya Liv 52)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                className="h-12 px-8 dark:text-white"
              >
                {loading ? (
                  <span className="w-6 h-6 inline-block rounded-full border-t-4 border-r-4 border-white border-r-transparent box-border animate-spin"></span>
                ) : (
                  "Compare Prices"
                )}
              </Button>
            </form>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-glow rounded-lg dark:bg-[#0A54B6]">
                  <TrendingDown className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Best Prices</h3>
                  <p className="text-sm text-muted-foreground">
                    Compare platforms
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary-glow rounded-lg dark:bg-[#0A54B6]">
                  <Shield className="h-5 w-5 text-secondary dark:text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Verified Sources
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Trusted e-pharmacies
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-glow rounded-lg dark:bg-[#0A54B6]">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Real-time</h3>
                  <p className="text-sm text-muted-foreground">
                    Updated prices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Compare medicine prices online India, check medicine price tracker, avail medicine discounts and coupon codes from Netmeds, Truemeds, PharmEasy, Apollo Pharmacy"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Background decorations */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-primary opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-secondary opacity-20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
