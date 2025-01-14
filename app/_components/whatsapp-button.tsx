'use client'

import Link from 'next/link'
import { nanoid } from 'nanoid'

import { facebookPixelEvent } from '@/lib/utils'
import { sendFacebookTracking } from '@/features/utils/actions'

interface WhatsAppButtonProps {
  title: string
}

export const WhatsappButton = ({ title }: WhatsAppButtonProps) => {
  const onClick = () => {
    const eventId = nanoid()

    facebookPixelEvent({
      eventId,
      eventName: 'Lead',
      trackType: 'track',
      extraData: {
        content_name: 'Entrar no grupo do WhatsApp',
      },
    })

    sendFacebookTracking({
      eventId,
      eventName: 'Lead',
      extraData: {
        content_name: 'Formulário Enviado',
      },
    })
  }

  return (
    <Link
      title={title}
      onClick={onClick}
      id="whatsapp-button"
      referrerPolicy="no-referrer"
      rel="noopener noreferrer nofollow"
      href={process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK!}
      className="anime block max-w-fit animate-pulse rounded-md bg-gradient-to-r from-[#2ec72e] to-[#018501] px-6 py-3 font-semibold uppercase text-white shadow-lg hover:animate-none hover:opacity-85 hover:shadow-xl md:rounded-xl md:px-14 md:py-4 md:text-xl"
    >
      {title}
    </Link>
  )
}
