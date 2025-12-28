import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "The name is short").max(100, "Long name"),
  email: z.string().email("Invalid email"),
  message: z
    .string()
    .min(10, "The message is short")
    .max(2000, "Message too long"),
});

export type ComtactFormType = z.infer<typeof contactSchema>;
