import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,

  images: {
    domains: ['cdn.alvarosaavedra.es'],
  },
});

export default withNextra();
