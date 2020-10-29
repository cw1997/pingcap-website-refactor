/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/data/intl`,
        // supported language
        languages: [`en`, `zh`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
      },
    },
    'gatsby-plugin-react-helmet',

    // images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/images`,
        name: 'image',
        ignore: []
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

  ],
  siteMetadata: {
    title: 'PingCAP',
    description: 'PingCAP Website',
    author: '@PingCAP',
    siteUrl: 'https://pingcap.com/',
  },
}
