// storage-adapter-import-placeholder
import path from 'path'
import sharp from 'sharp'

import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import { News } from './collections/News'
import { Projects } from './collections/Projects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Users, Media, Services, News, Projects],
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://tca-kappa.vercel.app',
    'https://admin.tca.com.sa',
    'https://tca.com.sa',
  ],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://tca-kappa.vercel.app',
    'https://admin.tca.com.sa',
    'https://tca.com.sa',
  ],
  serverURL:
    process.env.ENVIRONMENT === 'development'
      ? 'http://localhost:3001'
      : 'https://admin.tca.com.sa',
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.AWS_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY!,
          secretAccessKey: process.env.AWS_SECRET!,
        },
        region: process.env.AWS_REGION!,
      },
    }),
  ],
})
