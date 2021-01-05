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
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: process.env.HEAP_ID,
        enableOnDevMode: true  // if 'false', heap will be fired on NODE_ENV=production only
      },
    },
    `gatsby-plugin-preload-fonts`,
    "gatsby-plugin-sharp",
    `gatsby-transformer-yaml`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    'gatsby-background-image',
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
