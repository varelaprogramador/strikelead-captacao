import { create } from 'zustand'

type CreateLeadModalState = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useCreateLeadModal = create<CreateLeadModalState>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
