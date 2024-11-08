import Link from 'next/link'

interface WhatsAppButtonProps {
  title: string
}

export const WhatsappButton = ({ title }: WhatsAppButtonProps) => {
  return (
    <Link
      title={title}
      id="whatsapp-button"
      referrerPolicy="no-referrer"
      rel="noopener noreferrer nofollow"
      href="https://joinz.app/grupo-black"
      className="block max-w-fit rounded-md bg-gradient-to-r from-[#2ec72e] to-[#018501] px-6 py-3 font-semibold uppercase text-white shadow-lg hover:opacity-85 hover:shadow-xl md:rounded-xl md:px-14 md:py-4 md:text-xl anime animate-pulse hover:animate-none"
    >
      {title}
    </Link>
  )
}
