import type { CollectionConfig } from 'payload'

// add projects here

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'serviceTitle',
    defaultColumns: ['serviceTitle', 'slug'],
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'serviceTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'This will be auto-generated from the service name',
      },
    },
    {
      name: 'name',
      type: 'group',
      label: 'Service Name',
      fields: [
        {
          name: 'en',
          type: 'text',
          label: 'English',
          required: true,
        },
        {
          name: 'ar',
          type: 'text',
          label: 'Arabic',
          required: true,
        },
      ],
    },
    {
      name: 'shortDescription',
      type: 'group',
      label: 'Short Description',
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
      name: 'longDescription',
      type: 'group',
      label: 'Long Description',
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
      name: 'image',
      type: 'upload',
      label: 'Service Image',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.name?.en) {
          // Generate serviceTitle
          data.serviceTitle = data.name.en

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
