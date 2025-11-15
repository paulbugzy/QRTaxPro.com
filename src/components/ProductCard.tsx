import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <div 
          className="text-gray-600 mb-4 flex-grow"
          dangerouslySetInnerHTML={{ __html: product.shortDescription }}
        />
        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="text-2xl font-bold text-[#f75e00]">
            ${product.price.toFixed(2)}
          </span>
          <Link
            to={`/marketing/products/${product.id}`}
            className="bg-[#0085cc] text-white px-4 py-2 rounded-full hover:bg-[#006ba3] transition-colors"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}