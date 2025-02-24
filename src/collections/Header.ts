import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
  slug: 'header',
  admin: {
    useAsTitle: 'logo',
  },
  access: {
    read: () => true, // ✅ Public read access
    update: () => true, // ✅ Everyone can update
    create: () => true, // ✅ Everyone can create
    delete: () => true, // ✅ Everyone can delete
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
          type: 'group',
          label: 'Product Name', // ✅ Group label for clarity
          fields: [
            { name: 'en', type: 'text', label: 'English', required: true },
            { name: 'ar', type: 'text', label: 'Arabic', required: true },
          ],
        },
        {
          name: 'description',
          type: 'group',
          label: 'Product Description',
          fields: [
            {
              name: 'en',
              type: 'textarea',
              label: 'English',
              required: true,
            },
            {
              name: 'ar',
              type: 'textarea',
              label: 'Arabic',
              required: true,
            },
          ],
        },
        {
          name: 'href',
          type: 'text',
          label: 'Product Link',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Product Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
