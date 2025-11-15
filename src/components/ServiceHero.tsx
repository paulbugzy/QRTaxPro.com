import React from 'react';
import { Phone } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
}

export function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 mb-8">{description}</p>
          <a
            href="tel:7732343322"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Call (773) 234-3322</span>
          </a>
        </div>
      </div>
    </div>
  );
}