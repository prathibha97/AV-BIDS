import * as z from 'zod';

export const QuestionFormSchema = z.object({
  email: z.string().email().min(1),
  phone: z.string(),
  subject: z.string().min(1),
  description: z.string().min(1),
});

export type QuestionFormValues = z.infer<typeof QuestionFormSchema>;
