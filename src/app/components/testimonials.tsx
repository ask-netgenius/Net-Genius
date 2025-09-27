import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Vertex Digital revolutionized our online platform. Their expertise and dedication are second to none. Our user engagement has skyrocketed since the relaunch.",
    name: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    imageId: "testimonial-1",
  },
  {
    quote: "The backend solution they developed for us is incredibly robust and scalable. It's the backbone of our operations, and it has performed flawlessly.",
    name: "Michael Chen",
    title: "CTO, DataStream Solutions",
    imageId: "testimonial-2",
  },
  {
    quote: "Working with Vertex Digital felt like a true partnership. They understood our vision and translated it into a digital experience that exceeded our expectations.",
    name: "Emily Rodriguez",
    title: "Founder, Creative Co.",
    imageId: "testimonial-3",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">What Our Clients Say</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Trusted by Industry Leaders
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const testimonialImage = PlaceHolderImages.find(
                (p) => p.id === testimonial.imageId
              );
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-2 border-card">
                      <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center">
                        <p className="text-lg md:text-xl font-medium leading-8 text-foreground">
                          “{testimonial.quote}”
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                          <Avatar>
                            {testimonialImage && (
                              <AvatarImage
                                src={testimonialImage.imageUrl}
                                alt={testimonial.name}
                                data-ai-hint={testimonialImage.imageHint}
                              />
                            )}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
