
"use server";

import { z } from "zod";
import { aiServiceAdvisor, AIServiceAdvisorOutput } from "@/ai/flows/ai-service-advisor";

export async function getAiSuggestion(input: { businessNeeds: string }): Promise<AIServiceAdvisorOutput> {
  try {
    const result = await aiServiceAdvisor(input);
    return result;
  } catch (error) {
    console.error("AI service advisor failed:", error);
    throw new Error("Failed to get AI-powered suggestion. Please try again later.");
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const validation = contactFormSchema.safeParse(data);
  
  if (!validation.success) {
    return { success: false, error: "Invalid form data." };
  }
  
  // In a real application, you would process the data here
  // e.g., send an email, save to a database, etc.
  console.log("New contact form submission:", validation.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true };
}
