import type { CollectionConfig } from 'payload'

export const Components: CollectionConfig = {
  slug: 'components',
  admin: {
    useAsTitle: 'template',
    defaultColumns: ['template'],
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'template',
      type: 'select',
      required: true,
      options: [{ label: 'Navbar', value: 'navbar' }],
    },
    // Navbar Fields
    {
      name: 'navbar',
      type: 'group',
      label: 'Navbar Content',
      admin: {
        condition: (data) => data.template === 'navbar',
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          label: 'Logo',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
