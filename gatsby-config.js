module.exports = {
  siteMetadata: {
    title: 'Fancy Page Transitions',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
