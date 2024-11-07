import axios from 'axios'

import type { IpWhoisResponse } from '@/types/IpWhois'

export const ipWhois = async (
  ip?: string | null,
): Promise<IpWhoisResponse | null> => {
  if (!ip) {
    return null
  }

  try {
    const response = await axios.get<IpWhoisResponse>(
      `http://ipwhois.pro/${ip}?key=${process.env.IP_WHOIS_API_KEY!}`,
    )
    return response.data
  } catch {
    return null
  }
}
