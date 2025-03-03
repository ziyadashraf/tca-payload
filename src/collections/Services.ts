import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'serviceTitle',
    defaultColumns: ['serviceTitle'],
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
          data.serviceTitle = data.name.en
        }
        return data
      },
    ],
  },
}
