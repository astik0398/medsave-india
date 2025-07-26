import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Truck, Clock } from "lucide-react";

const PriceComparison = () => {
  // Mock data for demonstration
  const medicineData = {
    name: "Paracetamol 650mg",
    genericName: "Acetaminophen",
    manufacturer: "Cipla Ltd",
    packSize: "Strip of 15 tablets"
  };

  const priceData = [
    {
      platform: "Netmeds",
      logo: "🏥", // Could be replaced with actual logo
      price: 45.50,
      originalPrice: 52.00,
      discount: 12,
      couponCode: "SAVE10",
      rating: 4.5,
      deliveryTime: "24 hours",
      inStock: true,
      buyUrl: "#"
    },
    {
      platform: "Tata 1mg",
      logo: "💊",
      price: 43.20,
      originalPrice: 50.00,
      discount: 14,
      couponCode: "FIRST20",
      rating: 4.7,
      deliveryTime: "Same day",
      inStock: true,
      buyUrl: "#"
    },
    {
      platform: "PharmEasy",
      logo: "🔬",
      price: 47.80,
      originalPrice: 55.00,
      discount: 13,
      couponCode: "HEALTH15",
      rating: 4.3,
      deliveryTime: "2-3 days",
      inStock: true,
      buyUrl: "#"
    },
    {
      platform: "Apollo Pharmacy",
      logo: "⚕️",
      price: 44.90,
      originalPrice: 51.00,
      discount: 12,
      couponCode: "APOLLO25",
      rating: 4.6,
      deliveryTime: "24 hours",
      inStock: false,
      buyUrl: "#"
    }
  ];

  const lowestPrice = Math.min(...priceData.map(item => item.price));

  return (
    <section id="price-comparison" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Price Comparison Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare prices for {medicineData.name} across India's leading e-pharmacy platforms
          </p>
        </div>

        {/* Medicine Info */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="p-6 shadow-soft">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{medicineData.name}</h3>
                <p className="text-muted-foreground mb-1">Generic: {medicineData.genericName}</p>
                <p className="text-muted-foreground mb-1">Manufacturer: {medicineData.manufacturer}</p>
                <p className="text-muted-foreground">{medicineData.packSize}</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Lowest Price</p>
                  <p className="text-3xl font-bold text-secondary">₹{lowestPrice}</p>
                  <Badge variant="secondary" className="mt-1">Best Deal</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Price Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {priceData.map((item, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-medium hover:scale-105 ${
              item.price === lowestPrice ? 'ring-2 ring-secondary shadow-medium' : ''
            } ${!item.inStock ? 'opacity-75' : ''}`}>
              {item.price === lowestPrice && (
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                  Best Price
                </Badge>
              )}
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{item.logo}</span>
                    <h3 className="font-semibold text-foreground">{item.platform}</h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{item.rating}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-baseline space-x-2 mb-1">
                      <span className="text-2xl font-bold text-foreground">₹{item.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.discount}% OFF
                    </Badge>
                  </div>

                  {item.couponCode && (
                    <div className="p-2 bg-primary-glow rounded-md">
                      <p className="text-xs text-primary font-medium">Coupon: {item.couponCode}</p>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Truck className="h-4 w-4" />
                    <span>{item.deliveryTime}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span className={item.inStock ? 'text-secondary' : 'text-destructive'}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <Button 
                    className="w-full" 
                    variant={item.inStock ? "default" : "outline"}
                    disabled={!item.inStock}
                  >
                    {item.inStock ? (
                      <>
                        Buy Now <ExternalLink className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      'Notify When Available'
                    )}
                  </Button>
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