'use client'

import { z } from 'zod'
import axios from 'axios'
import Image from 'next/image'
import { toast } from 'sonner'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import logo from '@/public/logo.svg'
import { Button } from '@/components/ui/button'
import { PhoneInput } from '@/components/phone-input'
import { useCreateLeadModal } from '@/hooks/use-create-lead-modal'

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog'

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

const schema = z.object({
  phone: z.string().trim().min(10, 'Número de telefone inválido'),
})

export const LeadModal = () => {
  const router = useRouter()
  const { isOpen, onClose } = useCreateLeadModal()
  const [isPending, setIsPending] = useState(false)

  const form = useForm<z.infer<typeof schema>>({
    disabled: isPending,
    resolver: zodResolver(schema),
    defaultValues: {
      phone: '',
    },
  })

  const handleClose = () => {
    onClose()
    form.reset()
  }

  const onSubmit = form.handleSubmit(async (values: z.infer<typeof schema>) => {
    if (isPending) return

    try {
      setIsPending(true)
      const { status } = await axios.post(
        'https://api-spotform.up.railway.app/spot-leads/create-v2',
        {
          phone: values.phone,
          origin: 'Captação | Spotform',
          website: 'https://chat.whatsapp.com/JuvK0tQmvgM5KAvr12fmMu',
        },
      )

      if (status !== 201) {
        throw new Error('Erro ao enviar formulário')
      }

      toast.success('Formulário enviado com sucesso! Você será redirecionado.')
      router.push('/redirect')
    } catch {
      toast.error('Ocorreu um erro ao enviar o formulário. Tente novamente.')
    } finally {
      setIsPending(false)
    }
  })

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-[90%] rounded-md sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <Image
              priority
              src={logo}
              alt="Spotform"
              draggable={false}
              className="pointer-events-none max-h-10 w-full select-none object-contain"
            />
          </DialogTitle>

          <DialogDescription className="text-center">
            Preencha o formulário e entre no nosso Grupo VIP do WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={onSubmit}>
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    WhatsApp <span className="text-red-500">*</span>
                  </FormLabel>

                  <FormControl>
                    <PhoneInput
                      value={field.value}
                      onChange={field.onChange}
                      isDisabled={field.disabled}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full gap-2 uppercase" disabled={isPending}>
              Quero entrar no Grupo VIP
              {isPending && <Loader2 className="size-4 animate-spin" />}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Seus dados estão seguros e não serão compartilhados com terceiros.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
