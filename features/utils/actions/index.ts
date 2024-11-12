'use server'

import axios from 'axios'
import UAParser from 'ua-parser-js'
import { headers } from 'next/headers'
import { cookies } from 'next/headers'

import { hash } from '@/lib/utils'
import { ipWhois } from '@/lib/ip-whois'

export const sendFacebookTracking = async ({
  name,
  phone,
  eventId,
  extraData,
  eventName,
  testEventCode,
}: {
  name?: string
  phone?: string
  eventId: string
  eventName: string
  testEventCode?: string | null
  extraData?: Record<string, unknown>
}) => {
  const cookieStore = cookies()

  const pixelId = process.env.FACEBOOK_PIXEL_ID
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

  if (!pixelId || !accessToken) {
    console.error('Facebook pixel id or access token not found')
    return null
  }

  try {
    const { ip, location, userAgent } = await requestLocationAndBrowser()

    const fbp = cookieStore.get('_fbp')?.value
    const fbc = cookieStore.get('_fbc')?.value

    const firstName = name?.split(' ')[0]?.toLowerCase()?.trim()
    const lastName = name?.split(' ')[1]?.toLowerCase()?.trim()
    const formattedPhone = phone?.replace(/\D/g, '')?.trim()

    const eventData = {
      data: [
        {
          event_id: eventId,
          event_name: eventName,
          action_source: 'website',
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: 'https://www.captacao2.spotform.com.br',
          user_data: {
            fbp,
            fbc,
            client_ip_address: ip,
            client_user_agent: userAgent,
            ln: lastName ? hash(lastName) : null,
            fn: firstName ? hash(firstName) : null,
            ct: hash(location?.city?.toLowerCase()),
            zp: hash(location?.postal?.replace(/\D/g, '')),
            st: hash(location?.region_code?.toLowerCase()),
            ph: formattedPhone ? hash(formattedPhone) : null,
            country: hash(location?.country_code?.toLowerCase()),
          },
          custom_data: {
            ...extraData,
          },
        },
      ],
      test_event_code: testEventCode,
    }

    const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`

    const response = await axios.post(url, eventData, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        access_token: accessToken,
      },
    })

    if (response.status !== 200) {
      console.error('Error sending facebook tracking', {
        eventName,
        response: response.data,
        facebook: {
          pixelId,
          eventId,
          accessToken,
          testEventCode,
        },
      })
    }

    if (response.status === 200) {
      console.log('Facebook tracking sent', {
        eventName,
        response: response.data,
        facebook: {
          pixelId,
          eventId,
          accessToken,
          testEventCode,
        },
      })
    }

    return null
  } catch (error) {
    console.error('Error sending facebook tracking', {
      eventName,
      error,
      facebook: {
        pixelId,
        eventId,
        accessToken,
        testEventCode,
      },
    })
    return null
  }
}

export const requestLocationAndBrowser = async () => {
  const header = headers()

  const parser = new UAParser()
  const browser = header.get('user-agent')

  if (browser) {
    parser.setUA(browser)
  }

  let ip = header.get('x-real-ip') || header.get('x-forwarded-for')

  if (process.env.NODE_ENV === 'development') {
    ip = '::1'
  }

  const address = await ipWhois(ip)

  return {
    ip,
    location: address,
    os: parser.getOS().name,
    browser: parser.getBrowser().name,
    userAgent: header.get('user-agent'),
  }
}
