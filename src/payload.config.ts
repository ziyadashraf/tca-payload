// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import { Header } from './collections/Header'
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
  collections: [Pages, Users, Media, Services, Header, News, Projects],
  cors: {
    origins: ['http://localhost:3000', "https://tca-kappa.vercel.app"], // Change to your frontend URL
  }, // Allow frontend domain (adjust as needed)
  csrf: ['http://localhost:3000', "https://tca-kappa.vercel.app/"], // Adjust for frontend URL
  serverURL: 'https://tca-payload.vercel.app',
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
    s3Storage({
      collections: {
        media: {
          acl: 'public-read',
          adminThumbnail: ({ doc }: { doc: { url?: string } }) => doc?.url || '',
          imageSizes: [
            {
              name: 'thumbnail',
              width: 400,
              height: 300,
              position: 'centre',
            },
            {
              name: 'card',
              width: 768,
              height: 1024,
              position: 'centre',
            },
          ],
        },
      },
      bucket: 'tca-payload',
      config: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET,
        },
        region: process.env.AWS_REGION,
      },
    }),
  ],
})
