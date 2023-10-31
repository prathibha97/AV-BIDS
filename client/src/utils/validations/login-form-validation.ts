import * as z from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email().min(1),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
