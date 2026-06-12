import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
});

export default withNextra({
    async headers() {
        return [
            {
                source: '/og-image.png',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
                    { key: 'Content-Type', value: 'image/png' },
                ],
            },
        ]
    },
});
