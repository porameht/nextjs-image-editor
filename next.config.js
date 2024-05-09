/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    });
    config.module.rules.push({
			test: /node_modules\/react-colors-beauty/,
			resolve: {
				alias: {
					"./index.less": false,
          "./rc-color-picker.less": false,
				},
			},
		});
    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
