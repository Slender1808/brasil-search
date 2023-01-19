/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://brasil-search.vercel.app/",
  generateRobotsTxt: true,
  changefreq: "yearly",
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://brasil-search.vercel.app/cep/sitemap-0.xml",
      "https://brasil-search.vercel.app/cep/sitemap-1.xml",
    ],
  },
};
