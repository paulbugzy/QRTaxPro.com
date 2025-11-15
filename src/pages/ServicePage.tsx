import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { serviceCategories } from '../data/services';
import { CallbackForm } from '../components/CallbackForm';
import { FAQSection } from '../components/FAQSection';

export function ServicePage() {
  const { categorySlug, serviceSlug } = useParams();
  
  const service = serviceCategories
    .find(cat => cat.slug === categorySlug)
    ?.services.find(s => s.slug === serviceSlug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${service.title} in Chicago | Narsso Plumbing`}</title>
        <meta name="description" content={service.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Narsso Construction & Plumbing"
            },
            "areaServed": {
              "@type": "City",
              "name": "Chicago"
            },
            "description": service.description
          })}
        </script>
      </Helmet>
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
              <div className="prose max-w-none">
                <p className="text-lg mb-6">{service.description}</p>
                
                <h2 className="text-2xl font-bold mb-4">When to Hire a Plumber for {service.title}</h2>
                <ul className="list-disc pl-6 mb-6">
                  {service.hiring.map((item, index) => (
                    <li key={index}>{item.point}</li>
                  ))}
                </ul>
                
                <FAQSection faqs={service.faqs} />
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