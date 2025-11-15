import React from 'react';
import { Shield, Star, Clock } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-lg">5-Star Rated on Google (127+ Reviews)</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Expert Plumbing Services in Chicago – Licensed & Reliable Plumbers Near You
          </h1>
          <p className="text-xl mb-8">
            Professional plumbing solutions for residential and commercial properties. 
            Available 24/7 for emergency repairs.
          </p>
          <div className="flex gap-4 mb-8">
            <a 
              href="tel:8472421286" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Call Now: (847) 242-1286
            </a>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Free Estimate
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}