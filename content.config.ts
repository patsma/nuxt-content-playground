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
        id: z.string(),
        stem: z.string(),
        extension: z.enum(['md', 'yaml', 'yml', 'json', 'csv', 'xml']),
        meta: z.record(z.any()),
        items: z.array(
          z.object({
            title: z.string()
              .min(1)
              .describe('The text that will be displayed in the menu'),
            to: z.string()
              .min(1)
              .describe('The URL or path this menu item links to'),
            icon: z.string()
              .optional()
              .describe('Optional icon name for the menu item')
              .editor({ input: 'icon' }),
            target: z.enum(['_self', '_blank'])
              .default('_self')
              .describe('Where to open the link (_self = same window, _blank = new window)')
          })
          .strict()
        )
        .default([])
        .describe('List of navigation menu items')
      }).strict()
    })
  }
})
