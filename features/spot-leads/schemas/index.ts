import { z } from 'zod'

export const createSpotLeadSchema = z.object({
  name: z.string().trim().min(1, 'Campo obrigatório'),
  phone: z.string().trim().min(1, 'Campo obrigatório'),
})

export const defaultSpotLeadValues: z.infer<typeof createSpotLeadSchema> = {
  name: '',
  phone: '',
}
