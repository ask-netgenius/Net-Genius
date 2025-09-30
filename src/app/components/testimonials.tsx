"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

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
  {
    quote:
      "Outstanding service and delivery. They not only met our requirements but exceeded them. Our application performs better than we ever imagined.",
    name: "Lisa Thompson",
    title: "Product Manager, CloudTech",
    imageId: "testimonial-2",
    rating: 5,
    company: "CloudTech",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  // Triple testimonials for seamless infinite scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
    >
      {/* Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-bl from-background via-background/50 to-background" />

        {/* Subtle floating orb */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/4 blur-3xl bottom-1/4 right-1/4"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle particles */}
        {mounted &&
          [...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
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
            Client Testimonials
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Trusted by Industry Leaders
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with Net Genius.
          </p>
        </motion.div>

        {/* Testimonials Swiper */}
        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            loopAdditionalSlides={2}
            watchSlidesProgress={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, EffectCoverflow]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                effect: "slide",
              },
              768: {
                slidesPerView: 1,
                effect: "slide",
              },
              1024: {
                slidesPerView: "auto",
                effect: "coverflow",
              },
            }}
            className="testimonials-swiper"
          >
            {duplicatedTestimonials.map((testimonial, index) => {
              const testimonialImage = PlaceHolderImages.find(
                (p) => p.id === testimonial.imageId
              );
              return (
                <SwiperSlide
                  key={`testimonial-${index}-${testimonial.name}`}
                  className="max-w-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-primary/10 bg-background/70 backdrop-blur-sm h-[400px] p-8 flex flex-col justify-between">
                      <CardContent className="p-0 flex-1 flex flex-col justify-between">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-6">
                          {/* <div className="p-3 bg-primary/10 rounded-full"> */}
                          <Quote className="h-8 w-8 text-primary" />
                          {/* </div> */}
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-lg leading-relaxed text-center text-foreground mb-6 flex-1 flex items-center">
                          <p>"{testimonial.quote}"</p>
                        </blockquote>

                        {/* Rating Stars */}
                        <div className="flex justify-center items-center mb-6">
                          <div className="flex space-x-1 mr-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {testimonial.rating}.0 out of 5
                          </span>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center justify-center">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage
                              src={
                                testimonialImage
                                  ? PlaceHolderImages.find(
                                      (p) => p.id === testimonial.imageId
                                    )?.imageUrl
                                  : undefined
                              }
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-center">
                            <p className="font-semibold text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border border-primary/20 hover:border-primary/40 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
