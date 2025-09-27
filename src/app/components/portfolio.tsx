import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Platform Overhaul",
    description: "A complete redesign and backend migration for a leading online retailer, resulting in a 40% performance boost.",
    imageId: "portfolio-1",
    tags: ["Full-Stack", "Cloud Solutions"],
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Developed a real-time data analytics dashboard for a B2B SaaS company, enabling data-driven decisions.",
    imageId: "portfolio-2",
    tags: ["Backend", "DevOps"],
  },
  {
    title: "Healthcare Digitalization",
    description: "Created a HIPAA-compliant patient management system, streamlining operations for a major hospital network.",
    imageId: "portfolio-3",
    tags: ["Business Digitalization", "Security"],
  },
  {
    title: "Startup SEO Strategy",
    description: "Executed a comprehensive SEO strategy for a fintech startup, achieving a 300% increase in organic traffic.",
    imageId: "portfolio-4",
    tags: ["SEO", "Marketing"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Work</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Success Stories We've Written
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore a selection of projects that showcase our commitment to quality and innovation.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((p) => p.id === project.imageId);
            return (
              <Card key={project.title} className="group overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:border-primary/50">
                <CardContent className="p-0">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      width={600}
                      height={400}
                      data-ai-hint={projectImage.imageHint}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </CardContent>
                <CardHeader>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
