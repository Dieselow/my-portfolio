/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.tuk.dev','images.unsplash.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
