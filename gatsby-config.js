/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Matt Armstrong Portfolio`,
    siteUrl: `https://matt-builds-the-web.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            name: `Lato`,
            file: `https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap`
          },
          {
            name: `Cabin`,
            file: `https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap`
          },
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Armstrong Portfolio`,
        short_name: `MA`,
        start_url: `/`,
        background_color: `#f3fcf9`,
        theme_color: `#3ba74c`,
        display: `standalone`,
        icon: `src/images/leaf3.png`,
      },
    },
  ]
};