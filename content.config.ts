import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    navigation: defineCollection({
      type: 'data',
      source: 'navigation.json',
      schema: z.object({
        items: z.array(
          z.object({
            title: z.string(),
            to: z.string(),
            icon: z.string().optional(),
            children: z.array(
              z.object({
                title: z.string(),
                to: z.string(),
                icon: z.string().optional()
              })
            ).optional()
          })
        )
      })
    })
  },
})
