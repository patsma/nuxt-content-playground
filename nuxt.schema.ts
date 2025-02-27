import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    navigation: field({
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          path: {
            type: 'string'
          }
        }
      }
    })
  }
}) 