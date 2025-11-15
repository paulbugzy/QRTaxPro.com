import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';

export function BlogPostPage() {
  const { postSlug } = useParams();
  const post = blogPosts.find(p => p.slug === postSlug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Narsso Plumbing Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image,
            "datePublished": post.date,
            "articleBody": post.content,
            "publisher": {
              "@type": "Organization",
              "name": "Narsso Construction & Plumbing",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": post.speakable.cssSelector
            }
          })}
        </script>
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 article-headline">{post.title}</h1>
              <div className="text-gray-600 mb-4">{post.date}</div>
              <p className="text-xl text-gray-600 article-summary">{post.excerpt}</p>
            </header>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </main>
    </>
  );
}