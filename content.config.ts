import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Define navigation item schema
const navigationItemSchema = z.object({
  title: z
    .string()
    .min(1)
    .describe('Menu item text'),
  to: z
    .string()
    .optional()
    .describe('Menu item URL'),
  children: z
    .array(z.object({
      title: z
        .string()
        .min(1)
        .describe('Submenu item text'),
      to: z
        .string()
        .min(1)
        .describe('Submenu item URL')
    }))
    .optional()
    .describe('Submenu items')
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    navigation: defineCollection({
      type: 'data',
      source: 'content/navigation/**/*.yaml',
      schema: z.object({
        items: z
          .array(navigationItemSchema)
          .describe('Navigation Menu Items')
      }).strict()
    })
  }
})
