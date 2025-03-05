import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
    },
  ],
  upload: true,
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.filename) {
          // Generate alt text from filename
          data.alt = data.filename
            .replace(/\.[^/.]+$/, '') // Remove file extension
            .replace(/-/g, ' ') // Replace hyphens with spaces
            .replace(/\b\w/g, (l: string) => l.toUpperCase()) // Capitalize first letter of each word
        }
        return data
      },
    ],
  },
}
