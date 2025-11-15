import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, CreditCard, Megaphone, Check } from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { CallToAction } from '../components/CallToAction';
import { companyInfo } from '../data/company';

export function Home() {
  return (
    <>
      <Helmet>
        <title>QRTaxPro | Software and Products for Tax Professionals</title>
        <meta 
          name="description" 
          content="QRTaxPro provides comprehensive tax software solutions, training, and resources for tax professionals. Streamline your tax preparation process today."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": companyInfo.name,
            "description": companyInfo.slogan,
            "url": "https://qrtaxpro.com",
            "logo": "/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": companyInfo.address.street,
              "addressLocality": companyInfo.address.city,
              "addressRegion": companyInfo.address.state,
              "postalCode": companyInfo.address.zip,
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": companyInfo.phone,
              "contactType": "sales",
              "email": companyInfo.email
            }
          })}
        </script>
      </Helmet>

      <main>
        <HeroSlider />

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Welcome to QRTaxPro</h1>
              <p className="text-lg text-gray-600">
                QRTaxPro is a comprehensive tax software solution designed for tax professionals. 
                Our powerful platform includes individual and business modules, all state returns, 
                and advanced features to streamline your tax preparation process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <GraduationCap className="w-12 h-12 text-[#0085cc] mb-4" />
                <h3 className="text-xl font-bold mb-2">MyTaxAcademy</h3>
                <p className="text-gray-600">
                  Access our online/classroom environment training program to train, 
                  evaluate and prepare candidates for the tax season.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <CreditCard className="w-12 h-12 text-[#0085cc] mb-4" />
                <h3 className="text-xl font-bold mb-2">Bank Products</h3>
                <p className="text-gray-600">
                  Partner with leading bank product providers to offer various options, 
                  increasing your fee-based revenues and client benefits.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Megaphone className="w-12 h-12 text-[#0085cc] mb-4" />
                <h3 className="text-xl font-bold mb-2">Marketing Materials</h3>
                <p className="text-gray-600">
                  Get everything from Custom Logo Design to Indoor & Outdoor Signs, 
                  Postcards, Magnetic Calendars and more.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-16">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Why Choose QRTaxPro?</h2>
                <ul className="space-y-4">
                  {[
                    'Comprehensive tax software with individual and business modules',
                    'All state returns included',
                    'Cloud-based solution for anywhere access',
                    'Advanced security features to protect client data',
                    'Integrated e-filing system',
                    'Regular updates and dedicated support'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/3">
                <CallToAction />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}