import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/company';

export function CallToAction() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
      <p className="text-gray-600 mb-6">
        Contact us to learn more about QRTaxPro software and start streamlining your tax preparation process.
      </p>
      
      <div className="space-y-4">
        <a
          href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
          className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-[#f75e00] text-white rounded-full hover:bg-[#d95400] transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Call {companyInfo.phone}</span>
        </a>
        
        <a
          href={`mailto:${companyInfo.email}`}
          className="flex items-center justify-center gap-2 w-full py-3 px-6 border-2 border-[#0085cc] text-[#0085cc] rounded-full hover:bg-[#0085cc] hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>Email Us</span>
        </a>
      </div>
    </div>
  );
}