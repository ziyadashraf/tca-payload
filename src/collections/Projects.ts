import type { CollectionConfig } from 'payload'

// commit 2

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'service'],
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
      admin: {
        hidden: true,
      },
    },
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
      type: 'group',
      label: 'Project Name',
      fields: [
        { name: 'en', type: 'text', label: 'English', required: true },
        { name: 'ar', type: 'text', label: 'Arabic', required: true },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        hidden: true,
        description: 'This field is auto-generated from the project name',
      },
    },
    {
      name: 'assets',
      type: 'array',
      label: 'Project Assets',
      fields: [
        {
          name: 'media',
          type: 'upload',
          label: 'Media File',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload an image or video file',
          },
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.name?.en) {
          // Set the title for admin UI
          data.title = data.name.en

          // Generate slug from English name
          data.slug = data.name.en
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
            .replace(/(^-|-$)/g, '') // Remove leading/trailing hyphens
        }
        return data
      },
    ],
  },
}
