import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
  slug: 'header',
  admin: {
    useAsTitle: 'logo',
  },
  access: {
    read: () => true, // ✅ Public read access
    update: ({ req }) => true, // ✅ Everyone can update
    create: ({ req }) => true, // ✅ Everyone can create
    delete: ({ req }) => true, // ✅ Everyone can delete
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'products',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
