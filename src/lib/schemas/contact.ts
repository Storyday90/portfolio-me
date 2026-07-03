import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
