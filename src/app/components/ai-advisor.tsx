"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { getAiSuggestion } from "@/app/actions";
import { AIServiceAdvisorOutput } from "@/ai/flows/ai-service-advisor";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AiAdvisor() {
  const [businessNeeds, setBusinessNeeds] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIServiceAdvisorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessNeeds.trim()) {
      setError("Please describe your business needs.");
      return;
    }
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const suggestion = await getAiSuggestion({ businessNeeds });
      setResult(suggestion);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">
            AI-Powered Advisor
          </h2>
          <p className="text-3xl font-bold tracking-tight font-headline sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/80 mb-6">
            Unsure Where to Start?
          </p>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Describe your project or business goals, and our AI advisor will
            suggest the best services to help you succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <Card className="shadow-xl border-0 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <form onSubmit={handleSubmit}>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-headline">
                  Service Advisor
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Let us know what you're looking to achieve and we'll recommend
                  the perfect solution.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Describe your business needs or project goals
                  </label>
                  <Textarea
                    placeholder="e.g., 'I want to build an online store for my clothing brand with a modern design and fast checkout process.'"
                    value={businessNeeds}
                    onChange={(e) => setBusinessNeeds(e.target.value)}
                    rows={5}
                    disabled={loading}
                    className="min-h-[120px] resize-none focus:ring-2 focus:ring-primary/20"
                  />
                  {error && (
                    <p className="text-sm text-destructive bg-destructive/10 p-2 rounded-md">
                      {error}
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  type="submit"
                  disabled={loading || !businessNeeds.trim()}
                  className="w-full h-12 text-base font-medium"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing your needs...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Get AI Recommendation
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>

            {result && (
              <div className="border-t bg-muted/30 p-8 rounded-b-lg">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <Sparkles className="h-4 w-4" />
                      AI Recommendation
                    </div>
                    <h3 className="font-headline text-xl font-semibold">
                      Perfect Services for Your Project
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        Recommended Services
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.suggestedServices.map((service, index) => (
                          <Badge
                            key={service}
                            variant="default"
                            className="px-3 py-1 text-sm font-medium"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        Why This Recommendation?
                      </h4>
                      <div className="bg-background/60 rounded-lg p-4 border">
                        <p className="text-muted-foreground leading-relaxed">
                          {result.reasoning}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 text-center">
                      <Button asChild variant="outline" className="px-6">
                        <a href="#contact">Get Started with These Services</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
