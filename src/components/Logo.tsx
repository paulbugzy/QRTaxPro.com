import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export function Logo({ className = '', inverted = false }: LogoProps) {
  return (
    <Link 
      to="/" 
      className={`block ${className}`}
      aria-label="QRTaxPro - Home"
    >
      <picture>
        <source 
          srcSet="https://www.managemytaxbusiness.com/images/logos/logo.webp"
          type="image/webp"
        />
        <img
          src="https://www.managemytaxbusiness.com/images/logos/logo.png"
          alt="QRTaxPro"
          className={`h-12 w-auto ${inverted ? 'filter brightness-0 invert' : ''}`}
          width="200"
          height="48"
          loading="eager"
          fetchpriority="high"
        />
      </picture>
    </Link>
  );
}