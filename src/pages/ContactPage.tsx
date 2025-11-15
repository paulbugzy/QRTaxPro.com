import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../data/company';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | QRTaxPro</title>
        <meta 
          name="description" 
          content="Contact QRTaxPro for professional tax software solutions and support. Get in touch with our team today." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": companyInfo.name,
              "telephone": companyInfo.phone,
              "email": companyInfo.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": companyInfo.address.street,
                "addressLocality": companyInfo.address.city,
                "addressRegion": companyInfo.address.state,
                "postalCode": companyInfo.address.zip,
                "addressCountry": "US"
              }
            }
          })}
        </script>
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#f75e00] flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <address className="not-italic">
                        {companyInfo.address.street}<br />
                        {companyInfo.address.suite}<br />
                        {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#f75e00] flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a 
                        href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                        className="text-[#0085cc] hover:text-[#006ba3]"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#f75e00] flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a 
                        href={`mailto:${companyInfo.email}`}
                        className="text-[#0085cc] hover:text-[#006ba3]"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0085cc] focus:ring-[#0085cc]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0085cc] focus:ring-[#0085cc]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0085cc] focus:ring-[#0085cc]"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f75e00] text-white py-2 px-4 rounded-md hover:bg-[#d95400] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="QRTaxPro Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.0825094618584!2d-87.8870493!3d41.9847752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0228d2434d1%3A0x9e26edb7c2d3db0f!2s10700%20W%20Higgins%20Rd%2C%20Rosemont%2C%20IL%2060018!5e0!3m2!1sen!2sus!4v1709901234567!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}