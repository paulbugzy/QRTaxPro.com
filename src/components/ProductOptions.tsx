import React, { useState } from 'react';
import type { Product } from '../types/products';

interface ProductOptionsProps {
  product: Product;
  onSubmit: (options: Record<string, string>) => void;
}

export function ProductOptions({ product, onSubmit }: ProductOptionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const newErrors: Record<string, string> = {};
    product.customOptions?.forEach(option => {
      if (option.required && !options[option.name]) {
        newErrors[option.name] = `${option.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(options);
  };

  const handleChange = (name: string, value: string) => {
    setOptions(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Product Options</h2>

      {product.customOptions?.map(option => {
        // Only show conditional fields if their condition is met
        if (option.conditional && options[option.conditional.dependsOn] !== option.conditional.showWhen) {
          return null;
        }

        return (
          <div key={option.id} className="space-y-2">
            <label className="block font-medium">
              {option.label}
              {option.required && <span className="text-red-500">*</span>}
            </label>

            {option.type === 'radio' && option.options && (
              <div className="space-y-2">
                {option.options.map(choice => (
                  <label key={choice.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={option.name}
                      value={choice.value}
                      checked={options[option.name] === choice.value}
                      onChange={e => handleChange(option.name, e.target.value)}
                      className="text-blue-600"
                    />
                    <span>{choice.label}</span>
                    {choice.price !== undefined && choice.price > 0 && (
                      <span className="text-gray-600">(+${choice.price.toFixed(2)})</span>
                    )}
                  </label>
                ))}
              </div>
            )}

            {option.type === 'text' && (
              <input
                type="text"
                value={options[option.name] || ''}
                onChange={e => handleChange(option.name, e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                maxLength={option.validation?.maxLength}
              />
            )}

            {option.type === 'textarea' && (
              <textarea
                value={options[option.name] || ''}
                onChange={e => handleChange(option.name, e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={4}
              />
            )}

            {option.type === 'file' && (
              <input
                type="file"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleChange(option.name, file.name);
                  }
                }}
                accept={option.validation?.allowedExtensions?.join(',')}
                className="w-full"
              />
            )}

            {errors[option.name] && (
              <p className="text-red-500 text-sm">{errors[option.name]}</p>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="w-full bg-[#f75e00] text-white py-3 px-6 rounded-full hover:bg-[#d95400] transition-colors"
      >
        Continue to Customer Information
      </button>
    </form>
  );
}