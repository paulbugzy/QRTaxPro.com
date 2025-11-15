import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import { locations } from '../data/locations';

export function LocationsPage() {
  return (
    <>
      <Helmet>
        <title>Service Areas | Narsso Plumbing Chicago</title>
        <meta name="description" content="Professional plumbing services across Chicago and surrounding areas including Skokie, Evanston, and more. Licensed plumbers serving your neighborhood." />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Our Service Areas</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/areas/${location.slug}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img
                  src={location.image}
                  alt={`Plumbing services in ${location.name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <MapPin className="w-5 h-5" />
                    <h2 className="text-xl font-bold">{location.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="text-sm text-gray-500">
                    Serving ZIP codes: {location.zipCodes.slice(0, 3).join(", ")}
                    {location.zipCodes.length > 3 && " and more"}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}