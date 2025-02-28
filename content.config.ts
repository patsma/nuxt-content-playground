import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    navigation: defineCollection({
      type: 'data',
      schema: z.object({
        items: z.array(
          z.object({
            title: z.string().min(2),
            to: z.string().startsWith('/'),
            external: z.boolean().default(false)
          })
        ).editor({
          description: 'Main site navigation items',
          input: 'accordion'
        })
      })
    })
  },
})
