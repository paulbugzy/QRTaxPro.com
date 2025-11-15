import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  categorySlug: string;
}

export function ServiceCard({ service, categorySlug }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${categorySlug}/${service.slug}`}
      className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center text-blue-600 font-semibold">
          Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
}