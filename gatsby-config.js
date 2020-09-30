module.exports = {
  siteMetadata: {
    title: `Consenso Labs`,
    description: `DLT based platform that brings all the benefits of the decentralization to solve inefficiencies in the arbitration by providing authentic, privacy preserved dispute resolution with a self enforceable agreements embedded in the blockchain to automate several arbitration procedures and enforce arbitral awards.`,
    author: `@koushithAmin`,
    github: `https://github.com/arbchain`,
    blog: `https://blog.consensolabs.com/`,
    // product: `https://appseed.us/apps/gatsbyjs`,
    // docs: `https://docs.appseed.us/apps/gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        // icon: `src/images/tailwind-icon.png`
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css', 'src/css/global.css'],
      },
    },
  ],
};
