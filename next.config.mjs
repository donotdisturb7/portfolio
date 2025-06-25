import mdx from '@next/mdx';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        development: process.env.NODE_ENV === 'development',
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    experimental: {
        mdxRs: false,
    },
};

export default withMDX(nextConfig);