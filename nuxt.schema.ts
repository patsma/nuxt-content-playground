import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    navigation: group({
      title: 'Navigation',
      description: 'Site navigation configuration',
      icon: 'i-heroicons-bars-3-bottom-left',
      fields: {
        items: field({
          type: 'array',
          title: 'Menu Items',
          description: 'Navigation links displayed in header',
          default: [],
          items: {
            type: 'object',
            properties: {
              title: field({
                type: 'string',
                title: 'Link Text',
                default: ''
              }),
              to: field({
                type: 'string', 
                title: 'URL Path',
                default: '/'
              })
            }
          }
        })
      }
    })
  }
}) 