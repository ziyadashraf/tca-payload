import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'serviceTitle', // ✅ Flat string field (not an object)
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
      name: 'serviceTitle', // ✅ New flat field
      type: 'text',
      hidden: true, // Hide from UI (used internally)
    },
    {
      name: 'description',
      type: 'group',
      label: 'Description',
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
      relationTo: 'media',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      label: 'Link',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      label: 'Type',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Gray', value: 'gray' },
      ],
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.service?.en) {
          data.serviceTitle = data.service.en // ✅ Store English title separately
        }
        return data
      },
    ],
  },
}
