import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight } from 'lucide-react';
import type { ServiceCategory } from '../types';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  return (
    <Link
      to={`/services/${category.slug}`}
      className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
    >
      <div className="text-blue-600 mb-4">
        <Wrench className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
        {category.title}
      </h2>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <div className="flex items-center text-blue-600 font-semibold">
        View Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
      </div>
    </Link>
  );
}