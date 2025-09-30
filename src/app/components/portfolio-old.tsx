"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: "E-commerce Platform Overhaul",
    description:
      "A complete redesign and backend migration for a leading online retailer, resulting in a 40% performance boost and enhanced user experience.",
    imageId: "portfolio-1",
    tags: ["Full-Stack", "Cloud Solutions", "React", "Node.js"],
    metrics: { performance: "+40%", conversion: "+25%", users: "10K+" },
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Developed a real-time data analytics dashboard for a B2B SaaS company, enabling data-driven decisions with interactive visualizations.",
    imageId: "portfolio-2",
    tags: ["Backend", "DevOps", "Analytics", "AWS"],
    metrics: { dataPoints: "1M+", response: "< 200ms", uptime: "99.9%" },
  },
  {
    title: "Healthcare Digitalization",
    description:
      "Created a HIPAA-compliant patient management system, streamlining operations for a major hospital network with secure data handling.",
    imageId: "portfolio-3",
    tags: ["Business Digitalization", "Security", "Healthcare", "Compliance"],
    metrics: { patients: "50K+", efficiency: "+60%", security: "100%" },
  },
  {
    title: "Startup SEO Strategy",
    description:
      "Executed a comprehensive SEO strategy for a fintech startup, achieving exceptional organic growth and market visibility.",
    imageId: "portfolio-4",
    tags: ["SEO", "Marketing", "Analytics", "Growth"],
    metrics: { traffic: "+300%", keywords: "500+", ranking: "Top 3" },
  },
  {
    title: "Mobile Banking App",
    description:
      "Built a secure, user-friendly mobile banking application with biometric authentication and real-time transaction processing.",
    imageId: "portfolio-1",
    tags: ["Mobile", "Fintech", "Security", "React Native"],
    metrics: { users: "25K+", transactions: "1M+", rating: "4.8★" },
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Developed an intelligent customer service chatbot using natural language processing, reducing support tickets by 70%.",
    imageId: "portfolio-2",
    tags: ["AI/ML", "NLP", "Python", "Integration"],
    metrics: { accuracy: "95%", response: "< 2s", reduction: "70%" },
  },
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
    >
      {/* Background Elements - matching hero/about style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/50 to-background" />

        {/* Subtle floating orb */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/4 blur-3xl top-1/4 left-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle particles */}
        {mounted &&
          [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
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
            Our Work
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Success Stories We've Written
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative projects that showcase our
            expertise in delivering exceptional digital solutions.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Projects Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getCurrentProjects().map((project, index) => {
                  const projectImage = PlaceHolderImages.find(
                    (p) => p.id === project.imageId
                  );
                  return (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm flex flex-col">
                        <CardContent className="p-0 relative flex-shrink-0">
                          {projectImage && (
                            <div className="relative overflow-hidden">
                              <Image
                                src={projectImage.imageUrl}
                                alt={projectImage.description}
                                width={600}
                                height={300}
                                data-ai-hint={projectImage.imageHint}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  className="rounded-full"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>

                        <CardHeader className="pb-3 flex-grow">
                          <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors line-clamp-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {project.description.length > 100
                              ? `${project.description.substring(0, 80)}...`
                              : project.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="pt-0 space-y-4 flex-shrink-0">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 min-h-[28px]">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs px-2 py-1"
                              >
                                +{project.tags.length - 3}
                              </Badge>
                            )}
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-primary/10">
                            {Object.entries(project.metrics).map(
                              ([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-sm font-semibold text-primary truncate">
                                    {value}
                                  </div>
                                  <div className="text-xs text-muted-foreground capitalize truncate">
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
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

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to start your own success story?
          </p>
          <Button size="lg" className="shadow-lg shadow-primary/25">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
