module.exports = {
  siteMetadata: {
    title: `Consenso Labs`,
    description: `DLT based platform that brings all the benefits of the decentralization to solve inefficiencies in the arbitration by providing authentic, privacy preserved dispute resolution with a self enforceable agreements embedded in the blockchain to automate several arbitration procedures and enforce arbitral awards.`,
    author: `@koushithAmin`,
    github: `https://github.com/arbchain`,
    blog: `https://blog.consensolabs.com/`,
    twitter: `https://twitter.com/consensolabs`,
    linkedin: `https://www.linkedin.com/company/consensolabs/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-178594238-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arbchain Official Website`,
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
