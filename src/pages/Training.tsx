import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award } from 'lucide-react';

export function Training() {
  return (
    <>
      <Helmet>
        <title>Training Solutions | QRTaxPro</title>
        <meta 
          name="description" 
          content="Access comprehensive tax training resources, including software training, MyTaxAcademy, and continuing education courses." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Training</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SoftOps */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <img 
                  src="/images/softops-logo.webp" 
                  alt="SoftOps Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">SoftOps</h2>
              <p className="text-gray-600 mb-6 pl-4">
                Software Training is brought to you by SoftOps. SoftOps are geared to get the most 
                out of our tax program, whether to increase productivity, training employees, or 
                marketing your business regardless of your preferred learning style.
              </p>
              <a 
                href="/training/software"
                className="text-[#0085cc] hover:text-[#006ba3] font-semibold inline-flex items-center gap-2"
              >
                Learn more...
              </a>
            </div>

            {/* Training Academy */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <img 
                  src="/images/mytaxacademy-logo.webp" 
                  alt="MyTaxAcademy Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Training Academy</h2>
              <p className="text-gray-600 mb-6 pl-4">
                MyTaxAcademy delivers an online/classroom environment training program. The program 
                will train any tax professional for the new tax season with ease. Prepare new recruits, 
                as well as train existing employees of the changing tax law. The program may also be 
                used as a pre-employment evaluation.
              </p>
              <a 
                href="/training/mytaxacademy"
                className="text-[#0085cc] hover:text-[#006ba3] font-semibold inline-flex items-center gap-2"
              >
                Learn more...
              </a>
            </div>

            {/* Continuing Education */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Award className="w-12 h-12 text-[#f75e00] mb-4" />
              <h2 className="text-2xl font-bold mb-4">Continuing Education</h2>
              <p className="text-gray-600 mb-6 pl-4">
                We have partnered with APlusCPE®, a service of WebCE®, to deliver quality online 
                continuing education services to Registered Tax Return Preparers, Enrolled Agents, 
                California Tax Return Preparers, Certified Financial Planners, and Insurance Agents.
              </p>
              <a 
                href="/training/ce-center"
                className="text-[#0085cc] hover:text-[#006ba3] font-semibold inline-flex items-center gap-2"
              >
                Learn more...
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}