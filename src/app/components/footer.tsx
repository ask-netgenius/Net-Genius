import {
  Code,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-xl">
                  Net Genius
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pr-2">
                Innovative web development and comprehensive digital solutions
                for modern businesses.
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://twitter.com/vertexdigital"
                  className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://github.com/vertexdigital"
                  className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/vertexdigital"
                  className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://instagram.com/vertexdigital"
                  className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base">
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Full-Stack Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    DevOps Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Business Digitalization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-base">
                Get in Touch
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    contact@vertexdigital.dev
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">(555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    123 Tech Avenue
                    <br />
                    Silicon Valley, CA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground text-center lg:text-left">
              <span>&copy; {currentYear} Net Genius. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span>Crafted with ❤️ for digital excellence</span>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/payment-policy"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Payment Policy
              </Link>
              <Link
                href="/refund-policy"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
