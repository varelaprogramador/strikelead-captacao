import Image from 'next/image'
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io'

import logo from '@/public/logo.svg'
import Video from './_components/video'
import tagsImage from '@/public/tags.jpg'
import { LeadModal } from './_components/lead-modal'
import lottieForm from '@/public/lottie/lottie-form.json'
import traqueamentoImage from '@/public/traqueamento.jpg'
import lottieLeads from '@/public/lottie/lottie-leads.json'
import functionalityGif from '@/public/gif/functionality.gif'
import { WhatsappButton } from './_components/whatsapp-button'
import { LottieAnimation } from '@/components/lottie-animation'
import testimonial01 from '@/public/testimonials/depoimento1.png'
import testimonial02 from '@/public/testimonials/depoimento2.png'
import testimonial03 from '@/public/testimonials/depoimento3.png'
import testimonial04 from '@/public/testimonials/depoimento4.png'

export default function Page() {
  return (
    <>
      <main className="flex-1 bg-black text-white">
        <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 bg-black px-4 py-4 md:py-8">
          <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
            🔥{' '}
            <strong className="text-[#921fee]">
              Garanta O typeform Brasileiro com Acesso Eterno!
            </strong>
          </h2>

          <WhatsappButton title="Entrar no grupo vip" />
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
            <strong>Não pague mais typeform em dólar! </strong>
            <strong className="text-[#921fee]">
              Conquiste novos Leads Qualificados de forma eficiente por um preço
              justo!
            </strong>
          </h2>

          <h2 className="text-center text-xs md:text-[1.25rem]">
            Relatórios em tempo real da sua audiência!
          </h2>

          <Video src="/main-video.mp4" />

          <div className="space-y-2 text-center">
            <p className="text-md font-bold">Suporte 24h via whatsapp</p>

            <ul className="font-semibold text-[#921fee]">
              <li>+ Grupo de networking</li>
              <li>+ Integração com make</li>
              <li>+ Notificações de novos lead</li>
            </ul>
          </div>

          <WhatsappButton title="Entrar no grupo vip" />
        </section>

        <section className="flex items-center justify-center bg-[#0c0c0c] px-4 py-6">
          <div className="flex max-w-[78.125rem] flex-col gap-4 md:flex-row md:gap-8">
            <div className="mx-auto w-full max-w-[432px]">
              <LottieAnimation animationData={lottieLeads} />
            </div>

            <div className="space-y-4 text-center md:space-y-6 md:text-left">
              <h2 className="text-lg font-bold leading-tight md:text-xl">
                Você tem ideia do trabalho que dá para concretizar uma venda no
                mundo digital? Imagine precisar de 100 leads apenas para
                concretizar uma única venda. Essa realidade pode ser
                extremamente desafiadora e desanimadora para muitos.
              </h2>

              <p className="leading-tight text-[#b6b6b6]">
                Imagine filtrar seus clientes e trazer somente quem realmente
                tem interesse no seu produto? é exatamente isso que você poderá
                fazer com o SpotForm.
              </p>

              <h2 className="text-lg font-bold leading-tight md:text-xl">
                <strong className="text-[#921fee]">
                  Nossas Funcionalidades
                </strong>{' '}
                - O CRM que mais entrega, sendo o mais acessível do mercado.
              </h2>

              <p className="leading-tight text-[#b6b6b6]">
                1- Faça gestão dos seus Leads e crie formulários dinâmicos.
              </p>

              <Image
                unoptimized
                draggable={false}
                src={functionalityGif}
                alt="Funcionalidades SpotForm"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />

              <p className="leading-tight text-[#b6b6b6]">
                2- Código pixel, rastreamento Google, Redirecionamento rápido
                para WhatsApp.
              </p>

              <Image
                priority
                draggable={false}
                src={traqueamentoImage}
                alt="Rastreamento: Facebook Pixel, Google Analytics, Redirecionamento WhatsApp"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />

              <p className="leading-tight text-[#b6b6b6]">
                3- Faça gestão dos seus leads e classifique sua audiência com
                tags personalizadas
              </p>

              <Image
                priority
                src={tagsImage}
                draggable={false}
                alt="Tags personalizadas"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[#170c20] px-4 py-6 md:py-12">
          <div className="flex max-w-[78.125rem] flex-col items-center justify-center gap-4 md:gap-8">
            <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
              DEPOIMENTO DE NOSSOS CLIENTES PILOTO
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => {
                const testimonials = [
                  testimonial01,
                  testimonial02,
                  testimonial03,
                  testimonial04,
                ]

                return (
                  <div key={index}>
                    <Image
                      priority
                      draggable={false}
                      src={testimonials[index]}
                      alt={`Depoimento ${index + 1}`}
                      className="pointer-events-none mx-auto select-none object-contain drop-shadow-sm"
                    />
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <div className="mx-auto max-w-[300px]">
                <LottieAnimation animationData={lottieForm} />
              </div>

              <div className="space-y-4 text-center md:space-y-6 md:text-left">
                <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
                  O ÚNICO Formulário baseado concorrente do Typeform, Blip, RD
                  Station com BAIXO CUSTO e alta qualidade.
                </h2>

                <p className="leading-tight text-[#b6b6b6]">
                  Com certeza você já viu algumas plataformas que criam
                  formulários, mas que cobram de você uma mensalidade alta por
                  mês e ainda por cima limita a quantidade de formulários e
                  respostas de leads.
                </p>

                <p className="leading-tight text-[#b6b6b6]">
                  Aqui você poderá: Criar formulários ilimitados e receber
                  quantos leads quiser.
                </p>

                <p className="leading-tight text-[#b6b6b6]">
                  Além de <strong>SUPER QUALIFICAR SEUS LEADS</strong>
                </p>
              </div>
            </div>

            <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">
                    Você não terá custo por formulário
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">
                    Não ficará limitado na criação de novos formulários
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá utilizar o formulários com quantos Clientes quiser
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá gerir todos seus leads em 1 lugar
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

            <WhatsappButton title="Entrar no grupo vip" />
          </div>
        </section>
      </main>

      <LeadModal />
    </>
  )
}
