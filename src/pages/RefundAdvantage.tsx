import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';

export function RefundAdvantage() {
  return (
    <>
      <Helmet>
        <title>Refund Advantage | QRTaxPro Bank Products</title>
        <meta 
          name="description" 
          content="Refund Advantage offers comprehensive refund banking solutions for tax professionals, including refund transfers and banking services." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="text-center mb-8">
                <img 
                  src="https://managemytaxbusiness.com/images/logos/refund-advantage-logo.webp" 
                  alt="Logo of Refund Advantage - A Bank Product for QRTaxPro"
                  className="mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold mb-4">Refund Advantage - QRTaxPro Bank Products</h1>
                <a 
                  href="tel:+18009674934" 
                  className="text-[#0085cc] hover:text-[#006ba3] font-semibold"
                  title="Click to call Refund Advantage"
                >
                  (800) 967-4934
                </a>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg">
                  With over 50 years of combined experience in the refund bank product industry, our management and oversight team is committed to creating the best refund banking experience possible. Our team has the distinction of starting the refund banking programs of the 4th and 5th largest national RAL banks. Yet, in Refund Advantage, we have created something uniquely different. Now there's a program that lets you earn the money you deserve. Finally, there is a refund program that works to your advantage.
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
                    className="block text-gray-600 hover:text-[#f75e00] transition-colors"
                  >
                    EPS
                  </a>
                  <a 
                    href="/bank-products/refund-advantage"
                    className="block text-[#f75e00] font-semibold"
                  >
                    Refund Advantage
                  </a>
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Need assistance?</p>
                  <a
                    href="tel:+18009674934"
                    className="flex items-center gap-2 text-[#0085cc] hover:text-[#006ba3] font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    (800) 967-4934
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