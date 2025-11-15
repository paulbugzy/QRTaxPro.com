import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import { ProductOrderForm } from '../components/ProductOrderForm';

export function ProductPage() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} | QRTaxPro`}</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
              <div 
                className="prose max-w-none mt-8"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div>
              <ProductOrderForm product={product} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}