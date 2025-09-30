import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeXml,
  ServerCog,
  GitMerge,
  LineChart,
  Briefcase,
  Cloud,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: CodeXml,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development with React frontends, Node.js backends, and seamless API integration for modern, scalable solutions.",
  },
  {
    icon: ServerCog,
    title: "Custom Backend Development",
    description:
      "Scalable server-side applications with RESTful APIs, microservices architecture, and optimized database design for enterprise solutions.",
  },
  {
    icon: GitMerge,
    title: "DevOps & Infrastructure",
    description:
      "Complete CI/CD pipelines, Docker containerization, cloud automation, and deployment optimization for improved development efficiency.",
  },
  {
    icon: LineChart,
    title: "SEO Optimization Services",
    description:
      "Boost search rankings with technical SEO audits, keyword optimization, and comprehensive digital marketing strategies.",
  },
  {
    icon: Briefcase,
    title: "Business Digitalization",
    description:
      "Digital transformation consulting with process automation, workflow optimization, and technology integration for competitive advantage.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description:
      "Expert cloud services for AWS, GCP, and Azure including migration, serverless architecture, and cloud-native development.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-background relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">
            Our Digital Services Expertise
          </h2>
          <h1 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Comprehensive Digital Solutions for Modern Businesses
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Net Genius offers a complete suite of professional digital services
            including software development, cloud solutions, DevOps, SEO
            optimization, and business digitalization to transform your business
            operations.
          </p>
        </header>

        <div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {services.map((service, index) => (
            <article
              key={service.title}
              className="flex flex-col text-center group hover:scale-105 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl bg-background/60 backdrop-blur-sm border-0 relative overflow-hidden rounded-lg"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              itemScope
              itemType="https://schema.org/Service"
              role="listitem"
            >
              {/* Card Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <header className="items-center pb-4 p-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors duration-300 mb-4 relative mx-auto w-fit">
                  <service.icon
                    className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3
                  className="font-headline text-xl group-hover:text-primary transition-colors duration-300"
                  itemProp="name"
                >
                  {service.title}
                </h3>
              </header>

              <div className="flex-grow px-6 pb-6">
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
