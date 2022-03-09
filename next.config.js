/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[j|t]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
