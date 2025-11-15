import React from 'react';
import { Helmet } from 'react-helmet-async';

export function MyTaxAcademy() {
  return (
    <>
      <Helmet>
        <title>MyTaxAcademy Training Program | QRTaxPro</title>
        <meta 
          name="description" 
          content="MyTaxAcademy delivers comprehensive online/classroom environment training programs for tax professionals. Train and evaluate candidates for the tax season." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <a 
                href="https://mytaxacademy.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Visit MyTaxAcademy.com"
              >
                <img 
                  src="/images/mytaxacademy-logo.webp"
                  alt="MyTaxAcademy.com Logo" 
                  className="mx-auto h-24 w-auto"
                />
              </a>
            </div>

            <h1 className="text-4xl font-bold mb-6">MyTaxAcademy Training Program</h1>
            <h2 className="text-2xl mb-6">MyTaxAcademy delivers an online/classroom environment training program.</h2>

            <p className="text-lg mb-6">
              The program will allow you to train, evaluate and prepare candidates for the tax season. 
              Your license includes:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Audio/Visual Lessons (MP4 Format)',
                'Course Book (PDF Format)',
                'Practice Quizzes and Exams (Scoring and Feedback)',
                'Student/Instructor Portals',
                'Chat/Forum Features',
                'Links to Publications',
                'Announcements',
                'Certificate of Completion',
                'Complete Test History for Instructor',
                'Set Your Desired Course Fee'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg mb-8">
              MyTaxAcademy provides you the assurance your employees meet your firm standards as Tax Professionals.
            </p>

            <div className="text-center">
              <a
                href="http://mytaxacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f75e00] text-white px-8 py-3 rounded-full hover:bg-[#d95400] transition-colors"
              >
                Visit MyTaxAcademy
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}