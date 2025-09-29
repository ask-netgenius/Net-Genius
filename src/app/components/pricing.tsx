"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

const tiers = [
  {
    name: "Starter",
    price: "$2,500+",
    originalPrice: "Starting from",
    description:
      "Perfect for startups and small businesses needing a professional online presence.",
    features: [
      "Website Development",
      "SEO Optimization Basics",
      "DevOps Consultation",
      "Email Support",
      "1 Month Free Support",
    ],
    isFeatured: false,
    color: "text-blue-600",
  },
  {
    name: "Business",
    price: "$5,000+",
    originalPrice: "Starting from",
    description:
      "Ideal for growing businesses that need advanced features and dedicated support.",
    features: [
      "Full-Stack Application",
      "Advanced SEO",
      "CI/CD Implementation",
      "Cloud Solutions",
      "Priority Support",
      "3 Months Free Support",
    ],
    isFeatured: true,
    color: "text-primary",
  },
  {
    name: "Enterprise",
    price: "$10,000+",
    originalPrice: "Starting from",
    description:
      "Comprehensive solutions for large-scale organizations with complex needs.",
    features: [
      "Full Business Digitalization",
      "Custom Backend Systems",
      "Dedicated DevOps Team",
      "24/7 Support",
      "On-site Workshops",
      "6 Months Free Support",
    ],
    isFeatured: false,
    color: "text-purple-600",
  },
];

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<(typeof tiers)[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (tier: (typeof tiers)[0]) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleGetQuote = () => {
    setIsModalOpen(false);
    // Small delay to ensure modal closes before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">
            Our Pricing
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Flexible Plans for Every Ambition
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            We provide custom quotes to ensure our solutions are perfectly
            tailored to your unique requirements.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "flex flex-col cursor-pointer transition-all duration-300 group",
                "hover:shadow-xl hover:scale-105 hover:-translate-y-2",
                tier.isFeatured
                  ? "border-2 border-primary shadow-primary/20 shadow-2xl relative"
                  : "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              )}
              onClick={() => handleCardClick(tier)}
            >
              {tier.isFeatured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center relative">
                <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                  {tier.name}
                </CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">
                  {tier.description}
                </CardDescription>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    {tier.originalPrice}
                  </p>
                  <p
                    className={cn(
                      "text-3xl font-bold tracking-tight",
                      tier.color
                    )}
                  >
                    {tier.price}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center text-sm text-muted-foreground">
                  <p className="group-hover:text-primary transition-colors">
                    Click to view all features
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full transition-all duration-300"
                  variant={tier.isFeatured ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(tier);
                  }}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Modal for Plan Details */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={true}>
          <DialogContent
            className="sm:max-w-[500px] p-0 overflow-hidden"
            style={{ marginRight: 0 }}
          >
            {selectedTier && (
              <>
                {/* Header */}
                <div className="p-6 text-center">
                  <DialogTitle className="font-headline text-2xl mb-2">
                    {selectedTier.name}
                  </DialogTitle>
                  {selectedTier.isFeatured && (
                    <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium mb-3">
                      Most Popular
                    </div>
                  )}
                  <DialogDescription className="text-muted-foreground mb-4">
                    {selectedTier.description}
                  </DialogDescription>
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground">
                      {selectedTier.originalPrice}
                    </p>
                    <p className={cn("text-3xl font-bold", selectedTier.color)}>
                      {selectedTier.price}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="px-6 pb-6">
                  <div className="border-t pt-6">
                    <h4 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                      Includes
                    </h4>
                    <div className="space-y-2">
                      {selectedTier.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-muted/30 p-6 text-center">
                  <Button onClick={handleGetQuote} className="w-full">
                    Get Custom Quote
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Final pricing based on your specific requirements
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
