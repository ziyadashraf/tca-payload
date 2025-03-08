import type { CollectionConfig } from 'payload'

export const Forms: CollectionConfig = {
  slug: 'forms',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'template'],
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Form Title',
      required: true,
    },
    {
      name: 'template',
      type: 'select',
      required: true,
      options: [{ label: 'Contact', value: 'contact' }],
    },
    // Contact Form Fields
    {
      name: 'contactForm',
      type: 'group',
      label: 'Contact Form Content',
      admin: {
        condition: (data) => data.template === 'contact',
      },
      fields: [
        {
          name: 'title',
          type: 'group',
          label: 'Form Title',
          fields: [
            { name: 'en', type: 'text', label: 'English', required: true },
            { name: 'ar', type: 'text', label: 'Arabic', required: true },
          ],
        },
        {
          name: 'subtitle',
          type: 'group',
          label: 'Form Subtitle',
          fields: [
            { name: 'en', type: 'text', label: 'English', required: true },
            { name: 'ar', type: 'text', label: 'Arabic', required: true },
          ],
        },
        {
          name: 'description',
          type: 'group',
          label: 'Form Description',
          fields: [
            { name: 'en', type: 'textarea', label: 'English', required: true },
            { name: 'ar', type: 'textarea', label: 'Arabic', required: true },
          ],
        },
      ],
    },
  ],
}
