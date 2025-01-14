import Image from 'next/image'
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io'

import logo from '@/public/logo.webp'
import Video from './_components/video'
import tagsEsteira from '@/public/gif/tags-esteira.gif'
import lottieForm from '@/public/lottie/lottie-form.json'
import notificaImage from '@/public/card-2.gif'
import lottieLeads from '@/public/lottie/lottie-leads.json'
import functionalityGif from '@/public/gif/functionality.gif'
import { LottieAnimation } from '@/components/lottie-animation'
import testimonial01 from '@/public/testimonials/depoimento1.png'
import testimonial02 from '@/public/testimonials/depoimento2.png'
import testimonial03 from '@/public/testimonials/depoimento3.png'
import testimonial04 from '@/public/testimonials/depoimento4.png'
import { LeadFormButton } from './_components/lead-form-button'
import { CreateSpotLeadSheet } from '@/features/spot-leads/components/create-spot-lead-sheet'
import { CreateSpotLeadForm } from '@/features/spot-leads/components/crate-spot-lead-form'
import { Badge } from 'lucide-react'

export default function Page() {
  return (
    <>
      <main className="flex-1 bg-black text-white">
        <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 bg-black px-4 py-4 md:py-8">
          <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
            🔥{' '}
            <strong className="text-[#921fee]">
              Garanta O Gerenciador de Projetos Brasileiro com Acesso Eterno!
            </strong>
          </h2>

          <LeadFormButton title="Entrar no grupo vip" />
        </div>

        <section className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6 text-black md:py-8">
          <Image
            priority
            src={logo}
            alt="Spotform"
            draggable={false}
            className="pointer-events-none max-h-14 w-full select-none object-contain"
          />
          <h2 className="max-w-4xl px-4 text-center text-base font-normal leading-tight md:text-[1.5rem]">
            <strong>Não pague mais ClickUp em dólar! </strong>
            <strong className="text-[#921fee]">
              Gerencie seus projetos e equipes de forma eficiente por um preço
              justo!
            </strong>
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <span className="min-h-[10px] min-w-[10px] animate-pulse rounded-md bg-green-500"></span>
            <h2 className="text-center text-xs md:text-[1.25rem]">
              Notificação no whatsapp em tempo real{' '}
            </h2>
            <span className="min-h-[10px] min-w-[10px] animate-pulse rounded-md bg-green-500"></span>
          </div>{' '}
          <Video src="/main-video2.mp4" />
          <div className="space-y-2 text-center">
            <p className="text-md font-bold">Suporte 24h via whatsapp</p>

            <ul className="font-semibold text-[#921fee]">
              <li>+ Grupo de networking</li>
              <li>+ Notificações em tempo real</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <CreateSpotLeadForm />
          </div>
        </section>

        <section className="flex items-center justify-center bg-[#0c0c0c] px-4 py-6">
          <div className="flex max-w-[78.125rem] flex-col gap-4 md:flex-row md:gap-8">
            <div className="mx-auto w-full max-w-[432px]">
              <LottieAnimation animationData={lottieLeads} />
            </div>

            <div className="space-y-4 text-center md:space-y-6 md:text-left">
              <h2 className="text-lg font-bold leading-tight md:text-xl">
                Você tem ideia do trabalho que dá para gerenciar múltiplos
                projetos e equipes no mundo digital? Imagine precisar alternar
                entre 5 ferramentas diferentes apenas para manter seus projetos
                organizados. Essa realidade pode ser extremamente desafiadora e
                improdutiva para muitas empresas
              </h2>

              <h2 className="text-lg font-bold leading-tight md:text-xl">
                <strong className="text-[#921fee]">
                  Nossas Funcionalidades
                </strong>{' '}
                - O Gerenciador de Projetos mais completo, sendo o mais
                acessível do mercado.
              </h2>

              <p className="leading-tight text-[#b6b6b6]">
                1- Faça gestão de projetos com uma dshboard super intuitiva.
              </p>

              <Image
                unoptimized
                draggable={false}
                width={700}
                height={400}
                src={'/gif/dash-int.gif'}
                alt="Funcionalidades SpotForm"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />

              <p className="leading-tight text-[#b6b6b6]">
                2- Notificação em tempo real para o seu whatsapp.
              </p>

              <Image
                priority
                draggable={false}
                src={notificaImage}
                alt="Rastreamento: Facebook Pixel, Google Analytics, Redirecionamento WhatsApp"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />

              <p className="leading-tight text-[#b6b6b6]">
                3- Organize suas equipes e classifique tarefas com tags ou nivel
                de esteira diferentes
              </p>

              <Image
                priority
                src={tagsEsteira}
                draggable={false}
                alt="Tags personalizadas"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[#170c20] px-4 py-6 md:py-12">
          <div className="flex max-w-[78.125rem] flex-col items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <div className="mx-auto max-w-[300px]">
                <LottieAnimation animationData={lottieForm} />
              </div>

              <div className="space-y-4 text-center md:space-y-6 md:text-left">
                <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
                  O ÚNICO Sistema de Gestão de Projetos concorrente do ClickUp,
                  Asana, Monday com BAIXO CUSTO e alta performance.
                </h2>

                <p className="leading-tight text-[#b6b6b6]">
                  Chega de pagar caro por ferramentas de gestão de projetos! O
                  StrikeLead combina todas as funcionalidades que você ama no
                  ClickUp, Asana e Monday, com um diferencial: custo acessível,
                  alta performance e facilidade de uso. Simplifique sua gestão,
                  maximize sua produtividade e economize agora mesmo!
                </p>
              </div>
            </div>

            <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">
                    Você não terá custo por conta de usuários
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">
                    Não ficará limitado na criação de novos workspaces
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá utilizar seus projetos com quantos Clientes quiser
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá gerir todos seu time em um só lugar
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá personalizar tudo do jeito que quiser e sem
                    limitações
                  </p>
                </div>
              </div>
            </div>

            <p className="py-2 text-center leading-tight">
              Esse é o jeito mais FÁCIL e ECONÔMICO de apresentar
              profissionalismo aos seus clientes!
            </p>
          </div>
        </section>
      </main>

      <CreateSpotLeadSheet />
    </>
  )
}
