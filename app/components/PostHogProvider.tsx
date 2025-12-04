// components/PostHogProvider.tsx
'use client'
import { useEffect } from 'react'
import { posthog } from 'posthog-js'
import { clientConfig } from '../../config'

export default function PostHogProvider() {
  useEffect(() => {
    posthog.init(clientConfig.posthog.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: clientConfig.posthog.NEXT_PUBLIC_POSTHOG_HOST
    })
  }, [])
  
  return null
}