import Link from 'next/link'
import Image from 'next/image'
import { permanentRedirect } from 'next/navigation'

import logo from '@/public/logo.svg'
import { Button } from '@/components/ui/button'

export default function Page() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = 'https://chat.whatsapp.com/JuvK0tQmvgM5KAvr12fmMu'
  //   }, 1000)
  // }, [])

  return permanentRedirect('/')

  return (
    <main className="bg-black gap-4 flex flex-1 items-center justify-center p-4 flex-col text-center">
      <Image
        priority
        src={logo}
        alt="Spotform"
        draggable={false}
        className="pointer-events-none max-h-10 md:max-h-16 animate-pulse w-full select-none object-contain"
      />

      <h1 className="text-white text-xl md:text-3xl ">
        Em instantes você será redirecionado para o nosso Grupo VIP do WhatsApp.
      </h1>

      <p className="text-white text-base md:text-lg">
        Caso não seja redirecionado, clique no botão abaixo.
      </p>

      <Button asChild size="lg">
        <Link
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          href="https://chat.whatsapp.com/JuvK0tQmvgM5KAvr12fmMu"
        >
          Entrar no Grupo VIP
        </Link>
      </Button>
    </main>
  )
}
