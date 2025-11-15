import type { ServiceCategory, Location } from '../types';

const providerInfo = {
  "@type": "LocalBusiness",
  "name": "QRTaxPro",
  "legalName": "QRTaxPro",
  "alternateName": "QR",
  "url": "https://qrtaxpro.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://qrtaxpro.com/images/logos/logo.webp"
  },
  "telephone": "+13129392222",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10700 W Higgins",
    "addressLocality": "Rosemont",
    "addressRegion": "IL",
    "postalCode": "60018",
    "addressCountry": "US"
  }
};

export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      ...providerInfo,
      "priceRange": "$$"
    },
    "ratingValue": "5",
    "reviewCount": "22",
    "bestRating": "5",
    "worstRating": "1"
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://qrtaxpro.com${item.url}`
    }))
  };
}

export function generateReviewsListSchema(reviews: Array<{
  name: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    ...providerInfo,
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date || new Date().toISOString().split('T')[0],
      "reviewBody": review.text,
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      }
    }))
  };
}

export function generateServiceSchema(service: ServiceCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": providerInfo,
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    }
  };
}

export function generateLocationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    ...providerInfo,
    "name": `Narsso Plumbing - ${location.name}`,
    "description": location.description,
    "image": location.image,
    "url": `https://qrtaxpro.com/areas/${location.slug}`,
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "sameAs": location.wikiUrl
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.lat,
      "longitude": location.lng
    }
  };
}