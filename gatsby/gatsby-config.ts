import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: `Gatsby Wildless CMS Page Generator`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content-pages',
        path: './content'
      },
      __key: 'content-pages'
    }
  ]
};

export default config;
