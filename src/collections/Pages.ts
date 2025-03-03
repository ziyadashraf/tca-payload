import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'template', 'slug'],
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
      label: 'Page Title',
      required: true,
    },
    {
      name: 'template',
      type: 'select',
      required: true,
      options: [
        { label: 'Home', value: 'home' },
        { label: 'About', value: 'about' },
        { label: 'Contact', value: 'contact' },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    // Home Page Fields
    {
      name: 'homeFields',
      type: 'group',
      label: 'Home Page Content',
      admin: {
        condition: (data) => data.template === 'home',
      },
      fields: [
        {
          name: 'hero',
          type: 'group',
          label: 'Welcome Section',
          fields: [
            {
              name: 'heroText',
              type: 'group',
              label: 'Title',
              fields: [
                { name: 'en', type: 'text', label: 'English', required: true },
                { name: 'ar', type: 'text', label: 'Arabic', required: true },
              ],
            },
            {
              name: 'subText',
              type: 'group',
              label: 'Subtitle',
              fields: [
                { name: 'en', type: 'textarea', label: 'English' },
                { name: 'ar', type: 'textarea', label: 'Arabic' },
              ],
            },
            {
              name: 'heroImage',
              type: 'upload',
              label: 'Image',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'stats',
          type: 'group',
          label: 'Statistics',
          fields: [
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
              name: 'statistics',
              type: 'array',
              label: 'Statistics',
              fields: [
                {
                  name: 'number',
                  type: 'number',
                  label: 'Number',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'group',
                  label: 'Description',
                  fields: [
                    { name: 'en', type: 'text', label: 'English', required: true },
                    { name: 'ar', type: 'text', label: 'Arabic', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'partners',
          type: 'group',
          label: 'Partners',
          fields: [
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
              label: 'Partner Logos',
              minRows: 4,
              maxRows: 4,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  label: 'Partner Logo',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    // About Page Fields
    {
      name: 'aboutFields',
      type: 'group',
      label: 'About Page Content',
      admin: {
        condition: (data) => data.template === 'about',
      },
      fields: [
        {
          name: 'welcomeSection',
          type: 'group',
          label: 'Welcome Section',
          fields: [
            {
              name: 'title',
              type: 'group',
              label: 'Main Title',
              fields: [
                { name: 'en', type: 'text', label: 'English', required: true },
                { name: 'ar', type: 'text', label: 'Arabic', required: true },
              ],
            },
            {
              name: 'subtitle',
              type: 'group',
              label: 'Subtitle Text',
              fields: [
                { name: 'en', type: 'text', label: 'English', required: true },
                { name: 'ar', type: 'text', label: 'Arabic', required: true },
              ],
            },
          ],
        },
        {
          name: 'mission',
          type: 'group',
          label: 'Mission Section',
          fields: [
            {
              name: 'title',
              type: 'group',
              label: 'Mission Title',
              fields: [
                { name: 'en', type: 'text', label: 'English', required: true },
                { name: 'ar', type: 'text', label: 'Arabic', required: true },
              ],
            },
            {
              name: 'description',
              type: 'group',
              label: 'Mission Description',
              fields: [
                { name: 'en', type: 'textarea', label: 'English', required: true },
                { name: 'ar', type: 'textarea', label: 'Arabic', required: true },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              label: 'Mission Image',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
    // Contact Page Fields
    {
      name: 'contactFields',
      type: 'group',
      label: 'Contact Page Content',
      admin: {
        condition: (data) => data.template === 'contact',
      },
      fields: [
        {
          name: 'welcomeSection',
          type: 'group',
          label: 'Welcome Section',
          fields: [
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
              name: 'description',
              type: 'group',
              label: 'Description',
              fields: [
                { name: 'en', type: 'textarea', label: 'English', required: true },
                { name: 'ar', type: 'textarea', label: 'Arabic', required: true },
              ],
            },
          ],
        },
        {
          name: 'contactInfo',
          type: 'group',
          label: 'Contact Information',
          fields: [
            {
              name: 'email',
              type: 'text',
              label: 'Email Address',
              required: true,
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Phone Number',
              required: true,
            },
            {
              name: 'address',
              type: 'group',
              label: 'Office Address',
              fields: [
                { name: 'en', type: 'textarea', label: 'English', required: true },
                { name: 'ar', type: 'textarea', label: 'Arabic', required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}
