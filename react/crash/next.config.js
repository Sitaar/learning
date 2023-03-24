/** @type {import('next').NextConfig} */
// const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
// }

// module.exports = nextConfig

module.exports = {
  experimental: {
    appDir: true,
  },
  // output: {
  //   path: path.resolve(__dirname, "build"),
  //   filename: "build.[contenthash:10].js",
  //   publicPath: "/",
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://way.jd.com/:path*'
  //     }
  //   ]
  // }
}
