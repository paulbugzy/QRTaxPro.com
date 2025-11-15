import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  numEmployees: string;
  numContractors: string;
  payrollFrequency: string;
  comments: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  numEmployees: '',
  numContractors: '',
  payrollFrequency: '',
  comments: ''
};

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export function PayrollPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Send email to admin
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: companyInfo.email,
          subject: 'Payroll Form Submitted',
          html: `
            <h2>New Payroll Form Submission</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Company:</strong> ${formData.companyName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>City:</strong> ${formData.city}</p>
            <p><strong>State:</strong> ${formData.state}</p>
            <p><strong>ZIP:</strong> ${formData.zipCode}</p>
            <p><strong>Employees:</strong> ${formData.numEmployees}</p>
            <p><strong>Contractors:</strong> ${formData.numContractors}</p>
            <p><strong>Payroll Frequency:</strong> ${formData.payrollFrequency}</p>
            <p><strong>Comments:</strong> ${formData.comments}</p>
          `
        })
      });

      // Send confirmation email to user
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: formData.email,
          subject: 'Your Payroll Quote Request',
          html: `
            <h2>Thank you for your interest in QRTaxPro Payroll Solutions!</h2>
            <p>We have received your request for a personalized quote and are working on it.</p>
            <p>Our team will get back to you shortly with detailed pricing information.</p>
            <br>
            <p>Best regards,</p>
            <p>QRTaxPro Team</p>
          `
        })
      });

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Get a Free Payroll Quote | QRTaxPro</title>
        <meta 
          name="description" 
          content="Request a free personalized quote for QRTaxPro's comprehensive payroll solutions. Streamline your payroll process with our easy-to-use system." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Get Your Free Personalized Quote</h1>
              <p className="text-lg text-gray-600">
                Complete the form below and we'll provide you with a customized payroll solution 
                that fits your business needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Business Address</h2>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select State</option>
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payroll Information */}
              <div className="mt-8 space-y-6">
                <h2 className="text-xl font-bold mb-4">Payroll Information</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="numEmployees" className="block text-sm font-medium text-gray-700">
                      Number of Employees *
                    </label>
                    <input
                      type="number"
                      id="numEmployees"
                      name="numEmployees"
                      required
                      min="0"
                      value={formData.numEmployees}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="numContractors" className="block text-sm font-medium text-gray-700">
                      Number of Contractors
                    </label>
                    <input
                      type="number"
                      id="numContractors"
                      name="numContractors"
                      min="0"
                      value={formData.numContractors}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="payrollFrequency" className="block text-sm font-medium text-gray-700">
                      Payroll Frequency *
                    </label>
                    <select
                      id="payrollFrequency"
                      name="payrollFrequency"
                      required
                      value={formData.payrollFrequency}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select Frequency</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-Weekly">Bi-Weekly</option>
                      <option value="Semi-Monthly">Semi-Monthly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                    Additional Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    value={formData.comments}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-md flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <p>Thank you! We've received your request and will get back to you shortly.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-md flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <p>Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-[#f75e00] text-white rounded-full hover:bg-[#d95400] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}