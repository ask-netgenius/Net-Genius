"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5" /> AI-Powered
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Unsure Where to Start?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Describe your project or business goals, and our AI advisor will suggest the best services to help you succeed.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto mt-16 shadow-lg">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-6 w-6" />
                Service Advisor
              </CardTitle>
              <CardDescription>
                Let us know what you're looking to achieve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., 'I want to build an online store for my clothing brand with a modern design and fast checkout process.'"
                value={businessNeeds}
                onChange={(e) => setBusinessNeeds(e.target.value)}
                rows={5}
                disabled={loading}
              />
              {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Get Suggestion"
                )}
              </Button>
            </CardFooter>
          </form>

          {result && (
            <div className="border-t p-6">
                <h3 className="font-semibold text-lg mb-2">Our Recommendation:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {result.suggestedServices.map(service => (
                        <Badge key={service} variant="default">{service}</Badge>
                    ))}
                </div>
                <h4 className="font-semibold mt-4 mb-2">Reasoning:</h4>
                <p className="text-muted-foreground text-sm">{result.reasoning}</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
