import { z } from 'zod'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { createSpotLeadSchema } from '../schemas'

export function useCreateSpotLead() {
  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof createSpotLeadSchema>) => {
      await api.post('https://api.spotform.com.br/spot-leads/create', {
        ...values,
        origin: 'StrikeLead',
      })
      return
    },
    onSuccess: () => {
      toast.success(
        'Formulário enviado com sucesso! Aguarde o redirecionamento.',
        {
          id: 'create-spot-lead-success',
        },
      )
    },
    onError: error => {
      switch (error.message) {
        case 'Invalid parameters':
          toast.error(
            'Ocorreu um erro ao enviar o formulário. Tente novamente.',
            {
              id: 'create-spot-lead-error',
            },
          )
          break
        default:
          toast.error(
            'Ocorreu um erro ao enviar o formulário. Tente novamente.',
            {
              id: 'create-spot-lead-error',
            },
          )
          break
      }
    },
  })

  return mutation
}
