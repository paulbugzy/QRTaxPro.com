import React from 'react';
import { Shield, Clock, Award, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent plumbing issues"
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by our satisfied customers"
  },
  {
    icon: <ThumbsUp className="w-12 h-12" />,
    title: "Satisfaction Guaranteed",
    description: "We're not satisfied until you're completely happy with our work"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Narsso Plumbing?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}