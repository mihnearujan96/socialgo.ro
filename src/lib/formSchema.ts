import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Introdu numele complet.'),
  email: z.string().email('Introdu un email valid.'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Selectează un serviciu.'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Descrie proiectul în cel puțin 20 de caractere.'),
  consent: z
    .boolean()
    .refine((v) => v === true, 'Este necesar consimțământul pentru a trimite mesajul.'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
