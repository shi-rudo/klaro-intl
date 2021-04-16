module.exports = {
  siteMetadata: {
    title: "klaro-test",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-klaro",
      options: {
        includeInDevelopment: true,
        klaroVersion: "v0.7.11",
        configUrl: "/config.js"
      }
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `de`],
        // language file path
        defaultLanguage: `de`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
      },
    },
  ],
};
