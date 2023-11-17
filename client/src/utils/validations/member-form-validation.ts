import * as z from 'zod';

export const MemberFormSchema = z.object({
  name: z.string(),
  role: z.string(),
  email: z.string(),
});

export type MemberFormValues = z.infer<typeof MemberFormSchema>;
