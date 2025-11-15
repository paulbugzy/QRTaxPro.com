import type { ServiceCategory, Location, BlogPost } from '../types';

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export function generateMetaTags(data: MetaTags) {
  return {
    title: `${data.title} | Narsso Plumbing Chicago`,
    meta: [
      {
        name: 'description',
        content: data.description
      },
      {
        name: 'keywords',
        content: data.keywords
      },
      {
        property: 'og:title',
        content: data.title
      },
      {
        property: 'og:description',
        content: data.description
      },
      {
        property: 'og:type',
        content: data.ogType || 'website'
      },
      {
        property: 'og:image',
        content: data.ogImage || '/logo.png'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: data.title
      },
      {
        name: 'twitter:description',
        content: data.description
      },
      {
        name: 'twitter:image',
        content: data.ogImage || '/logo.png'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: data.canonical || window.location.href
      }
    ]
  };
}

export function generateServiceSchema(service: ServiceCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Narsso Construction & Plumbing",
      "@id": "https://narssoplumbing.com/#organization",
      "url": "https://narssoplumbing.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://narssoplumbing.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "sameAs": [
        "https://www.facebook.com/narssoplumbing",
        "https://twitter.com/narssoplumbing",
        "https://www.instagram.com/narssoplumbing",
        "https://www.yelp.com/biz/narsso-plumbing-chicago"
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.services.map((item, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.title,
          "description": item.description
        },
        "position": index + 1
      }))
    }
  };
}

export function generateLocationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Narsso Construction & Plumbing",
    "@id": `https://narssoplumbing.com/areas/${location.slug}#business`,
    "image": location.image,
    "url": `https://narssoplumbing.com/areas/${location.slug}`,
    "telephone": "(773) 234-3322",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.lat,
      "longitude": location.lng
    },
    "areaServed": location.zipCodes.map(zip => ({
      "@type": "PostalCodeRangeSpecification",
      "postalCode": zip
    })),
    "sameAs": [location.wikiUrl]
  };
}

export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Narsso Construction & Plumbing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Narsso Construction & Plumbing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://narssoplumbing.com/logo.png"
      }
    },
    "description": post.excerpt,
    "articleBody": post.content,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": post.speakable.cssSelector
    }
  };
}