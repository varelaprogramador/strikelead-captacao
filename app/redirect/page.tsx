'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import logo from '@/public/logo.webp'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

export default function Page() {
  const [progress, setProgress] = useState(0)

  // redirect to WhatsApp group after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 2, 100))
    }, 100)

    const timeout = setTimeout(() => {
      window.location.href =
        process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK ||
        'https://chat.whatsapp.com/BqYKczwWYfL5UnLjWLQete'
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-black p-4">
      <Card className="max-w-screen-sm text-center">
        <CardHeader>
          <Image
            priority
            src={logo}
            alt="Spotform"
            draggable={false}
            className="pointer-events-none max-h-12 w-full animate-pulse select-none rounded-md object-contain"
          />
          <CardTitle>Redirecionando...</CardTitle>
          <CardDescription>
            Em 5 segundos você será redirecionado para o grupo de WhatsApp.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center gap-2">
          <Loader2 className="size-6 animate-spin" />
          <Progress value={progress} max={100} />
        </CardContent>

        {progress === 100 && (
          <CardFooter>
            <Button asChild size="lg" className="w-full">
              <Link
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                href={process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK!}
              >
                Entrar no Grupo VIP
              </Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </main>
  )
}
