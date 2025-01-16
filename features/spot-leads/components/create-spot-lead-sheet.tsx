'use client'

import { z } from 'zod'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import logo from '@/public/logo.webp'
import { Button } from '@/components/ui/button'
import { facebookPixelEvent } from '@/lib/utils'
import { PhoneInput } from '@/components/phone-input'
import { useCreateSpotLead } from '../api/use-create-spot-lead'
import { sendFacebookTracking } from '@/features/utils/actions'
import { useOpenCreateSpotLeadSheet } from '../hooks/use-open-create-spot-lead-sheet'

import {
  createSpotLeadSchema,
  defaultSpotLeadValues,
} from '@/features/spot-leads/schemas'

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

export const CreateSpotLeadSheet = () => {
  const router = useRouter()
  const { isOpen, onClose } = useOpenCreateSpotLeadSheet()

  const { mutate, isPending } = useCreateSpotLead()

  const form = useForm<z.infer<typeof createSpotLeadSchema>>({
    disabled: isPending,
    defaultValues: defaultSpotLeadValues,
    resolver: zodResolver(createSpotLeadSchema),
  })

  const handleClose = () => {
    onClose()
    form.reset()
  }

  const onSubmit = form.handleSubmit(
    (values: z.infer<typeof createSpotLeadSchema>) => {
      if (isPending) return

      const eventId = nanoid()

      const phone = values.phone.replace(/\D/g, '')?.trim()

      mutate(values, {
        onSuccess: () => {
          facebookPixelEvent({
            eventId,
            eventName: 'Lead',
            trackType: 'track',
            extraData: {
              ph: phone,
            },
          })

          sendFacebookTracking({
            eventId,
            eventName: 'Lead',
            phone: values.phone,
          })

          router.push('/redirect')
          form.reset()
        },
      })
    },
  )

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
                  <FormLabel>WhatsApp</FormLabel>

                  <FormControl>
                    <PhoneInput
                      {...field}
                      defaultCountry="BR"
                      placeholder="(00) 00000-0000"
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
