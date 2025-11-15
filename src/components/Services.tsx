import React from 'react';
import { Droplet, Wrench, Home, Leaf } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Emergency Repairs",
    description: "24/7 emergency plumbing repairs for any urgent issues."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Installation Services",
    description: "Professional installation of fixtures, pipes, and plumbing systems."
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Water Filtration",
    description: "Advanced home water filtration system installation and maintenance."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Green Services",
    description: "Eco-friendly plumbing solutions with available tax incentives."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 id="services-title" className="text-4xl font-bold text-center mb-12">Our Services</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                role="article"
                aria-labelledby={`service-title-${index}`}
              >
                <div className="text-blue-600 mb-4" aria-hidden="true">{service.icon}</div>
                <h3 id={`service-title-${index}`} className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}