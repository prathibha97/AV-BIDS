import * as z from 'zod';

export const ResetPasswordFormSchema = z.object({
  password: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string(),
});

export type ResetPasswordFormValues = z.infer<typeof ResetPasswordFormSchema>;
