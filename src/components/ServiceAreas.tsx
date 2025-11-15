import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';

export function ServiceAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Service Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              to={`/areas/${location.slug}`}
              className="flex items-center gap-2 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{location.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}