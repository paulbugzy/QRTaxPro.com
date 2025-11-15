import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';

export function OnlineCECenter() {
  return (
    <>
      <Helmet>
        <title>Online CE Center | QRTaxPro</title>
        <meta 
          name="description" 
          content="Access quality online continuing education services for tax professionals through our partnership with APlusCPE®." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Online CE Center</h1>
            <h2 className="text-2xl mb-6">Quality Services for Continuing Education Online</h2>
            
            <p className="text-lg mb-6">
              We have partnered with APlusCPE®, a service of WebCE®, to deliver quality online 
              continuing education services to:
            </p>

            <ul className="space-y-3 mb-12 pl-8">
              {[
                'Registered Tax Return Preparers',
                'Enrolled Agents',
                'California Tax Return Preparers',
                'Certified Financial Planners',
                'Insurance Agents',
                'Mortgage Agents'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-6">
              Tools & Solutions for Enrolled Agents & Tax Return Preparers
            </h2>
            
            <p className="text-lg mb-6">
              APlusCPE also offers a variety of exam prep tools and solutions to help tax return 
              preparers pass the IRS Competency Test, including online study materials and an 
              online practice exams.
            </p>

            <p className="text-lg">
              Most of APlusCPE's online Enrolled Agent and Tax Return Preparer CPE Courses are 
              also approved for insurance CE credit, and satisfy CFP Board education requirements.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}