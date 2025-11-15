import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';

export function BankProducts() {
  return (
    <>
      <Helmet>
        <title>Bank Products | QRTaxPro</title>
        <meta 
          name="description" 
          content="Explore our comprehensive bank product solutions for tax professionals. Partner with leading providers to offer secure refund options to your clients." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Bank Products</h1>
            
            <p className="text-lg mb-6">
              We work with the leading bank product providers so that you will have a variety of bank product options.
            </p>
            
            <p className="text-lg mb-6">
              Take advantage of bank product options! You will increase your fee-based revenues, and benefit your clients 
              to receive their refund securely. Offering bank products as a service to your clients will keep them coming back.
            </p>

            <p className="text-lg mb-4">You have a choice of the leading bank product providers:</p>
            <ul className="space-y-3 mb-8 pl-8">
              {[
                'EPS',
                'Refund Advantage',
                'Republic Bank',
                'Santa Barbara Tax Products Group',
                'And you have access to a variety of bank product options:'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#f75e00' }}>
                  Refund Anticipation Check (RAC)
                </h2>
                <p className="text-lg">
                  The RAC is for taxpayers who do not want to pay upfront and who need to receive a paper check at your office. 
                  After IRS deposits the refund (5-14 days after the return is accepted), the bank deposits your fees into your 
                  bank account and you print a check for the balance for the taxpayer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#f75e00' }}>
                  Refund Anticipation Deposit (RAD)
                </h2>
                <p className="text-lg">
                  Like the RAC, when the IRS deposits the refund (5-14 days after the return is accepted), the bank deposits 
                  your fees into your bank account and the balance into the taxpayer's personal account. There are no checks to print.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#f75e00' }}>
                  State Refund Anticipation Check (sRAC)
                </h2>
                <p className="text-lg">
                  The sRAC is for taxpayers who also want to receive the state refund as a paper check at your office. 
                  Your preparation fees are deducted from either the federal or state deposit - whichever is deposited first. 
                  The bank deposits your fees into your bank account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#f75e00' }}>
                  State Refund Anticipation Deposit (sRAD)
                </h2>
                <p className="text-lg">
                  Like the sRAC, the sRAD is for taxpayers who also want to receive the state refund as a Direct Deposit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}