// Add to existing seo-enhancements.ts

// Job Posting Schema Generator
export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    ...job,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Narsso Construction & Plumbing",
      "sameAs": "https://narssoplumbing.com",
      "logo": "https://narssoplumbing.com/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    }
  };
}

// Event Schema Generator
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    ...event,
    "organizer": {
      "@type": "Organization",
      "name": "Narsso Construction & Plumbing",
      "url": "https://narssoplumbing.com"
    },
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    }
  };
}

// WebSite Schema Generator
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Narsso Construction & Plumbing",
  "url": "https://narssoplumbing.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://narssoplumbing.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Professional Service Schema Generator
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Narsso Construction & Plumbing",
  "image": "https://narssoplumbing.com/logo.png",
  "url": "https://narssoplumbing.com",
  "telephone": "(773) 234-3322",
  "priceRange": "$$",
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "availableService": [
    "Emergency Plumbing",
    "Water Heater Installation",
    "Drain Cleaning",
    "Pipe Repair",
    "Water Filtration Systems",
    "Eco-Friendly Plumbing Solutions"
  ]
};

// Aggregate Offer Schema Generator
export function generateAggregateOfferSchema(services: Array<{
  name: string;
  lowPrice: number;
  highPrice: number;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "offerCount": services.length,
    "offers": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name
      },
      "priceCurrency": "USD",
      "lowPrice": service.lowPrice,
      "highPrice": service.highPrice
    }))
  };
}

// Special Announcement Schema Generator
export function generateSpecialAnnouncementSchema(announcement: {
  name: string;
  text: string;
  datePosted: string;
  expires: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    ...announcement,
    "category": "https://www.wikidata.org/wiki/Q1198232",
    "announcementLocation": {
      "@type": "City",
      "name": "Chicago",
      "sameAs": "https://www.wikidata.org/wiki/Q1297"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Narsso Construction & Plumbing",
      "url": "https://narssoplumbing.com"
    }
  };
}