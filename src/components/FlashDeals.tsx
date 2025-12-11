import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Clock, Zap } from "lucide-react";

const FlashDeals = () => {
  const flashDeals = [
    {
      id: 1,
      medicineName: <>Microtek Non Contact Infrared <br /> Thermometer (IT - 1520)</>,
      originalPrice: 1778,
      discountedPrice: 1245,
      discount: 30,
      timeLeft: "2h 15m",
      platform: "Netmeds",
      stock: "Limited Stock",
      image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/B5YIxugE0x-microtek_non_contact_infrared_thermometer_it_1520_0_0.jpg",
      product_url: "https://bitli.in/FyJ6upY"
    },
    {
      id: 2,
      medicineName: <>AccuSure Finger Tip <br /> Pulse Oximeter</>,
      originalPrice: 1228,
      discountedPrice: 921,
      discount: 25,
      timeLeft: "4h 30m",
      platform: "Netmeds",
      stock: "In Stock",
      image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/0OFPfpj_q2-accusure_pulse_oximeter_117144_0_6.jpg",
      product_url: "https://bitli.in/G7BRbYI"
    },
    {
      id: 3,
      medicineName: <>Cetaphil Gentle Cleanser For  <br /> Dry to Normal Skin 250 ml</>,
      originalPrice: 769,
      discountedPrice: 553,
      discount: 28,
      timeLeft: "1h 45m",
      platform: "Netmeds",
      stock: "In Stock",
      image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/-ZJepyUvot-cetaphil_gentle_skin_cleanser_for_dry_to_normal_sensitive_skin_250_ml_418417_0_1.jpg",
      product_url: "https://bitli.in/ZwxvmU0"
    },
    {
      id: 4,
      medicineName: <>Omron Hem 7121j Blood <br /> Pressure Monitor 1</>,
      originalPrice: 2315,
      discountedPrice: 2264,
      discount: 2.2,
      timeLeft: "3h 20m",
      platform: "Truemeds",
      stock: "Limited Stock",
      image: "https://m.media-amazon.com/images/I/411E+BZqduL._SY300_SX300_QL70_FMwebp_.jpg",
      product_url: "https://bitli.in/hm4fTy1"
    },
    {
      id: 5,
      medicineName: <>Boroline Sx Antiseptic <br />Ayurvedic Cream 40gm</>,
      originalPrice: 79,
      discountedPrice: 70,
      discount: 11,
      timeLeft: "5h 10m",
      platform: "Truemeds",
      stock: "In Stock",
      image: "https://m.media-amazon.com/images/I/81l1oUdZG8L._SX679_.jpg",
      product_url: "https://bitli.in/Bo91ch2"
    }
  ];

  return (
    <section className="py-16 bg-[#F2F5F9] dark:bg-[#020817] border-t border-primary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Flash Deals
            </h2>
            <Zap className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Limited time offers on essential medicines. Grab these deals before they expire!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {flashDeals.map((deal) => (
                <CarouselItem key={deal.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-soft bg-gradient-to-br from-card to-card/80 max-w-md">
                    <CardContent className="p-6">
                      {/* Timer and Discount Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="destructive" className="text-xs font-semibold animate-pulse">
                          <Clock className="h-3 w-3 mr-1" />
                          {deal.timeLeft}
                        </Badge>
                        <Badge className="bg-primary text-primary-foreground text-xs font-bold">
                          {deal.discount}% OFF
                        </Badge>
                      </div>

                      {/* Medicine Info */}
                      <div className="mb-4 flex justify-between">
                       <div>
                         <h3 className="font-semibold text-lg mb-2 text-foreground">
                          {deal.medicineName}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Available on {deal.platform}
                        </p>
                        <p
  className={`text-xs font-medium ${
    deal.stock === "Limited Stock" ? "text-red-500" : "text-green-500"
  }`}
>
  {deal.stock}
</p>

                       </div>

                       <div>
                        <img className="border-gray-300 rounded-lg" width={'100px'} src={deal.image} alt="" />
                       </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl font-bold text-primary">
                            ₹{deal.discountedPrice}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{deal.originalPrice}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          You save ₹{deal.originalPrice - deal.discountedPrice}
                        </p>
                      </div>

                      {/* CTA Button */}
                     <a target="_blank" href={deal.product_url}>
                       <Button 
                        className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold"
                        size="sm"
                      >
                        Grab Deal Now
                      </Button>
                     </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40" />
            <CarouselNext className="-right-4 md:-right-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40" />
          </Carousel>
        </div>

        {/* View All Deals */}
        {/* <div className="text-center mt-8">
          <Button variant="outline" className="border-primary/30 hover:border-primary/50">
            View All Flash Deals
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default FlashDeals;