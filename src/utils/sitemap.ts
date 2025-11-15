import { serviceCategories } from '../data/services';
import { locations } from '../data/locations';
import { blogPosts } from '../data/blog';

function generateSitemapXML() {
  const baseUrl = 'https://narssoplumbing.com';
  const pages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/areas', changefreq: 'weekly', priority: '0.9' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/blog', changefreq: 'daily', priority: '0.9' },
  ];

  // Add service pages
  serviceCategories.forEach(category => {
    pages.push({
      url: `/services/${category.slug}`,
      changefreq: 'weekly',
      priority: '0.8'
    });
    category.services.forEach(service => {
      pages.push({
        url: `/services/${category.slug}/${service.slug}`,
        changefreq: 'weekly',
        priority: '0.7'
      });
    });
  });

  // Add location pages
  locations.forEach(location => {
    pages.push({
      url: `/areas/${location.slug}`,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    pages.push({
      url: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.7'
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;
}

export { generateSitemapXML };