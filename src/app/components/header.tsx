"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-lg group-hover:shadow-primary/20 group-hover:scale-105 transition-all duration-300">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-headline group-hover:text-primary transition-colors duration-300">
              Net Genius
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-muted/50 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all duration-300"></span>
              </Link>
            ))}
            <div className="ml-2">
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Link href="#ai-advisor" className="flex items-center gap-2">
                  <span className="relative">
                    AI Advisor
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  </span>
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={cn(
                    "h-6 w-6 absolute transition-all duration-300",
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "h-6 w-6 absolute transition-all duration-300",
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  )}
                />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2 p-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/30 mt-2">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
              >
                <Link
                  href="#ai-advisor"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="relative">
                    AI Advisor
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  </span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
