"use server";

/**
 * @fileOverview This file defines the AI Service Advisor flow for Net Genius.
 *
 * - aiServiceAdvisor - A function that suggests appropriate services based on user input.
 * - AIServiceAdvisorInput - The input type for the aiServiceAdvisor function.
 * - AIServiceAdvisorOutput - The return type for the aiServiceAdvisor function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const AIServiceAdvisorInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe("A description of the business needs of the client."),
});
export type AIServiceAdvisorInput = z.infer<typeof AIServiceAdvisorInputSchema>;

const AIServiceAdvisorOutputSchema = z.object({
  suggestedServices: z
    .array(z.string())
    .describe("An array of services that are suggested for the client."),
  reasoning: z
    .string()
    .describe("The reasoning behind the service suggestions."),
});
export type AIServiceAdvisorOutput = z.infer<
  typeof AIServiceAdvisorOutputSchema
>;

export async function aiServiceAdvisor(
  input: AIServiceAdvisorInput
): Promise<AIServiceAdvisorOutput> {
  return aiServiceAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: "aiServiceAdvisorPrompt",
  input: { schema: AIServiceAdvisorInputSchema },
  output: { schema: AIServiceAdvisorOutputSchema },
  prompt: `You are an AI Service Advisor for Net Genius, a digital services agency. Net Genius provides the following services:

- Full-Stack Development
- Custom Backend Development
- DevOps
- SEO Optimization
- Business Digitalization
- Cloud Solutions

Based on the client's business needs, suggest the most relevant services offered by Net Genius. Explain your reasoning for each suggested service.

Business Needs: {{{businessNeeds}}}

Format your response as a JSON object with "suggestedServices" and "reasoning" fields. The suggestedServices field should be an array of strings.
`,
});

const aiServiceAdvisorFlow = ai.defineFlow(
  {
    name: "aiServiceAdvisorFlow",
    inputSchema: AIServiceAdvisorInputSchema,
    outputSchema: AIServiceAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
