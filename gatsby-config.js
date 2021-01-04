module.exports = {
  siteMetadata: {
    title: "Sean Quillen Portfolio",
    siteUrl: 'https://seanquillen.com',
    siteDescription: 'Portfolio for Sean Quillen, a software developer living in Austin, TX.'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
          implementation: require('sass'),
          useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Londrina Outline',
          'Londrina Solid',
          'Oswald',
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: process.env.HEAP_ID,
        enableOnDevMode: true  // if 'false', heap will be fired on NODE_ENV=production only
      },
    },
    "gatsby-plugin-sharp",
    `gatsby-transformer-yaml`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`
      },
    },
  ],
};
