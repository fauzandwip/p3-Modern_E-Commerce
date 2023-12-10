/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'loremflickr.com',
			},
			{
				protocol: 'https',
				hostname: 'cf-img.fnatic.com',
			},
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
			},
		],
	},
};

module.exports = nextConfig;
