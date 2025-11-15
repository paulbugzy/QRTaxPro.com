import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTABanner() {
  return (
    <section className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Need Emergency Plumbing Service?</h2>
            <p className="text-lg text-white">Available 24/7 for urgent plumbing issues</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8472421286"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Call (847) 242-1286</span>
            </a>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
            >
              <span>Schedule Service</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}