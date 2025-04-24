import { defineContentConfig, defineCollection } from '@nuxt/content'

// Define the type for our navigation items
type NavigationItem = {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

export default defineContentConfig({
  collections: {
    // Main content collection for pages
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    // Navigation collection for menu structure
    settings: defineCollection({
      type: 'data',
      source: 'settings/**/*.{yml,yaml,json}',
      schema: {
        navigation: {
          type: 'object',
          properties: {
            primary: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  label: { type: 'string' },
                  href: { type: 'string' },
                  icon: { type: 'string', optional: true },
                  children: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        label: { type: 'string' },
                        href: { type: 'string' },
                        icon: { type: 'string', optional: true }
                      }
                    },
                    optional: true
                  }
                }
              }
            }
          }
        }
      }
    })
  }
})
