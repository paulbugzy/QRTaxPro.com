import React from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Marketing() {
  const taxSoftware = products.filter(p => p.category === 'tax-software');
  const businessCards = products.filter(p => p.category === 'business-cards');
  const foldersAndEnvelopes = products.filter(p => 
    p.category === 'folders' || p.category === 'envelopes'
  );

  return (
    <>
      <Helmet>
        <title>Marketing Materials & Products | QRTaxPro</title>
        <meta 
          name="description" 
          content="Professional marketing materials and products for tax professionals. Business cards, tax return folders, envelopes, and more." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Marketing Materials & Products</h1>
          
          {/* Tax Software */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tax Software</h2>
            <div className="max-w-2xl">
              {taxSoftware.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Business Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Business Cards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessCards.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Folders and Envelopes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tax Return Materials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {foldersAndEnvelopes.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}