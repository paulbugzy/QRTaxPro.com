import type { MetaTag } from '../types/seo';

export function generateMetaTags(data: {
  title: string;
  description: string;
  image?: string;
  url: string;
}): MetaTag[] {
  const { title, description, image, url } = data;
  const siteName = 'QRTaxPro';
  const defaultImage = '/images/logo.png';

  return [
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | ${siteName}` },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image || defaultImage },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: siteName },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${title} | ${siteName}` },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image || defaultImage },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' }
  ];
}