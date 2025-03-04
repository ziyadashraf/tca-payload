import type { CollectionConfig } from 'payload'

// commit

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: 'Service',
      required: true,
      admin: {
        description: 'Select the service category this project belongs to',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Project Name',
      required: true,
    },
    {
      name: 'description',
      type: 'group',
      label: 'Description',
      fields: [
        { name: 'en', type: 'textarea', label: 'English', required: true },
        { name: 'ar', type: 'textarea', label: 'Arabic', required: true },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: 'Project Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.service) {
          data.service = data.service.toLowerCase()
        }
        return data
      },
    ],
  },
}
