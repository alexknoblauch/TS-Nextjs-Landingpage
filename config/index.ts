export const clientConfig = {
  posthog: {
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  },
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || ''
} as const;

//IN NEXTJS Client und Server immer unterscheide
export const serverConfig = {
  MONGODB_CONNECTIONSTRING: process.env.MONGODB_CONNECTIONSTRING as string,
  port: process.env.PORT || 3000,
} as const;