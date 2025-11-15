import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Plumbing Tips & News | Narsso Plumbing Blog</title>
        <meta name="description" content="Stay informed with the latest plumbing tips, maintenance advice, and industry news from Chicago's trusted plumbing experts." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Narsso Plumbing Blog",
            "description": "Expert plumbing tips and advice",
            "publisher": {
              "@type": "Organization",
              "name": "Narsso Construction & Plumbing",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "Narsso Construction & Plumbing"
              }
            }))
          })}
        </script>
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Plumbing Tips & News</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}