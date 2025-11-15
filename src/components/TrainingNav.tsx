import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { companyInfo } from '../data/company';

export function TrainingNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: '/training', label: 'Overview' },
    { path: '/training/software', label: 'Software Training' },
    { path: '/training/mytaxacademy', label: 'MyTaxAcademy' },
    { path: '/training/ce-center', label: 'Online CE Center' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-4">Training Resources</h3>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block transition-colors ${
              currentPath === link.path 
                ? 'text-[#f75e00] font-semibold' 
                : 'text-gray-600 hover:text-[#f75e00]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Need assistance?</p>
        <a
          href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
          className="flex items-center gap-2 text-[#0085cc] hover:text-[#006ba3] font-semibold"
        >
          <Phone className="w-4 h-4" />
          {companyInfo.phone}
        </a>
      </div>
    </div>
  );
}