import * as z from 'zod';

export const EditProfileFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  company: z.string(),
  phone: z.string(),
  website: z.string(),
  companyAddress: z
    .object({
      address: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      state: z.string().optional(),
      zip: z.string().optional(),
    })
    .optional(),
  address: z
    .object({
      addressLine1: z.string().optional(),
      addressLine2: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zip: z.string().optional(),
    })
    .optional(),
});

export type EditProfileFormValues = z.infer<typeof EditProfileFormSchema>;
