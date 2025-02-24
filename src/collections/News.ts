import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'date',
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      label: 'Date',
      required: true,
    },
    {
      name: 'type',
      type: 'group',
      label: 'Type',
      fields: [
        { name: 'en', type: 'text', label: 'English', required: true },
        { name: 'ar', type: 'text', label: 'Arabic', required: true },
      ],
    },
    {
      name: 'title',
      type: 'group',
      label: 'Title',
      fields: [
        { name: 'en', type: 'text', label: 'English', required: true },
        { name: 'ar', type: 'text', label: 'Arabic', required: true },
      ],
    },
    {
      name: 'content',
      type: 'group',
      label: 'Content',
      fields: [
        { name: 'en', type: 'textarea', label: 'English', required: true },
        { name: 'ar', type: 'textarea', label: 'Arabic', required: true },
      ],
    },
    {
      name: 'author',
      type: 'group',
      label: 'Author',
      fields: [
        {
          name: 'profileImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Profile Image',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'jobTitle',
          type: 'group',
          label: 'Job Title',
          fields: [
            { name: 'en', type: 'text', label: 'English', required: true },
            { name: 'ar', type: 'text', label: 'Arabic', required: true },
          ],
        },
      ],
    },
  ],
}
