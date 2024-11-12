'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PhoneInput } from '@/components/phone-input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCreateSpotLead } from '../api/use-create-spot-lead'
import { createSpotLeadSchema, defaultSpotLeadValues } from '../schemas'

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

      mutate(values, {
        onSuccess: () => {
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
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>

                  <FormControl>
                    <Input {...field} placeholder="Seu nome" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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
