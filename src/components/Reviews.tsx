import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { generateReviewsListSchema } from '../utils/schema-generators';
import { Helmet } from 'react-helmet-async';

const reviews = [
  {
    name: "Michael R.",
    location: "Lincoln Park",
    rating: 5,
    text: "Excellent service! Fixed our emergency leak within an hour of calling.",
    date: "2024-03-01"
  },
  {
    name: "Sarah L.",
    location: "Lakeview",
    rating: 5,
    text: "Professional, punctual, and fairly priced. Highly recommend!",
    date: "2024-02-28"
  },
  {
    name: "David K.",
    location: "Logan Square",
    rating: 5,
    text: "Great experience with water heater installation. Very knowledgeable team.",
    date: "2024-02-25"
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateReviewsListSchema(reviews))}
        </script>
      </Helmet>

      <section className="py-20" aria-labelledby="reviews-title">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 id="reviews-title" className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center mx-16"
              >
                <div className="flex justify-center text-yellow-400 mb-4" role="img" aria-label={`${reviews[currentIndex].rating} out of 5 stars`}>
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-4">"{reviews[currentIndex].text}"</p>
                <div className="font-semibold text-gray-900">{reviews[currentIndex].name}</div>
                <div className="text-sm text-gray-600">{reviews[currentIndex].location}, Chicago</div>
                <div className="text-sm text-gray-500 mt-2">{reviews[currentIndex].date}</div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 gap-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-8 h-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}