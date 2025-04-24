import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Define the navigation schema separately for clarity
const navigationSchema = z.object({
  items: z.array(
    z.object({
      title: z.string().describe('Link text'),
      to: z.string().describe('URL path')
    })
  )
})

export default defineContentConfig({
  collections: {
    // Regular content collection
    content: defineCollection({
      type: 'page',
      source: '**/*.md' // Only match markdown files
    }),
    
    // Navigation as a separate data collection
    navigation: defineCollection({
      type: 'data',
      source: 'navigation',
      schema: navigationSchema
    })
  }
})
