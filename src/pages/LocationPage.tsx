import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ExternalLink } from 'lucide-react';
import { locations } from '../data/locations';
import { CallbackForm } from '../components/CallbackForm';

export function LocationPage() {
  const { locationSlug } = useParams();
  const location = locations.find(l => l.slug === locationSlug);

  if (!location) {
    return <div>Location not found</div>;
  }

  const mainServices = [
    {
      title: "Residential Plumber",
      path: "/services/residential",
      description: "Complete home plumbing solutions including repairs, installations, and maintenance."
    },
    {
      title: "Commercial Plumber",
      path: "/services/commercial",
      description: "Professional plumbing services for businesses of all sizes."
    },
    {
      title: "Eco-Friendly Services",
      path: "/services/eco-friendly",
      description: "Sustainable plumbing solutions and water conservation services."
    },
    {
      title: "Emergency Plumber",
      path: "/services/emergency",
      description: "24/7 emergency plumbing services for urgent issues."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Expert Plumbing Services in ${location.name} | Narsso Plumbing`}</title>
        <meta name="description" content={`Professional plumbing services in ${location.name}. 24/7 emergency repairs, installations, and maintenance. Licensed and insured plumbers.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Narsso Construction & Plumbing",
            "image": location.image,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location.name,
              "addressRegion": "IL"
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
          })}
        </script>
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-6">Plumbing Services in {location.name}</h1>
              <img
                src={location.image}
                alt={`Plumbing services in ${location.name}`}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  {location.description}{' '}
                  <a 
                    href={location.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    Learn more about {location.name} <ExternalLink className="w-4 h-4" />
                  </a>
                </p>
                
                <h2 className="text-2xl font-bold mb-4">Areas We Serve in {location.name}</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {location.landmarks.map((landmark, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p>{landmark}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">ZIP Codes Served</h2>
                <div className="grid grid-cols-3 gap-2 mb-8">
                  {location.zipCodes.map((zip, index) => (
                    <div key={index} className="bg-gray-50 p-2 text-center rounded">
                      {zip}
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4">Available Services</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {mainServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <CallbackForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}