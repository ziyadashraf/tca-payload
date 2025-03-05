import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payloadcms/storage-s3/client': '@payloadcms/storage-s3/dist/client',
    }
    return config
  },
}

export default withPayload(nextConfig)
