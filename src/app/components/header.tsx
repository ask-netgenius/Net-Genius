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
      // Close menu when scrolling
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
                  <span className="relative">AI Advisor</span>
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
              className={cn(
                "relative w-12 h-12 hover:bg-primary/10 transition-all duration-300 rounded-xl",
                isMenuOpen && "bg-primary/10 scale-95"
              )}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu
                  className={cn(
                    "h-5 w-5 absolute transition-all duration-300 ease-out",
                    isMenuOpen
                      ? "rotate-180 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "h-5 w-5 absolute transition-all duration-300 ease-out",
                    isMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "rotate-180 scale-0 opacity-0"
                  )}
                />
              </div>
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {/* Ripple effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl bg-primary/20 transition-all duration-300",
                  isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-[60] w-screen h-screen transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-screen w-full">
          {/* Header with close button */}
          <div
            className={`h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-background border-b border-border/50 w-full transition-all duration-300 delay-100 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-lg group-hover:shadow-primary/20 group-hover:scale-105 transition-all duration-300">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-headline group-hover:text-primary transition-colors duration-300">
                Net Genius
              </span>
            </Link>

            {/* Close Button */}
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="w-12 h-12 hover:bg-primary/10 transition-all duration-300 rounded-xl"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Menu content */}
          <nav
            className={`flex flex-col flex-1 px-6 py-8 space-y-6 bg-background w-full transition-all duration-400 delay-200 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-center text-2xl font-medium text-foreground hover:text-primary transition-all duration-300 py-4 border-b border-border/20 w-full transform ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${300 + index * 100}ms`
                    : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}

            <div
              className={`pt-8 w-full transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${300 + navLinks.length * 100 + 100}ms`
                  : "0ms",
              }}
            >
              <Button
                asChild
                size="lg"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-lg font-semibold"
              >
                <Link href="#ai-advisor" onClick={() => setIsMenuOpen(false)}>
                  AI Advisor
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
