import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-32 sm:py-40 lg:py-48">
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background"></div>
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] opacity-5">
                <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/20 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute h-[300px] w-[300px] rounded-full bg-primary/30 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"></div>
            </div>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground">
          Transform Your Digital Presence
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          We are Vertex Digital, a team of innovators dedicated to building the future of the web. From sleek backends to stunning frontends, we deliver digital solutions that drive results.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#services">
              Our Services <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
