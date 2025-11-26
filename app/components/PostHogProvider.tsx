// components/PostHogProvider.tsx
'use client'
import { useEffect } from 'react'
import { posthog } from 'posthog-js'
import { config } from '@/config'

export default function PostHogProvider() {
  useEffect(() => {
    posthog.init(config.posthog.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: config.posthog.NEXT_PUBLIC_POSTHOG_HOST
    })
  }, [])
  
  return null
}