import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingDown,
  TrendingUp,
  Calendar,
  Download,
  BarChart3,
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient.js"; // Adjust path based on your folder structure

const PriceHistory = () => {
  const [priceHistoryData, setPriceHistoryData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [lastMonthPrice, setLastMonthPrice] = useState<number | null>(null);
  const [lowestPriceMonth, setLowestPriceMonth] = useState<string | null>(null);
  const [lowestPlatform, setLowestPlatformName] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      let price_history_name = localStorage.getItem("price_history_name");
      if (!price_history_name){
        price_history_name = 'Cetaphil Syndet Bar 75gm'
      };

      const { data, error } = await supabase
        .from("price_history")
        .select("date, prices")
        .eq("medicineName", price_history_name)
        .order("date", { ascending: true });

      if (error) {
        console.error("Error fetching price history:", error);
        return;
      }

      // Transform data
      const transformed = data.map((entry: any) => {
        const flattenedPrices: Record<string, number> = {};
        entry.prices.forEach((priceObj: any) => {
          const [platform, price] = Object.entries(priceObj)[0];
          flattenedPrices[platform] = price as number;
        });

        return {
          date: entry.date,
          ...flattenedPrices,
        };
      });

      setPriceHistoryData(transformed);

      console.log("transformed---------------------------->", transformed);

      let overallLowestPrice = Infinity;
      let overallLowestDate = "";
      let overallLowestPlatform = "";

      transformed.forEach((entry) => {
        const { date, ...platformPrices } = entry;

        Object.entries(platformPrices).forEach(([platform, price]) => {
          if (typeof price === "number" && price < overallLowestPrice) {
            overallLowestPrice = price;
            overallLowestDate = date;
            overallLowestPlatform = platform;
          }
        });
      });

      if (overallLowestDate) {
        const [day, month, year] = overallLowestDate.split("-");
        const monthName = new Date(`${year}-${month}-01`).toLocaleString(
          "default",
          { month: "long" }
        );
        setLowestPriceMonth(monthName);

        // Optional: store platform and price too if needed
        console.log("Lowest price:", overallLowestPrice);
        console.log("On:", overallLowestDate);
        console.log("Platform:", overallLowestPlatform);
      }

      // Set current and last month prices for a platform (e.g., Tata 1mg)
      if (transformed.length >= 2 && overallLowestPlatform) {
        const current =
          transformed[transformed.length - 1]?.[overallLowestPlatform];
        const last =
          transformed[transformed.length - 2]?.[overallLowestPlatform];
        setCurrentPrice(current);
        setLastMonthPrice(last);
        setLowestPlatformName(overallLowestPlatform);
      }
      else{
        setCurrentPrice(transformed[transformed.length]?.[overallLowestPlatform]);
        setLastMonthPrice(transformed[transformed.length]?.[overallLowestPlatform]);
        setLowestPlatformName(overallLowestPlatform);
      }
    };

    fetchData();

    const handleUpdate = () => {
      fetchData();
    };

    window.addEventListener("priceDataUpdated", handleUpdate);

    // Cleanup
    return () => {
      window.removeEventListener("priceDataUpdated", handleUpdate);
    };
  }, []);

  // Mock historical price data
  // const priceHistoryData = [
  //   { date: '2024-01', netmeds: 52, tata1mg: 50, pharmeasy: 55, apollo: 51 },
  //   { date: '2024-02', netmeds: 48, tata1mg: 47, pharmeasy: 52, apollo: 49 },
  //   { date: '2024-03', netmeds: 50, tata1mg: 48, pharmeasy: 54, apollo: 50 },
  //   { date: '2024-04', netmeds: 47, tata1mg: 45, pharmeasy: 51, apollo: 48 },
  //   { date: '2024-05', netmeds: 49, tata1mg: 46, pharmeasy: 53, apollo: 49 },
  //   { date: '2024-06', netmeds: 46, tata1mg: 44, pharmeasy: 50, apollo: 47 },
  //   { date: '2024-07', netmeds: 45.5, tata1mg: 43.2, pharmeasy: 47.8, apollo: 44.9 },
  // ];

  // const currentPrice = 43.2;
  // const lastMonthPrice = 44;

  const priceChange =
    currentPrice && lastMonthPrice
      ? (((currentPrice - lastMonthPrice) / lastMonthPrice) * 100).toFixed(1)
      : "0";

  const isDecrease =
    currentPrice && lastMonthPrice ? currentPrice < lastMonthPrice : false;

  const platformColors = {
    netmeds: "#8884d8",
    tata1mg: "#82ca9d",
    pharmeasy: "#ffc658",
    apollo: "#ff7c7c",
    truemeds: "#a1ff7cff",
  };

  return (
    <section id="price-history" className="py-20 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Price History Tracker
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track price trends over time and find the best time to buy your
            medicines
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                {localStorage.getItem("price_history_name") || "Cetaphil Syndet Bar 75gm"} Price Trends
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-foreground">
                    ₹{currentPrice}
                  </span>
                  <Badge
                    variant={isDecrease ? "secondary" : "destructive"}
                    className="flex items-center space-x-1"
                  >
                    {isDecrease ? (
                      <TrendingDown className="h-3 w-3" />
                    ) : (
                      <TrendingUp className="h-3 w-3" />
                    )}
                    <span>{Math.abs(Number(priceChange))}%</span>
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">
                  vs last month
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Select defaultValue="6months">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                  <SelectItem value="1year">1 Year</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Chart Placeholder */}
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <div className="h-96 w-full flex items-center justify-center bg-[#F2F5F9] dark:bg-[#020817] dark:border dark:border-gray-800 dark:shadow-strong rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-primary dark:text-[#004EB4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Interactive Price Chart
                  </h3>
                  <p className="text-muted-foreground max-w-lg">
                    Track price trends across multiple platforms over time.
                    Historical data shows <b>{lowestPlatform}</b> consistently
                    offers the lowest prices.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="text-center">
                      <div className="text-lg font-bold text-secondary dark:text-[#10B780]">
                        -12%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Last 30 days
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary dark:text-[#004EB4]">
                        ₹{currentPrice}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Lowest price
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {Object.entries(platformColors).map(([platform, color]) => (
              <div
                key={platform}
                className="flex items-center space-x-2 p-3 bg-card rounded-lg border"
              >
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-sm font-medium capitalize text-foreground">
                  {platform === "tata1mg" ? "Tata 1mg" : platform}
                </span>
              </div>
            ))}
          </div>

          {/* Price Insights */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingDown className="h-5 w-5 text-secondary dark:text-[#10B780]" />
                <h4 className="font-semibold text-foreground">
                  Lowest Price Period
                </h4>
              </div>
              <p className="text-2xl font-bold text-secondary dark:text-[#10B780]">
                ₹{currentPrice}
              </p>
              <p className="text-sm text-muted-foreground">
                {lowestPriceMonth} 2025 on {lowestPlatform}
              </p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-5 w-5 text-primary dark:text-[#004EB4]" />
                <h4 className="font-semibold text-foreground">
                  Best Month to Buy
                </h4>
              </div>
              <p className="text-2xl font-bold text-primary dark:text-[#004EB4]">
                {lowestPriceMonth}
              </p>
              <p className="text-sm text-muted-foreground">
                Historically lowest prices
              </p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-accent dark:text-[#0670FF]" />
                <h4 className="font-semibold text-foreground">
                  Average Savings
                </h4>
              </div>
              <p className="text-2xl font-bold text-accent dark:text-[#0670FF]">15%</p>
              <p className="text-sm text-muted-foreground">Compared to MRP</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceHistory;
