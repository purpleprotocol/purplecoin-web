module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://purplecoin.io/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/logo.png", // Path is relative to the root
          siteName: "Purplecoin/XPU", // Used in manifest.json
          shortName: "XPU", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
            trackingId: "G-Z9ZK3WWF9L",
            anonymize: true, // Default true
            environments: ["production"] // Default ["production"]
        }
      },
    },
  ],
};
