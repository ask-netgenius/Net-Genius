import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Services from "@/app/components/services";
import Portfolio from "@/app/components/portfolio";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import AiAdvisor from "./components/ai-advisor";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <AiAdvisor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
