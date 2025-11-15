import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';

export function EPS() {
  return (
    <>
      <Helmet>
        <title>EPS Financial | QRTaxPro Bank Products</title>
        <meta 
          name="description" 
          content="EPS Financial offers complete payment processing solutions for tax professionals, including refund transfers, taxpayer advances, and ERO loans." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="text-center mb-8">
                <img 
                  src="https://managemytaxbusiness.com/images/logos/eps.webp" 
                  alt="Logo of EPS - A Bank Product for QRTaxPro"
                  className="mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold mb-4">EPS - QRTaxPro Bank Products</h1>
                <a 
                  href="tel:+18778014411" 
                  className="text-[#0085cc] hover:text-[#006ba3] font-semibold"
                  title="Click to call EPS"
                >
                  (877) 801-4411
                </a>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg">
                  <strong>EPS Financial</strong> is the Complete Payments Processor for tax professionals, 
                  providing a suite of à la carte cost-effective solutions for all tax office financial 
                  transactions. Offering the lowest cost refund transfer programs, taxpayer refund advances, 
                  ERO loans, as well as seasonally-priced credit and debit card processing. Our 
                  industry-leading systems, award-winning customer support, and business reporting tools 
                  will empower your office with the best payment solutions platform in the industry.
                </p>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Bank Products</h3>
                <nav className="space-y-2">
                  <a 
                    href="/bank-products"
                    className="block text-gray-600 hover:text-[#f75e00] transition-colors"
                  >
                    Overview
                  </a>
                  <a 
                    href="/bank-products/eps"
                    className="block text-[#f75e00] font-semibold"
                  >
                    EPS
                  </a>
                  <a 
                    href="/bank-products/refund-advantage"
                    className="block text-gray-600 hover:text-[#f75e00] transition-colors"
                  >
                    Refund Advantage
                  </a>
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Need assistance?</p>
                  <a
                    href="tel:+18778014411"
                    className="flex items-center gap-2 text-[#0085cc] hover:text-[#006ba3] font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    (877) 801-4411
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}