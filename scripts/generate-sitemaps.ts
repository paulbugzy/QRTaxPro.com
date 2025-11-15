import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { products } from '../src/data/products';

const BASE_URL = process.env.SITEMAP_BASE_URL ?? 'https://qrtaxpro.com';

type UrlEntry = {
  loc: string;
  changefreq: string;
  priority: string;
};

const staticPages: UrlEntry[] = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/tax-software', changefreq: 'monthly', priority: '0.9' },
  { loc: '/training', changefreq: 'monthly', priority: '0.9' },
  { loc: '/training/mytaxacademy', changefreq: 'monthly', priority: '0.8' },
  { loc: '/training/software', changefreq: 'monthly', priority: '0.8' },
  { loc: '/training/ce-center', changefreq: 'monthly', priority: '0.8' },
  { loc: '/online-payroll', changefreq: 'monthly', priority: '0.8' },
  { loc: '/get-payroll', changefreq: 'monthly', priority: '0.7' },
  { loc: '/bank-products', changefreq: 'monthly', priority: '0.8' },
  { loc: '/bank-products/eps', changefreq: 'monthly', priority: '0.7' },
  { loc: '/bank-products/refund-advantage', changefreq: 'monthly', priority: '0.7' },
  { loc: '/marketing', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' }
];

const productPages: UrlEntry[] = products.map((product) => ({
  loc: `/marketing/products/${product.id}`,
  changefreq: 'monthly',
  priority: '0.6'
}));

function buildSitemap(urls: UrlEntry[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${BASE_URL}${entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
}

function buildSitemapIndex(files: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files
  .map(
    (file) => `  <sitemap>
    <loc>${BASE_URL}/${file}</loc>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>
`;
}

const publicDir = resolve(process.cwd(), 'public');
const sitemapPagesPath = resolve(publicDir, 'sitemap-pages.xml');
const sitemapProductsPath = resolve(publicDir, 'sitemap-products.xml');
const sitemapIndexPath = resolve(publicDir, 'sitemap-index.xml');

writeFileSync(sitemapPagesPath, buildSitemap(staticPages));
writeFileSync(sitemapProductsPath, buildSitemap(productPages));
writeFileSync(
  sitemapIndexPath,
  buildSitemapIndex(['sitemap-pages.xml', 'sitemap-products.xml'])
);

console.log('Sitemaps generated:');
console.log(` - ${sitemapPagesPath}`);
console.log(` - ${sitemapProductsPath}`);
console.log(` - ${sitemapIndexPath}`);
