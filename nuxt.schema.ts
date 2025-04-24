import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    navigation: group({
      title: 'Navigation',
      description: 'Configure your site navigation menu.',
      icon: 'i-mdi-menu',
      fields: {
        items: field({
          type: 'array',
          title: 'Menu Items',
          description: 'Add, remove, and edit navigation menu items.',
          default: [],
          items: {
            type: 'object',
            properties: {
              title: field({
                type: 'string',
                title: 'Link Title',
                description: 'The text to display for this menu item.',
                icon: 'i-mdi-format-title'
              }),
              to: field({
                type: 'string',
                title: 'Link URL',
                description: 'The URL or path this menu item links to.',
                icon: 'i-mdi-link-variant'
              }),
              icon: field({
                type: 'icon',
                title: 'Menu Icon',
                description: 'Optional icon to display next to the menu item.',
                icon: 'i-mdi-image',
                default: ''
              }),
              children: field({
                type: 'array',
                title: 'Submenu Items',
                description: 'Optional nested menu items (for dropdowns).',
                default: [],
                items: {
                  type: 'object',
                  properties: {
                    title: field({
                      type: 'string',
                      title: 'Submenu Title',
                      description: 'The text to display for this submenu item.',
                      icon: 'i-mdi-format-title'
                    }),
                    to: field({
                      type: 'string',
                      title: 'Submenu URL',
                      description: 'The URL or path this submenu item links to.',
                      icon: 'i-mdi-link-variant'
                    }),
                    icon: field({
                      type: 'icon',
                      title: 'Submenu Icon',
                      description: 'Optional icon to display next to the submenu item.',
                      icon: 'i-mdi-image',
                      default: ''
                    })
                  }
                }
              })
            }
          }
        })
      }
    })
  }
}) 