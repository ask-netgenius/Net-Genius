import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  { name: "Innovation", description: "We push the boundaries of technology to create novel solutions." },
  { name: "Quality", description: "Our commitment to excellence ensures robust and reliable results." },
  { name: "Partnership", description: "We collaborate closely with our clients to achieve shared success." },
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === "about-us");

  return (
    <section id="about" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
              Crafting Digital Excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              At Vertex Digital, we're more than just developers; we're architects of the digital world. Our mission is to empower businesses by transforming their ideas into powerful, scalable, and elegant digital solutions.
            </p>
            <div className="mt-10 space-y-8">
              {values.map((value) => (
                <div key={value.name} className="flex gap-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-foreground">{value.name}</h3>
                    <p className="mt-1 text-base leading-7 text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    data-ai-hint={aboutImage.imageHint}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
