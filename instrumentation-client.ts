/**
 * Node Module
 */
import { posthog } from 'posthog-js'
/**
 * Custom Module
 */
import config from './config'

posthog.init(config.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: config.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24'
});