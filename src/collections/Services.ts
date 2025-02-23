import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'service',
  },
  access: {
    read: () => true, // Allow everyone to read
    update: () => true, // Allow everyone to update
    create: () => true, // Allow everyone to create
    delete: () => true, // Allow everyone to delete
  },
  fields: [
    {
      name: 'service',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Make sure you have a Media collection
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Gray', value: 'gray' },
      ],
      required: true,
    },
  ],
}
