import { z } from 'zod'

export const createSpotLeadSchema = z.object({
  phone: z.string().trim().min(1, 'Campo obrigatório'),
})

export const defaultSpotLeadValues: z.infer<typeof createSpotLeadSchema> = {
  phone: '',
}
