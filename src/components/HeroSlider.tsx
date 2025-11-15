import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: 'https://managemytaxbusiness.com/images/slides/1.webp',
    title: 'Tax Software',
    subtitle: 'QRTaxPro - Tax Preparation Software',
    link: '/tax-software'
  },
  {
    image: 'https://managemytaxbusiness.com/images/slides/2.webp',
    title: 'Training',
    subtitle: 'Software Training, RTRP Training Courses, Online Continuing Education',
    link: '/training'
  },
  {
    image: 'https://managemytaxbusiness.com/images/slides/3.webp',
    title: 'Bank Products',
    subtitle: 'Everything You Need for Your Tax Business',
    link: '/bank-products'
  },
  {
    image: 'https://managemytaxbusiness.com/images/slides/4.webp',
    title: 'Marketing',
    subtitle: 'Professional Campaigns for Your Business',
    link: '/marketing'
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
      <div className="max-w-[950px] mx-auto">
        {/* Current Slide */}
        <div className="relative h-[383px]">
          <Link to={slides[currentSlide].link}>
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: 1 }}
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
                width={950}
                height={383}
              />
            </div>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnails and Text */}
        <div className="bg-[#5c5c5c] w-full">
          <ul className="flex w-[950px] mx-auto">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`w-1/4 border-l border-[#4a4a4a] first:border-l-0 cursor-pointer transition-colors ${
                  index === currentSlide ? 'bg-[#474747]' : 'hover:bg-[#525252]'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="p-4 text-white">
                  <h4 className="font-bold mb-1">{slide.title}</h4>
                  <p className="text-sm text-gray-300 line-clamp-2">{slide.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}