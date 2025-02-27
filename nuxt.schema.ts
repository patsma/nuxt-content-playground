import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    menu: group({
      title: 'Navigation Menu',
      description: 'Manage website navigation items',
      icon: 'i-herocons-bars-3',
      fields: {
        items: field({
          type: 'array',
          title: 'Menu Items',
          default: [],
          items: {
            type: 'object',
            fields: {
              title: field({
                type: 'string', 
                title: 'Item Text',
                default: 'New Item'
              }),
              path: field({
                type: 'string',
                title: 'URL Path',
                default: '/',
                required: ['/', '/about']
              })
            }
          }
        })
      }
    })
  }
}) 