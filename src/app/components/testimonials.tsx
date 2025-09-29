"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Net Genius revolutionized our online platform. Their expertise and dedication are second to none. Our user engagement has skyrocketed since the relaunch.",
    name: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    imageId: "testimonial-1",
    rating: 5,
    company: "Innovate Inc.",
  },
  {
    quote:
      "The backend solution they developed for us is incredibly robust and scalable. It's the backbone of our operations, and it has performed flawlessly.",
    name: "Michael Chen",
    title: "CTO, DataStream Solutions",
    imageId: "testimonial-2",
    rating: 5,
    company: "DataStream Solutions",
  },
  {
    quote:
      "Working with Net Genius felt like a true partnership. They understood our vision and translated it into a digital experience that exceeded our expectations.",
    name: "Emily Rodriguez",
    title: "Founder, Creative Co.",
    imageId: "testimonial-3",
    rating: 5,
    company: "Creative Co.",
  },
  {
    quote:
      "Their attention to detail and innovative approach transformed our entire digital presence. The results speak for themselves - 200% increase in conversions.",
    name: "David Park",
    title: "Marketing Director, TechFlow",
    imageId: "testimonial-1",
    rating: 5,
    company: "TechFlow",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden bg-card/50"
    >
      {/* Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-bl from-background via-card/30 to-background" />

        {/* Floating orb */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-primary/5 blur-3xl bottom-1/4 right-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle particles */}
        {mounted &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/25 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">
            What Our Clients Say
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Trusted by Industry Leaders
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say
            about their transformative experiences.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonial Cards */}
          <div className="overflow-hidden h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Card className="border-primary/10 bg-card/70 backdrop-blur-sm h-[400px]">
                  <CardContent className="p-8 md:p-12 h-full flex items-center">
                    <div className="flex flex-col justify-center h-full space-y-6">
                      {/* Quote Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Quote className="h-8 w-8 text-primary/60 mb-4" />
                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground line-clamp-4">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>
                      </motion.div>

                      {/* Rating */}
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                        <span className="text-sm text-muted-foreground ml-2">
                          {testimonials[currentIndex].rating}.0 out of 5
                        </span>
                      </motion.div>

                      {/* Author Info */}
                      <motion.div
                        className="flex items-center gap-4 pt-4 border-t border-primary/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          {PlaceHolderImages.find(
                            (p) => p.id === testimonials[currentIndex].imageId
                          ) && (
                            <AvatarImage
                              src={
                                PlaceHolderImages.find(
                                  (p) =>
                                    p.id === testimonials[currentIndex].imageId
                                )?.imageUrl
                              }
                              alt={testimonials[currentIndex].name}
                            />
                          )}
                          <AvatarFallback>
                            {testimonials[currentIndex].name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground text-lg">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].title}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
