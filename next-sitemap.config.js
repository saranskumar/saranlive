/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://saranskumar.live',
  generateRobotsTxt: false, // robots.ts handles this
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/private/*'],
}
