'use client'

import { useOpenCreateSpotLeadSheet } from '@/features/spot-leads/hooks/use-open-create-spot-lead-sheet'

interface LeadFormButtonProps {
  title: string
}

export const LeadFormButton = ({ title }: LeadFormButtonProps) => {
  const { onOpen } = useOpenCreateSpotLeadSheet()

  return (
    <button
      title={title}
      onClick={onOpen}
      id="lead-form-button"
      className="block max-w-fit rounded-md bg-gradient-to-r from-[#2ec72e] to-[#018501] px-6 py-3 font-semibold uppercase text-white shadow-lg hover:opacity-85 hover:shadow-xl md:rounded-xl md:px-14 md:py-4 md:text-xl anime animate-pulse hover:animate-none"
    >
      {title}
    </button>
  )
}
