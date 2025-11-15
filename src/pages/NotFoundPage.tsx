import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, GraduationCap, Phone, CreditCard } from 'lucide-react';
import { companyInfo } from '../data/company';

export function NotFoundPage() {
  const quickLinks = [
    {
      title: "Tax Software",
      description: "Professional tax preparation software for your business",
      path: "/tax-software",
      icon: Home
    },
    {
      title: "Training",
      description: "Access comprehensive training resources and CE courses",
      path: "/training",
      icon: GraduationCap
    },
    {
      title: "Bank Products",
      description: "Explore our bank product solutions",
      path: "/bank-products",
      icon: CreditCard
    }
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found | QRTaxPro</title>
        <meta 
          name="description" 
          content="The page you're looking for cannot be found. Explore our tax software solutions, training resources, and bank products." 
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-[calc(100vh-200px)] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-[#0085cc] mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist, but we can help you find what you need.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0085cc] text-white rounded-full hover:bg-[#006ba3] transition-colors"
              >
                <Home className="w-5 h-5" />
                Return Home
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f75e00] text-white rounded-full hover:bg-[#d95400] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {companyInfo.phone}
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <link.icon className="w-8 h-8 text-[#0085cc] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Link
                    to={link.path}
                    className="text-[#0085cc] hover:text-[#006ba3] font-semibold inline-flex items-center gap-2"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}