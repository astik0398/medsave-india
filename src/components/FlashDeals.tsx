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
      medicineName: "Paracetamol 500mg",
      originalPrice: 150,
      discountedPrice: 89,
      discount: 40,
      timeLeft: "2h 15m",
      platform: "Netmeds",
      stock: "Limited Stock"
    },
    {
      id: 2,
      medicineName: "Vitamin D3 Tablets",
      originalPrice: 299,
      discountedPrice: 199,
      discount: 33,
      timeLeft: "4h 30m",
      platform: "PharmEasy",
      stock: "Only 12 left"
    },
    {
      id: 3,
      medicineName: "Azithromycin 500mg",
      originalPrice: 180,
      discountedPrice: 125,
      discount: 30,
      timeLeft: "1h 45m",
      platform: "1mg",
      stock: "Hurry! 5 left"
    },
    {
      id: 4,
      medicineName: "Omeprazole 20mg",
      originalPrice: 120,
      discountedPrice: 79,
      discount: 34,
      timeLeft: "3h 20m",
      platform: "Truemeds",
      stock: "Limited Stock"
    },
    {
      id: 5,
      medicineName: "Calcium + Vitamin D",
      originalPrice: 250,
      discountedPrice: 175,
      discount: 30,
      timeLeft: "5h 10m",
      platform: "Apollo",
      stock: "Only 8 left"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
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
                  <Card className="h-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-soft bg-gradient-to-br from-card to-card/80">
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
                      <div className="mb-4">
                        <h3 className="font-semibold text-lg mb-2 text-foreground">
                          {deal.medicineName}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Available on {deal.platform}
                        </p>
                        <p className="text-xs text-destructive font-medium">
                          {deal.stock}
                        </p>
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
                      <Button 
                        className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold"
                        size="sm"
                      >
                        Grab Deal Now
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* View All Deals */}
        <div className="text-center mt-8">
          <Button variant="outline" className="border-primary/30 hover:border-primary/50">
            View All Flash Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;