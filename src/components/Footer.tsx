import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mainMenu } from '../data/menu';
import { companyInfo } from '../data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://www.managemytaxbusiness.com/images/logos/logo.webp"
              className="mb-4"
            />
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}>
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p>{companyInfo.address.street}</p>
                  <p>{companyInfo.address.suite}</p>
                  <p>
                    {companyInfo.address.city}, {companyInfo.address.state}{' '}
                    {companyInfo.address.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {mainMenu.map((item) => (
                <li key={item.path}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#f75e00] transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-[#f75e00] transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/training/software"
                  className="hover:text-[#f75e00] transition-colors"
                >
                  Software Training
                </Link>
              </li>
              <li>
                <Link
                  to="/training/ce-center"
                  className="hover:text-[#f75e00] transition-colors"
                >
                  CE Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#f75e00] transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#f75e00] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#f75e00] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-[#f75e00] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
