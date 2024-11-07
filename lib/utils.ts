import CryptoJS from 'crypto-js'
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const facebookPixelEvent = ({
  eventId,
  eventName,
  extraData,
  trackType = 'track',
}: {
  eventId: string
  eventName: string
  trackType: 'track' | 'trackCustom'
  extraData?: Record<string, string>
}) => {
  if (!window.fbq) return
  window.fbq(trackType, eventName, extraData || {}, {
    eventID: eventId,
  })
}

export const hash = (value?: string) => {
  if (!value) return ''
  return CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex)
}
