import { field } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    navigation: field({
      type: 'array',
      title: 'Navigation',
      description: 'Site navigation links',
      default: [],
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            title: 'Link Text',
            default: ''
          },
          to: {
            type: 'string',
            title: 'URL Path',
            default: '/'
          }
        },
        required: ['title', 'to']
      }
    })
  }
}) 