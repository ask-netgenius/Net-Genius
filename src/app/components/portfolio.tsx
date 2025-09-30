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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "E-commerce Platform Overhaul",
    description:
      "A complete redesign and backend migration for a leading online retailer, resulting in a 40% performance boost and enhanced user experience.",
    imageId: "portfolio-1",
    tags: ["Full-Stack", "Cloud Solutions", "React", "Node.js"],
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Developed a real-time data analytics dashboard for a B2B SaaS company, enabling data-driven decisions with interactive visualizations.",
    imageId: "portfolio-2",
    tags: ["Backend", "DevOps", "Analytics", "AWS"],
  },
  {
    title: "Healthcare Digitalization",
    description:
      "Created a HIPAA-compliant patient management system, streamlining operations for a major hospital network with secure data handling.",
    imageId: "portfolio-3",
    tags: ["Business Digitalization", "Security", "Healthcare", "Compliance"],
  },
  {
    title: "Startup SEO Strategy",
    description:
      "Executed a comprehensive SEO strategy for a fintech startup, achieving exceptional organic growth and market visibility.",
    imageId: "portfolio-4",
    tags: ["SEO", "Marketing", "Analytics", "Growth"],
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Built an intelligent customer service chatbot using machine learning, reducing response time by 80% and improving satisfaction.",
    imageId: "portfolio-1",
    tags: ["AI/ML", "Customer Service", "Automation", "NLP"],
  },
  {
    title: "Cloud Migration Project",
    description:
      "Migrated legacy infrastructure to AWS cloud, resulting in 50% cost reduction and 99.9% uptime for a financial services company.",
    imageId: "portfolio-2",
    tags: ["Cloud Migration", "AWS", "DevOps", "Infrastructure"],
  },
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  // Triple projects for seamless infinite scrolling
  const duplicatedProjects = [...projects, ...projects, ...projects];

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
          [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
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
            Our Portfolio
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Success Stories That Inspire
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative projects that showcase our
            expertise in delivering exceptional digital solutions.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
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
              delay: 3000,
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
            className="portfolio-swiper"
          >
            {duplicatedProjects.map((project, index) => {
              const projectImage = PlaceHolderImages.find(
                (p) => p.id === project.imageId
              );
              return (
                <SwiperSlide
                  key={`portfolio-${index}-${project.title}`}
                  className="max-w-md"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group h-[400px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-primary/10 hover:border-primary/30 bg-background/70 backdrop-blur-sm flex flex-col">
                      <CardContent className="p-0 relative flex-shrink-0">
                        {projectImage && (
                          <div className="relative overflow-hidden">
                            <Image
                              src={projectImage.imageUrl}
                              alt={project.title}
                              width={400}
                              height={250}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                              <Button
                                size="sm"
                                variant="secondary"
                                className="bg-background/80 backdrop-blur-sm hover:bg-background"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                      <CardHeader className="flex-1 flex flex-col">
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground line-clamp-3 flex-1">
                          {project.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
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
