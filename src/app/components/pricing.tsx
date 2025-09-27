import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "Custom",
    description: "Perfect for startups and small businesses needing a professional online presence.",
    features: ["Website Development", "SEO Optimization Basics", "DevOps Consultation", "Email Support"],
    isFeatured: false,
  },
  {
    name: "Business",
    price: "Custom",
    description: "Ideal for growing businesses that need advanced features and dedicated support.",
    features: ["Full-Stack Application", "Advanced SEO", "CI/CD Implementation", "Cloud Solutions", "Priority Support"],
    isFeatured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive solutions for large-scale organizations with complex needs.",
    features: ["Full Business Digitalization", "Custom Backend Systems", "Dedicated DevOps Team", "24/7 Support", "On-site Workshops"],
    isFeatured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Flexible Plans for Every Ambition
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide custom quotes to ensure our solutions are perfectly tailored to your unique requirements.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={cn("flex flex-col", tier.isFeatured && "border-2 border-primary shadow-primary/20 shadow-2xl")}>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <CardDescription className="mt-2">{tier.description}</CardDescription>
                <p className="mt-4 text-4xl font-bold tracking-tight text-foreground">{tier.price}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={tier.isFeatured ? "default" : "secondary"}>
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
