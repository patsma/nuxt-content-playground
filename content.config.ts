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
            title: z.string().describe('Menu item text'),
            to: z.string().describe('Menu item URL')
          })
        ).default([])
      })
    })
  }
})
