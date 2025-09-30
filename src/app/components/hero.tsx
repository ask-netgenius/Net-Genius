"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Hero(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  // Motion values for reactive animations without re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for better performance
  const springConfig = { damping: 25, stiffness: 700 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Enhanced parallax transforms with different layers
  const parallaxX = useTransform(smoothMouseX, (val) => val * 0.03);
  const parallaxY = useTransform(smoothMouseY, (val) => val * 0.03);
  const parallaxX2 = useTransform(smoothMouseX, (val) => val * 0.015);
  const parallaxY2 = useTransform(smoothMouseY, (val) => val * 0.015);
  const parallaxX3 = useTransform(smoothMouseX, (val) => val * 0.01);
  const parallaxY3 = useTransform(smoothMouseY, (val) => val * 0.01);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to screen center
      const x = (event.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (event.clientY - window.innerHeight / 2) / window.innerHeight;
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden bg-background pt-32 sm:pt-0"
    >
      {/* --- Enhanced Background Elements --- */}
      <motion.div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Large Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/8 blur-3xl top-1/4 left-1/4"
          style={{ x: parallaxX, y: parallaxY }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-primary/12 blur-3xl bottom-1/4 right-1/4"
          style={{ x: parallaxX2, y: parallaxY2 }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 border border-primary/20 top-1/3 right-1/3"
          style={{
            x: parallaxX3,
            y: parallaxY3,
            rotate: useTransform(smoothMouseX, [0, 100], [0, 360]),
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        {mounted &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Subtle Light Rays */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* --- Enhanced Content --- */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 mt-16 sm:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
      >
        {/* Floating Badge - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Welcome to the Future
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight font-headline sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-primary/80 leading-tight"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Transform Your Digital Presence
        </motion.h1>

        <motion.p
          className="mt-6 sm:mt-8 text-base sm:text-lg leading-6 sm:leading-7 text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Net Genius delivers cutting-edge software solutions, cloud
          infrastructure, and digital innovation. Elevate your business with
          expert development services.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              <Link href="#contact" className="relative overflow-hidden">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                Get Started
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto group border border-primary/20 hover:border-primary/40 backdrop-blur-sm"
            >
              <Link href="#services" className="flex items-center">
                Our Services
                <motion.span
                  className="ml-2"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MoveRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats or Features */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10"
              whileHover={{
                scale: 1.05,
                borderColor: "hsl(var(--primary)/0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-xs text-muted-foreground mb-1 group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <motion.div
            className="w-4 h-7 border-2 border-primary/40 rounded-full flex justify-center group-hover:border-primary/60 transition-colors"
            whileHover={{ borderColor: "hsl(var(--primary))" }}
          >
            <motion.div
              className="w-0.5 h-2 bg-primary/60 rounded-full mt-1"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
