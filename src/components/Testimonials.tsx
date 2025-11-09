"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
type EmblaPluginType = any;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Delhi",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=600",
    initials: "PS",
    content:
      "I saved ₹2,500 on my monthly medicines! The medicine price compare feature of MedibBchat is incredibly accurate and easy to use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1534339480783-6816b68be29c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SU5ESUFOJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    initials: "RK",
    content:
      "I was looking for veterinary medicine online india, and I was reffered this site by one of my friend. The UI is super clean.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Patel",
    role: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    initials: "AP",
    content:
      "I came across this platform while i was looking for discount on rozagold 20 medicine and I'm glad that I came across this",
    rating: 5,
  },
  {
    id: 4,
    name: "Amit Verma",
    role: "Pune",
    avatar: "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fElORElBTiUyMG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    initials: "AV",
    content:
      "The coupon codes saved me over ₹3,000 last month. This platform is a must-have for anyone buying medicines regularly, it has all the coupons curated at one place!",
    rating: 5,
  },
  {
    id: 5,
    name: "Sneha Sah",
    role: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1646979201277-aca83fa543c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SU5ESUFOJTIwZmVtYWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    initials: "SR",
    content:
      "Iss platform ka medicine price comparison sabse best hai! Main hamesha medicine lene se pehle ek baar check karti hun.",
    rating: 5,
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Jaipur",
    avatar: "https://images.unsplash.com/photo-1753264328233-976aed64ca49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fElORElBTiUyMG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    initials: "VS",
    content:
      "I used to spend hours comparing prices manually. This platform does it in seconds and the savings are real! No more switching between tabs!",
    rating: 5,
  },
];

const Testimonials = () => {
  // 👇 Create plugin instance (cast to EmblaPluginType for TS safety)
  const autoplay = Autoplay({ delay: 3000 }) as unknown as EmblaPluginType;

  return (
    <section className="py-12 px-4 bg-[#F2F5F9] dark:bg-[#020817] border-t">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's what others have to say about our <a style={{color:'blue'}} href="https://medibachat.in/#price-comparison"><b>medicine price comparison</b></a> tool
          </p>
        </div>

        {/* ✅ Working Carousel with Autoplay */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2 h-full">
                  <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="pt-6 pb-6 flex flex-col h-full min-h-[280px]">
                      <div className="absolute top-4 right-4 text-primary/10">
                        <Quote size={48} />
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-primary"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed flex-1">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="hidden md:flex" /> */}
          {/* <CarouselNext className="hidden md:flex" /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
