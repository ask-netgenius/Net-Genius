"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import {
  Loader2,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll be in touch soon.",
        });
        form.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">
            Contact Us
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Let's Build Something Great Together
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop us a line.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline">
              Contact Information
            </h3>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg mt-1">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-muted-foreground">
                  contact@vertexdigital.dev
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg mt-1">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg mt-1">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-muted-foreground">
                  123 Tech Avenue, Silicon Valley, CA
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vertexdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://twitter.com/vertexdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/company/vertexdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://instagram.com/vertexdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Stay connected for updates, insights, and behind-the-scenes
                content.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Tell us about your project..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
