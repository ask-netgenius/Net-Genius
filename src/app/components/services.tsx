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
    description: "End-to-end development of web applications, from responsive front-ends to robust back-ends.",
  },
  {
    icon: ServerCog,
    title: "Custom Backend Development",
    description: "Designing and building scalable, secure, and high-performance server-side applications and APIs.",
  },
  {
    icon: GitMerge,
    title: "DevOps",
    description: "Streamlining development and deployment processes with CI/CD, automation, and infrastructure management.",
  },
  {
    icon: LineChart,
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to attract more organic traffic and grow your audience.",
  },
  {
    icon: Briefcase,
    title: "Business Digitalization",
    description: "Transforming your business operations with custom digital solutions to enhance efficiency and productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leveraging cloud platforms like AWS, GCP, and Azure for scalable, reliable, and cost-effective infrastructure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
              A Solution for Every Need
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We offer a comprehensive suite of services to bring your digital vision to life.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center hover:scale-105 hover:border-primary transition-all duration-300 shadow-lg">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-lg">
                    <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
