import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play } from 'lucide-react';

const videoLinks = [
  {
    url: 'http://qrtax.com/softops/qrtaxpro/2009/99-QRSO-B-8-1/99-QRSO-B-8-1.html',
    title: 'Filing Status',
    image: 'https://www.managemytaxbusiness.com/downloadable/images/play-fil.jpg'
  },
  {
    url: 'http://qrtax.com/softops/qrtaxpro/2009/99-QRSO-B-8-2/99-QRSO-B-8-2.html',
    title: 'Income',
    image: 'https://www.managemytaxbusiness.com/downloadable/images/play-inc.jpg'
  },
  {
    url: 'http://qrtax.com/softops/qrtaxpro/2009/99-QRSO-B-8-3/99-QRSO-B-8-3.html',
    title: 'Adjustments',
    image: 'https://www.managemytaxbusiness.com/downloadable/images/play-adj.jpg'
  },
  {
    url: 'http://qrtax.com/softops/qrtaxpro/2009/99-QRSO-B-8-4/99-QRSO-B-8-4.html',
    title: 'Credits',
    image: 'https://www.managemytaxbusiness.com/downloadable/images/play-cre.jpg'
  },
  {
    url: 'http://qrtax.com/softops/qrtaxpro/2009/99-QRSO-B-8-5/99-QRSO-B-8-5.html',
    title: 'Misc',
    image: 'https://www.managemytaxbusiness.com/downloadable/images/play-mis.jpg'
  }
];

export function SoftOps() {
  return (
    <>
      <Helmet>
        <title>Software Training | QRTaxPro</title>
        <meta 
          name="description" 
          content="Access comprehensive software training through SoftOps. Learn to maximize your productivity with QRTaxPro's tax preparation software." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Software Training</h1>

            <div className="text-center mb-12">
              <img 
                src="https://www.managemytaxbusiness.com/images/logos/softops-logo.webp" 
                alt="SoftOps Logo"
                className="mx-auto w-1/5"
              />
            </div>

            <h2 className="text-2xl text-center mb-12">
              <strong>SoftOps</strong> has made learning simple, enjoyable and interesting. 
              Click the section you would like to view.
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {videoLinks.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  title={video.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={video.image}
                      alt={`${video.title} - Play the ${video.title} video by SoftOps`}
                      style={{ width: '200px', height: 'auto' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <p className="text-center font-bold mb-4">
              For Forms used in these SoftOps,{' '}
              <a 
                href="http://qrtax.com/softops/qrtaxpro/2010/2010forms.pdf"
                className="text-[#0085cc] hover:text-[#006ba3]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}