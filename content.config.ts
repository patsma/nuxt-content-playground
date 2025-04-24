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
              .describe('The text that will be displayed in the menu')
              .min(1, 'Title cannot be empty'),
            to: z.string()
              .describe('The URL or path this menu item links to')
              .min(1, 'URL cannot be empty'),
            icon: z.string()
              .optional()
              .describe('Optional icon name for the menu item')
              .editor({ input: 'icon' }),
            target: z.enum(['_self', '_blank'])
              .default('_self')
              .describe('Where to open the link (_self = same window, _blank = new window)')
          })
        )
        .default([])
        .describe('List of navigation menu items')
      })
    })
  }
})
