import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import { companyInfo } from '../data/company';

export function TaxSoftware() {
  const PRICE = 399;

  return (
    <>
      <Helmet>
        <title>Professional Tax Software | QRTaxPro</title>
        <meta 
          name="description" 
          content="QRTaxPro offers comprehensive tax preparation software with individual and business modules, all states included, and advanced features for tax professionals." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-6">Tax Software</h1>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f75e00' }}>QRTaxPro</h2>
              
              <p className="text-lg mb-6">
                <strong>QRTaxPro</strong> is a comprehensive, simple and easy tax software. QRTaxPro is a powerful 
                software that includes the individual and business modules as well as all states. It's easy to 
                complete a tax return in minutes!
              </p>

              <h3 className="text-xl font-bold mb-4" style={{ color: '#0085cc' }}>
                QRTaxPro Cloud is designed to let you enjoy the freedom of:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Preparing client returns anywhere with just a web browser',
                  'Accessing the most complete features and tax updates online',
                  'Safeguarding client data in a secure environment'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4" style={{ color: '#f75e00' }}>
                QRTaxPro Desktop powerful software includes the following:
              </h3>
              <ul className="space-y-3">
                {[
                  'Individual & Business Modules',
                  'All 50 States',
                  'E-Filing',
                  'Document & Scanning Manager',
                  'Electronic Signature',
                  'Audit Trail',
                  'E-File within the Tax Return 2022, 2023 and 2024 Tax Years',
                  'Tell A Friend Coupon Generator',
                  'Auto Email Tax Return with Password Protection',
                  'Occupation Field with Autofill',
                  'Simplified 1040X with Generated Explanation of Changes',
                  'Bank Product Interface'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">QRTaxPro Software</h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold" style={{ color: '#f75e00' }}>${PRICE}</p>
                  <p className="text-gray-600">One-time payment</p>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:+13129392222" title="Click to call and purchase QRTaxPro"
                    className="block w-full py-3 px-6 bg-[#f75e00] text-white text-center rounded-full hover:bg-[#d95400] transition-colors"
                  >
                    Purchase Now
                  </a>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">Need help? Contact us:</p>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                    className="text-[#0085cc] hover:text-[#006ba3] font-semibold"
                  >
                    {companyInfo.phone}
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