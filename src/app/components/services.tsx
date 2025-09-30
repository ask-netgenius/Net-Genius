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
      "Comprehensive end-to-end web application development services including responsive React frontends, Node.js backends, database design, and seamless API integration. Our expert developers create scalable, modern web solutions.",
  },
  {
    icon: ServerCog,
    title: "Custom Backend Development",
    description:
      "Professional backend development services specializing in scalable server-side applications, RESTful APIs, microservices architecture, database optimization, and high-performance system design for enterprise solutions.",
  },
  {
    icon: GitMerge,
    title: "DevOps & Infrastructure",
    description:
      "Complete DevOps solutions including CI/CD pipeline setup, Docker containerization, Kubernetes orchestration, cloud infrastructure automation, monitoring, and deployment optimization for improved development efficiency.",
  },
  {
    icon: LineChart,
    title: "SEO Optimization Services",
    description:
      "Professional SEO services to boost your website's search engine rankings. Technical SEO audits, keyword optimization, content strategy, local SEO, and comprehensive digital marketing to increase organic traffic and conversions.",
  },
  {
    icon: Briefcase,
    title: "Business Digitalization",
    description:
      "Digital transformation consulting and custom software solutions to modernize business operations. Process automation, workflow optimization, digital strategy implementation, and technology integration for competitive advantage.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description:
      "Expert cloud services including AWS, Google Cloud Platform, and Microsoft Azure implementations. Cloud migration, serverless architecture, auto-scaling solutions, and cloud-native application development.",
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
