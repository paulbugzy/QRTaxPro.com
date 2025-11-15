import React from 'react';
import { Helmet } from 'react-helmet-async';
import { serviceCategories } from '../data/services';
import { ServiceCategoryCard } from '../components/ServiceCategoryCard';
import { CTABanner } from '../components/CTABanner';

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Professional Plumbing Services | Narsso Plumbing Chicago</title>
        <meta 
          name="description" 
          content="Comprehensive plumbing services in Chicago including emergency repairs, installations, water filtration, and eco-friendly solutions. Available 24/7."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Narsso Construction & Plumbing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US"
              },
              "telephone": "(773) 234-3322"
            },
            "areaServed": {
              "@type": "City",
              "name": "Chicago"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": serviceCategories.map((category, index) => ({
                "@type": "OfferCatalog",
                "name": category.title,
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      <main>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plumbing Services</h1>
            <p className="text-xl text-blue-100">Professional plumbing solutions for every need</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>

        <CTABanner />
      </main>
    </>
  );
}