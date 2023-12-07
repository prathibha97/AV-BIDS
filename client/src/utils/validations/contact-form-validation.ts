import * as z from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
