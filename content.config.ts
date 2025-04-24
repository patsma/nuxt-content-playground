import { defineContentConfig, defineCollection, z } from '@nuxt/content'

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
        items: z.array(
          z.object({
            title: z.string()
              .min(1)
              .describe('Menu item text'),
            to: z.string()
              .min(1)
              .describe('Menu item URL')
          })
          .required()
        )
        .default([])
      })
    })
  }
})
