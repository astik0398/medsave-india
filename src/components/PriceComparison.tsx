import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Truck, Clock, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import netmeds from "../assets/netmeds trans.png";
import onemg from "../assets/1mg trans.png";
import truemeds from "../assets/truemeds trans.png";
import pharmeasy from "../assets/pharmeasy trans.png";
import apollo from "../assets/apllo pharmacy trans.png";
import medkart from "../assets/medkart_pharmacy_logo-removebg-preview.png"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import whatsappIcon from '../assets/whatsapp.svg'
import { supabase } from "@/lib/supabaseClient.js"; // Adjust path based on your folder structure
import { toast } from "@/hooks/use-toast";

const PriceComparison = () => {
  const [priceData, setPriceData] = useState([]);
  const [medicineName, setMedicineName] = useState("Loading...");
  const [platformName, setPlatformName] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [priceDropPercentage, setPriceDropPercentage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfirm = async () => {
     let med_qwery = localStorage.getItem("med_qwery")

    console.log("WhatsApp Number:", `+91${whatsappNumber}`);
    console.log("Price Drop Percentage:", priceDropPercentage);
    console.log("MEDICINE NAME---:", med_qwery);
    // Here you would typically send this data to your backend

     try {
    // Insert data into 'price_alert' table
    const { data, error } = await supabase
      .from("price_alert")
      .insert([
        {
          med_qwery: med_qwery,
          percentage_drop: priceDropPercentage,
          whatsapp_number: `+91${whatsappNumber}`,
          created_at: new Date().toISOString(), // optional, if you want timestamp
        },
      ]);

    if (error) {
      console.error("Error inserting data:", error);
      toast({
              title: "❌ Alert Failed!",
              description: " Failed to save an alert. Try again!",
            });
    } else {
      console.log("✅ Price alert saved successfully:", data);
       toast({
              title: "✅ Alert Saved!",
              description: `Thank you! You'll get an alert when the price drops by ${priceDropPercentage}%.`,
            });
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    alert("⚠️ Something went wrong. Please try again later.");
  }

    setIsDialogOpen(false);
    setWhatsappNumber("");
    setPriceDropPercentage("");
  };

  const dummyData = {
  netmeds: {
    name: "Cetaphil Syndet Bar 75gm",
    price: "₹189.00",
    finalPrice: "₹189.00",
    originalPrice: "₹225.00",
    image: "https://www.netmeds.com/images/product-v1/150x150/379578/cetaphil_syndet_bar_75gm_45420_0_3.jpg",
    rating: 4.8,
    url: "https://www.netmeds.com/non-prescriptions/cetaphil-syndet-bar-75gm"
  },
  pharmeasy: {
    name: "Cetaphil Gentle Skin Cleanser | Dry To Normal Sensitive Skin | 125 Ml",
    price: "₹390.39",
    finalPrice: "₹390.39",
    originalPrice: "₹429.00",
    image: "https://cdn01.pharmeasy.in/dam/products_otc/I00623/cetaphil-gentle-skin-cleanser-125ml-2-1671740876.jpg?dim=256x256&q=75",
    rating: 4,
    url: "https://pharmeasy.in/health-care/products/cetaphil-gentle-skin-cleanser---125ml-11064"
  },
  tata1mg: {
    name: "Cetaphil Gentle Skin Cleanser | For Dry to Normal, Sensitive Skin",
    price: "₹399",
    finalPrice: "₹399",
    originalPrice: "₹429",
    image: null,
    rating: "4.4",
    url: "https://www.1mg.com/otc/cetaphil-gentle-skin-cleanser-for-dry-to-normal-sensitive-skin-otc533388"
  },
  truemeds: {
    name: "Cetaphil Gentle Skin Cleanser 125ml",
    price: "₹398.97",
    finalPrice: "₹398.97",
    originalPrice: "MRP ₹429",
    image: "https://assets.truemeds.in/Images/ProductImage/TM-LOES1-000749/cetaphil-gentle-skin-cleanser-125ml_cetaphil-gentle-skin-cleanser-125ml--TM-LOES1-000749_1.png?width=240",
    rating: 4.9,
    url: "https://www.truemeds.in/otc/cetaphil-gentle-skin-cleanser-125ml_cetaphil-gentle-skin-cleanser-125ml-tm-loes1-000749"
  }
};

  useEffect(() => {
    const loadDataFromLocalStorage = () => {
      let savedPriceData = JSON.parse(
        localStorage.getItem("priceData") || "{}"
      );

       if (!savedPriceData || Object.keys(savedPriceData).length === 0) {
      console.log("No data in localStorage — using dummyData");
      savedPriceData = dummyData;
    }

      const platformMap = {
        netmeds: "Netmeds",
        tata1mg: "Tata 1mg",
        pharmeasy: "PharmEasy",
        apollopharmacy: "Apollo Pharmacy",
        truemeds: "Truemeds",
        medkart: "Medkart"
      };

      const logoMap = {
        netmeds: netmeds,
        tata1mg: onemg,
        pharmeasy: pharmeasy,
        apollopharmacy: apollo,
        truemeds: truemeds,
        medkart: medkart
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
            platformMap[key] === 'Truemeds' ? 'FIRST25' : 'NEWUSER',
            rating: value.rating,
            deliveryTime: platformMap[key] === 'Netmeds' ? "By Tomorrow" : platformMap[key] === 'Tata 1mg' ? 'By Today' : 
            platformMap[key] === 'PharmEasy' ? 'By Tomorrow' : platformMap[key]=== 'Apollo Pharmacy' ? '1-2 days' : 
            platformMap[key] === 'Truemeds' ? '2-3 days' : 'By Tomorrow',
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

  const platformToColumn = {
  Netmeds: 'netmeds',
  "Tata 1mg": '1mg',
  "Apollo Pharmacy": 'apollo',
  PharmEasy: 'pharmeasy',
  Truemeds: 'truemeds',
  Medkart: 'medkart',
};

  const handleBuyNow = async (item) => {

    console.log('item--', item);
    
    
   try {
    // Get the column name for the platform
    const columnName = platformToColumn[item.platform];
    
    // Check if the platform is mapped
    if (!columnName) {
      console.error(`No column mapping found for platform: ${item.platform}`);
      return;
    }

    console.log('item.platform:', item.platform, 'Mapped columnName:', columnName);

    // Get the current click count for the platform
    const { data, error } = await supabase
      .from('total_clicks')
      .select(columnName)
      .eq('id', 1)
      .single();

    if (error) {
      console.error('Error fetching click count:', error);
      return;
    }

    // Increment the click count
    const currentCount = data[columnName] || 0; // Default to 0 if null
    const newCount = currentCount + 1;

    // Update the platform's click count
    const { error: updateError } = await supabase
      .from('total_clicks')
      .update({ [columnName]: newCount })
      .eq('id', 1);

    if (updateError) {
      console.error('Error updating click count:', updateError);
    } else {
      console.log(`Updated ${columnName} click count to ${newCount}`);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
  }

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
                    Best Deals
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
             
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${item.price === lowestPrice ? 'shadow-[0_0_40px_2px_rgba(57,255,20,0.9)] dark:shadow-strong' : ''} hover:scale-105 ${
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
                      onClick={()=> handleBuyNow(item)}
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

<div
style={{maxHeight:'fit-content', marginTop:'80px', padding:'30px'}}
  className="flex flex-col justify-center items-center text-center space-y-4 bg-[#F2F5F9] dark:bg-[#020817] dark:border dark:border-gray-800 rounded-2xl"
>
  <p className="text-sm text-muted-foreground">
    Prices are updated every hour. Last updated: 2 hours ago
  </p>

  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogTrigger asChild>
      <Button variant="hero" className="bg-green-600 hover:bg-green-700 text-white">
        <img src={whatsappIcon} alt="whatsapp-icon" className="h-8 w-8" />
        Get Price Alert on WhatsApp
      </Button>
    </DialogTrigger>

    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-xl">
          Set Price Alert on <span className="text-success text-green-400">WhatsApp</span>
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-6 py-4">
        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp Number</Label>
           <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground select-none">
                      +91
                    </span>
                    <Input
                      id="whatsapp"
                      placeholder="Enter your number"
                      type="phone"
                      value={whatsappNumber}
                     onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 10) {
                          setWhatsappNumber(value);
                        }
                      }}
                      maxLength={10}
                      className="pl-12"
                    />
                  </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="percentage">Price Drop Percentage</Label>
          <Select
            value={priceDropPercentage}
            onValueChange={setPriceDropPercentage}
          >
            <SelectTrigger id="percentage">
              <SelectValue placeholder="Select percentage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5%</SelectItem>
              <SelectItem value="15">15%</SelectItem>
              <SelectItem value="25">25%</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="hero"
          className="w-full"
          onClick={handleConfirm}
          disabled={!whatsappNumber || !priceDropPercentage}
        >
          Confirm Alert
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</div>

        </div>
      </div>

   
    </section>
  );
};

export default PriceComparison;
