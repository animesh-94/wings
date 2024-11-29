import { z } from "zod";

export const visitorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  college: z.string().min(2, "College name must be at least 2 characters"),
});

export type VisitorFormData = z.infer<typeof visitorSchema>;
