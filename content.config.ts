import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Define navigation item schema
const navigationItemSchema = z.object({
  title: z
    .string()
    .min(1)
    .describe('Menu item text'),
  to: z
    .string()
    .min(1)
    .describe('Menu item URL (e.g., /about)')
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    navigation: defineCollection({
      type: 'data',
      source: 'navigation',
      schema: z.object({
        items: z
          .array(navigationItemSchema)
          .describe('Navigation Menu Items')
      }).strict()
    })
  }
})
