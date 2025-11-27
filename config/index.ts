export const clientConfig = {
  posthog: {
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  }
} as const;

export const serverConfig = {
  MONGODB_CONNECTIONSTRING: process.env.MONGODB_CONNECTIONSTRING as string,
  port: process.env.PORT || 3000,
} as const;