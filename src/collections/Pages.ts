import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
      label: 'Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'landing',
      type: 'group',
      label: 'Landing Hero Section',
      fields: [
        {
          name: 'heroText',
          type: 'group',
          label: 'Hero Text',
          fields: [
            { name: 'en', type: 'text', label: 'English', required: true },
            { name: 'ar', type: 'text', label: 'Arabic', required: true },
          ],
        },
        {
          name: 'subText',
          type: 'group',
          label: 'Sub Text',
          fields: [
            { name: 'en', type: 'textarea', label: 'English' },
            { name: 'ar', type: 'textarea', label: 'Arabic' },
          ],
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'services',
      type: 'group',
      label: 'Services Section',
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
            { name: 'en', type: 'textarea', label: 'English' },
            { name: 'ar', type: 'textarea', label: 'Arabic' },
          ],
        },
      ],
    },
    {
      name: 'partners',
      type: 'group',
      label: 'Partners Section',
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
          minRows: 4,
          maxRows: 4,
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
    },
    {
      name: 'stats',
      type: 'group',
      label: 'Stats Section',
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
          minRows: 4,
          maxRows: 4,
          fields: [
            {
              name: 'number',
              type: 'number',
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
      name: 'about',
      type: 'group',
      label: 'About Section',
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
          name: 'subtitle',
          type: 'group',
          label: 'Subtitle',
          fields: [
            { name: 'en', type: 'text', label: 'English', required: true },
            { name: 'ar', type: 'text', label: 'Arabic', required: true },
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
              label: 'Title',
              fields: [
                { name: 'en', type: 'text', label: 'English', required: true },
                { name: 'ar', type: 'text', label: 'Arabic', required: true },
              ],
            },
            {
              name: 'subtitle',
              type: 'group',
              label: 'Subtitle',
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
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'journey',
          type: 'group',
          label: 'Journey Section',
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
              name: 'subtitle',
              type: 'group',
              label: 'Subtitle',
              fields: [
                { name: 'en', type: 'text', label: 'English', required: true },
                { name: 'ar', type: 'text', label: 'Arabic', required: true },
              ],
            },
            {
              name: 'steps',
              type: 'array',
              label: 'Steps',
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
                  name: 'content',
                  type: 'group',
                  label: 'Content (HTML)',
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
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Section',
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
          name: 'subtitle',
          type: 'group',
          label: 'Subtitle',
          fields: [
            { name: 'en', type: 'text', label: 'English', required: true },
            { name: 'ar', type: 'text', label: 'Arabic', required: true },
          ],
        },
        {
          name: 'sections',
          type: 'array',
          label: 'Sections',
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
              name: 'subtitle',
              type: 'group',
              label: 'Subtitle',
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
              name: 'mode',
              type: 'select',
              label: 'Mode',
              options: [
                { label: 'White', value: 'white' },
                { label: 'Dark', value: 'dark' },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'jobs',
          type: 'array',
          label: 'Jobs',
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
              name: 'location',
              type: 'group',
              label: 'Location',
              fields: [
                { name: 'en', type: 'text', label: 'English', required: true },
                { name: 'ar', type: 'text', label: 'Arabic', required: true },
              ],
            },
            {
              name: 'offerings',
              type: 'group',
              label: 'Offerings',
              fields: [
                { name: 'en', type: 'textarea', label: 'English', required: true },
                { name: 'ar', type: 'textarea', label: 'Arabic', required: true },
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
      ],
    },
  ],
}
