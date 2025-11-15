import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { serviceCategories } from '../data/services';
import { ServiceHero } from '../components/ServiceHero';
import { ServiceList } from '../components/ServiceList';
import { CTABanner } from '../components/CTABanner';
import { generateServiceCategorySchema } from '../utils/schema';

export function ServiceCategoryPage() {
  const { categorySlug } = useParams();
  const category = serviceCategories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${category.title} in Chicago | Narsso Plumbing`}</title>
        <meta name="description" content={category.description} />
        <script type="application/ld+json">
          {JSON.stringify(generateServiceCategorySchema(category))}
        </script>
      </Helmet>

      <main>
        <ServiceHero
          title={category.title}
          description={category.description}
        />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <ServiceList
              services={category.services}
              categorySlug={category.slug}
            />
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
}