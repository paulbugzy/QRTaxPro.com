import React from 'react';
import { ServiceCard } from './ServiceCard';
import type { Service } from '../types';

interface ServiceListProps {
  services: Service[];
  categorySlug: string;
}

export function ServiceList({ services, categorySlug }: ServiceListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.slug}
          service={service}
          categorySlug={categorySlug}
        />
      ))}
    </div>
  );
}