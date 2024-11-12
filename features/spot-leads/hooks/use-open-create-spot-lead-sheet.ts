import { create } from 'zustand'

type OpenCreateSpotLeadSheetState = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useOpenCreateSpotLeadSheet = create<OpenCreateSpotLeadSheetState>(
  set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }),
)
