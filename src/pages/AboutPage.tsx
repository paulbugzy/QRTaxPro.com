import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Award, Users, ThumbsUp } from 'lucide-react';
import { CallbackForm } from '../components/CallbackForm';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Narsso Plumbing | Chicago's Trusted Plumbing Experts</title>
        <meta name="description" content="Learn about Narsso Plumbing's commitment to excellence, our experienced team, and our dedication to providing top-quality plumbing services in Chicago." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Narsso Construction & Plumbing",
              "description": "Professional plumbing services in Chicago",
              "foundingDate": "2010",
              "areaServed": "Chicago Metropolitan Area",
              "award": [
                "5-Star Rated on Google",
                "Licensed & Insured Plumbing Contractor"
              ]
            }
          })}
        </script>
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Narsso Plumbing</h1>
            
            <div className="prose max-w-none mb-12">
              <p className="text-lg mb-6">
                Since 2010, Narsso Construction & Plumbing has been providing exceptional plumbing services to Chicago and its surrounding suburbs. Our commitment to quality, reliability, and customer satisfaction has made us one of the most trusted plumbing companies in the area.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                  <p>Fully licensed, bonded, and insured for your complete peace of mind.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Award className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Award-Winning Service</h3>
                  <p>Consistently rated 5 stars by our satisfied customers on Google.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Users className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                  <p>Our skilled technicians are trained in the latest plumbing technologies.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <ThumbsUp className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p>We stand behind our work with a 100% satisfaction guarantee.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="mb-8">
                Our mission is to provide reliable, efficient, and affordable plumbing solutions while maintaining the highest standards of professionalism and customer service. We believe in transparent pricing, timely service, and building long-lasting relationships with our clients.
              </p>

              <h2 className="text-3xl font-bold mb-4">Community Involvement</h2>
              <p className="mb-8">
                As a local Chicago business, we're committed to giving back to our community. We regularly participate in community events and support local initiatives to improve access to clean water and proper sanitation.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
              <CallbackForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}