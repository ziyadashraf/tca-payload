import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // ✅ Allow public read access
    update: ({ req }) => true, // ✅ Only admins can update
    create: ({ req }) => true, // ✅ Only admins can create
    delete: ({ req }) => true, // ✅ Only admins can delete
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'landing',
      type: 'group',
      label: 'Landing Hero Section',
      fields: [
        {
          name: 'heroText',
          type: 'text',
          required: true,
        },
        {
          name: 'subText',
          type: 'textarea',
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media', // Make sure "media" collection exists
          required: true,
        },
      ],
    },
    {
      name: 'services',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
    {
      name: 'partners',
      type: 'group',
      label: 'Partners',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'images',
          type: 'array',
          minRows: 4,
          maxRows: 4,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media', // Ensure "media" collection exists
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'stats',
      type: 'group',
      label: 'Stats Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'statistics',
          type: 'array',
          minRows: 4,
          maxRows: 4,
          fields: [
            {
              name: 'number',
              type: 'number',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
