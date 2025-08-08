import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Truck, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import netmeds from "../assets/netmeds trans.png";
import onemg from "../assets/1mg trans.png";
import truemeds from "../assets/truemeds trans.png";
import pharmeasy from "../assets/pharmeasy trans.png";
import apollo from "../assets/apllo pharmacy trans.png";

const PriceComparison = () => {
  const [priceData, setPriceData] = useState([]);
  const [medicineName, setMedicineName] = useState("Loading...");
  const [platformName, setPlatformName] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  useEffect(() => {
    const loadDataFromLocalStorage = () => {
      const savedPriceData = JSON.parse(
        localStorage.getItem("priceData") || "{}"
      );

      const platformMap = {
        netmeds: "Netmeds",
        tata1mg: "Tata 1mg",
        pharmeasy: "PharmEasy",
        apollopharmacy: "Apollo Pharmacy",
        truemeds: "Truemeds",
      };

      const logoMap = {
        netmeds: netmeds,
        tata1mg: onemg,
        pharmeasy: pharmeasy,
        apollopharmacy: apollo,
        truemeds: truemeds,
      };

      const transformed = Object.entries(savedPriceData).map(
        ([key, value]: any) => {
          const cleanPrice = parseFloat(
            (value.finalPrice || value.price || "₹88").replace(/[^\d.]/g, "")
          );
          console.log("cleanPrice", cleanPrice);

          return {
            platform: platformMap[key] || key,
            logo: logoMap[key] || "💊",
            price: cleanPrice,
            originalPrice: parseFloat(
              (value.originalPrice || value.price || "100").replace(
                /[^\d.]/g,
                ""
              )
            ),
            discount: value.originalPrice
              ? Math.round(
                  (1 -
                    cleanPrice /
                      parseFloat(value.originalPrice.replace(/[^\d.]/g, ""))) *
                    100
                )
              : 0,
            couponCode: platformMap[key] === 'Netmeds' ? "SAVE200" : platformMap[key] === 'Tata 1mg' ? '1MGNEW' : 
            platformMap[key] === 'PharmEasy' ? '23PYFIT' : platformMap[key]=== 'Apollo Pharmacy' ? 'PHARMA10' : 
            platformMap[key] === 'Truemeds' ? 'FIRST25' : null,
            rating: value.rating,
            deliveryTime: platformMap[key] === 'Netmeds' ? "By Tomorrow" : platformMap[key] === 'Tata 1mg' ? 'By Today' : 
            platformMap[key] === 'PharmEasy' ? 'By Tomorrow' : platformMap[key]=== 'Apollo Pharmacy' ? '1-2 days' : 
            platformMap[key] === 'Truemeds' ? '2-3 days' : '',
            inStock: !!cleanPrice,
            buyUrl: value.url,
            name: value.name,
            productImg: value.image,
          };
        }
      );
      console.log("transformed", transformed);

      setPriceData(transformed);

     let lowestPriceData = null;

if (transformed.length > 0) {
  lowestPriceData = transformed.reduce((minItem, currentItem) => {
    return currentItem.price < minItem.price ? currentItem : minItem;
  });

  if (lowestPriceData?.name) setMedicineName(lowestPriceData.name);
  if (lowestPriceData?.platform) setPlatformName(lowestPriceData.platform);
  if (lowestPriceData?.deliveryTime) setDeliveryTime(lowestPriceData.deliveryTime);

  console.log("lowestPriceData ===>", lowestPriceData);
} else {
  console.log("transformed array is empty");
}
    };

    // Load data initially
    loadDataFromLocalStorage();

    // Set up event listener
    window.addEventListener("priceDataUpdated", loadDataFromLocalStorage);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("priceDataUpdated", loadDataFromLocalStorage);
    };
  }, []);

  // Mock data for demonstration
  const medicineData = {
    name: medicineName,
    platformName: platformName,
    deliveryTime: deliveryTime,
    packSize: "Strip of 15 tablets",
  };

  console.log(priceData);

  const lowestPrice = Math.min(...priceData.map((item) => item.price));
  if (priceData.length === 0)
    return <p className="text-center py-10">Loading comparison data...</p>;

  console.log(lowestPrice);

  return (
    <section id="price-comparison" className="py-20 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Price Comparison Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Compare prices for{" "}
            <span className="font-medium">{medicineData.name}</span> across
            India's leading e-pharmacy platforms
          </p>
        </div>

        {/* Medicine Info */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="p-6 shadow-soft">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {medicineData.name}
                </h3>
                <p className="text-muted-foreground mb-1">
                  Available On: {medicineData.platformName}
                </p>
                <p className="text-muted-foreground mb-1">
                  Delivery Date: {medicineData.deliveryTime}
                </p>
                <p className="text-muted-foreground">{medicineData.packSize}</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Lowest Price</p>
                  <p className="text-3xl font-bold text-secondary dark:text-[#10B77F]">
                    ₹{lowestPrice}
                  </p>
                  <Badge variant="secondary" className="mt-1 dark:bg-[#10B77F]">
                    Best Deal
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Price Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {priceData.map((item, index) => (
            <Card
              style={{
                boxShadow:
                  item.price === lowestPrice ? "0 0 10px 1px #10b77f" : "",
              }}
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-medium hover:scale-105 ${
                !item.inStock ? "opacity-75" : ""
              }`}
            >
              {item.price === lowestPrice && (
                <Badge className="absolute top-2 right-4 bg-secondary dark:bg-[#10B77F] text-secondary-foreground">
                  Best Price
                </Badge>
              )}
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <img src={item.logo} width="45px" />
                    <h3 className="font-semibold text-foreground">
                      {item.platform}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">
                      {item.rating}
                    </span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
