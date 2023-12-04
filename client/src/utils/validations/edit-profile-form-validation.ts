import * as z from 'zod';

export const EditProfileFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  company: z.string(),
  phone: z.string(),
  website: z.string(),
  companyAddress: z.object({
    address: z.string(),
    city: z.string(),
    country: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
});

export type EditProfileFormValues = z.infer<typeof EditProfileFormSchema>;
