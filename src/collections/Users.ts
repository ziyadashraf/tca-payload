import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true, // ✅ Allow public read access
    update: ({ req }) => req.user?.role === 'admin', // ✅ Only admins can update
    // update: ({ req }) => true, // ✅ Only admins can update
    create: ({ req }) => req.user?.role === 'admin', // ✅ Only admins can create
    delete: ({ req }) => req.user?.role === 'admin', // ✅ Only admins can delete
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}
