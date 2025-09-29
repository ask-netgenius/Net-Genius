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
      "End-to-end development of web applications, from responsive front-ends to robust back-ends.",
  },
  {
    icon: ServerCog,
    title: "Custom Backend Development",
    description:
      "Designing and building scalable, secure, and high-performance server-side applications and APIs.",
  },
  {
    icon: GitMerge,
    title: "DevOps",
    description:
      "Streamlining development and deployment processes with CI/CD, automation, and infrastructure management.",
  },
  {
    icon: LineChart,
    title: "SEO Optimization",
    description:
      "Improving your website's visibility on search engines to attract more organic traffic and grow your audience.",
  },
  {
    icon: Briefcase,
    title: "Business Digitalization",
    description:
      "Transforming your business operations with custom digital solutions to enhance efficiency and productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Leveraging cloud platforms like AWS, GCP, and Azure for scalable, reliable, and cost-effective infrastructure.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">
            Our Expertise
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            A Solution for Every Need
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of services to bring your digital
            vision to life.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="flex flex-col text-center group hover:scale-105 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl bg-background/60 backdrop-blur-sm border-0 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <CardHeader className="items-center pb-4">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors duration-300 mb-4 relative">
                  <service.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
