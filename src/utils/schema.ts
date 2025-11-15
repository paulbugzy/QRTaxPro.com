import type { ServiceCategory, Location, BlogPost } from '../types';

const areaServed = [
  "Arlington Heights", "Chicago", "Deerfield", "Des Plaines", "Elk Grove Village", 
  "Evanston", "Glenview", "Highland Park", "Lake Forest", "Long Grove", 
  "Melrose Park", "Morton Grove", "Mount Prospect", "Niles", "Rosemont", 
  "Schaumburg", "Schiller Park", "Skokie", "Wheeling", "Winnetka"
];

const providerInfo = {
  "@type": "LocalBusiness",
  "name": "Narsso Construction and Plumbing",
  "legalName": "NARSSO CONSTRUCTION & PLUMBING, LLC",
  "alternateName": "Narsso Plumbing",
  "url": "https://narssoplumbing.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://narssoplumbing.com/images/logo.png"
  },
  "telephone": "+18472421286",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1700 Woodland Ave",
    "addressLocality": "Des Plaines",
    "addressRegion": "IL",
    "postalCode": "60016",
    "addressCountry": "US"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "22",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Certified Illinois Plumber",
      "description": "Licensed plumber certified by the state of Illinois to perform plumbing services.",
      "credentialCategory": "Professional Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "State of Illinois Plumbing Board",
        "url": "https://www2.illinois.gov"
      }
    }
  ],
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "D-U-N-S",
    "value": "02-956-6068"
  },
  "areaServed": areaServed,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    }
  ]
};

export function generateServiceCategorySchema(category: ServiceCategory) {
  const isResidential = category.slug === 'residential';
  const isCommercial = category.slug === 'commercial';

  const baseSchema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": [
      `${isResidential ? 'Residential' : 'Commercial'} Plumber`,
      "Emergency Plumber",
      "Eco-Friendly Plumbing Solutions",
      "Water Filtration System Installation"
    ],
    "category": [
      "Plumbing Services",
      `${isResidential ? 'Residential' : 'Commercial'} Plumber`,
      "Emergency Plumber",
      "Water Filtration Systems"
    ],
    "serviceOutput": [
      {
        "@type": "Service",
        "name": "Functional Plumbing Systems",
        "description": `Fully operational and efficient plumbing systems for ${isResidential ? 'your home' : 'businesses and commercial properties'}.`
      },
      {
        "@type": "Service",
        "name": "Emergency Plumbing Repairs",
        "description": "Immediate resolution of urgent plumbing issues like leaks, blockages, and floods."
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": isResidential 
        ? ["Homeowners", "Renters", "Property Managers", "General Public"]
        : ["Business Owners", "Property Managers", "Commercial Establishments", "General Public"],
      "description": `Our services are tailored for ${isResidential ? 'homeowners, renters, property managers' : 'business owners, property managers, commercial establishments'} and anyone in the general public requiring plumbing solutions.`
    },
    "areaServed": areaServed,
    "provider": providerInfo,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${isResidential ? 'Residential' : 'Commercial'} Plumbing Services`,
      "itemListElement": [
        ...category.services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "category": "Plumbing Services",
            "description": service.description,
            "serviceOutput": service.hiring.map(point => ({
              "@type": "Thing",
              "name": point.point
            }))
          }
        })),
        {
          "@type": "OfferCatalog",
          "name": "Emergency Plumber Services",
          "category": "Emergency Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "24/7 Emergency Plumbing Services",
                "category": "Emergency Services",
                "description": "Round-the-clock plumbing services to address urgent issues like leaks, blockages, or flooding.",
                "serviceOutput": "Fast response and immediate resolution of emergency plumbing issues.",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "servicePhone": {
                    "@type": "ContactPoint",
                    "telephone": "+18472421286",
                    "contactType": "emergency plumber",
                    "areaServed": areaServed,
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                      ],
                      "opens": "00:00",
                      "closes": "23:59"
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    }
  };

  return baseSchema;
}

export function generateLocationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    ...providerInfo,
    "name": `Narsso Plumbing - ${location.name}`,
    "description": location.description,
    "image": location.image,
    "url": `https://narssoplumbing.com/areas/${location.slug}`,
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "sameAs": location.wikiUrl
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.lat,
      "longitude": location.lng
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": location.lat,
        "longitude": location.lng
      },
      "geoRadius": "10000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Plumbing",
          "url": "https://narssoplumbing.com/services/residential"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Plumbing",
          "url": "https://narssoplumbing.com/services/commercial"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Plumbing",
          "url": "https://narssoplumbing.com/services/emergency"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Eco-Friendly Plumbing",
          "url": "https://narssoplumbing.com/services/eco-friendly"
        }
      }
    ]
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
    "author": providerInfo,
    "publisher": providerInfo,
    "description": post.excerpt,
    "articleBody": post.content,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": post.speakable.cssSelector
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://narssoplumbing.com/blog/${post.slug}`
    }
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  ...providerInfo,
  "sameAs": [
    "https://www.facebook.com/narssoplumbing",
    "https://www.instagram.com/narssoplumbing",
    "https://twitter.com/narssoplumbing"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+18472421286",
      "contactType": "customer service",
      "areaServed": areaServed,
      "availableLanguage": ["English", "Spanish"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+18472421286",
      "contactType": "emergency",
      "areaServed": areaServed,
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ]
};