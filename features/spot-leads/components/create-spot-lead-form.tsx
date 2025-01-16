'use client'

import { z } from 'zod'
import { nanoid } from 'nanoid'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { facebookPixelEvent } from '@/lib/utils'
import { PhoneInput } from '@/components/phone-input'
import { sendFacebookTracking } from '@/features/utils/actions'
import { useCreateSpotLead } from '../api/use-create-spot-lead'
import { createSpotLeadSchema, defaultSpotLeadValues } from '../schemas'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

export const CreateSpotLeadForm = () => {
  const router = useRouter()

  const { mutate, isPending } = useCreateSpotLead()

  const form = useForm<z.infer<typeof createSpotLeadSchema>>({
    disabled: isPending,
    defaultValues: defaultSpotLeadValues,
    resolver: zodResolver(createSpotLeadSchema),
  })

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
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>Quero entrar no Grupo VIP</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo para entrar no Grupo VIP e receber
          ofertas exclusivas.
        </CardDescription>
      </CardHeader>

      <CardContent>
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
      </CardContent>
    </Card>
  )
}
