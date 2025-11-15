import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OnlinePayroll() {
  return (
    <>
      <Helmet>
        <title>Online Payroll Solutions | QRTaxPro</title>
        <meta 
          name="description" 
          content="Streamline your payroll process with QRTaxPro's comprehensive online payroll solutions. Easy-to-use system with automatic tax calculations and filings." 
        />
      </Helmet>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Online Payroll Solutions</h1>
            <h2 className="text-2xl mb-6">You'll be delighted with Small business payroll results!</h2>
            
            <h3 className="text-xl font-bold mb-4" style={{ color: '#f75e00' }}>
              We Make Pay Days Simple and Easy
            </h3>

            <ul className="space-y-3 mb-12">
              {[
                'Federal, state and local tax calculations',
                'Paycheck printing or Direct deposit with detailed pay stubs',
                'Secure online employee portal to access pay stubs, W-2',
                'Electronic fund transfer for federal and state agencies',
                'Automatic e-filing of federal and state Forms',
                'Contractor payments',
                '1099 MISC filing'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-center mb-8">Login</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <a 
                  href="https://login.accountantsoffice.com/login?firmCode=QRTAX8660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-bold mb-4">Login MyAccount</h3>
                </a>
                <h4 className="font-semibold mb-2">Payroll Administrators:</h4>
                <p>Login here to access your account center, run payroll and view reports.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <a 
                  href="http://timeclock.mypayroll.com/Login.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-bold mb-4">MyTime<b>Login</b></h3>
                </a>
                <h4 className="font-semibold mb-2">Employees:</h4>
                <p>Log in to access your timeclock and track your hours.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <a 
                  href="https://www.payrollrelief.com/Employeecenter/account/login/?firmCode=QRTAX8660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-bold mb-4">Employee Login</h3>
                </a>
                <h4 className="font-semibold mb-2">Employees / Contractor:</h4>
                <p>Login here to access your pay stubs and W2s or 1099-MISC.</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Our Pricing is Simple and Cost-Effective</h3>
              <h3 className="text-xl font-bold mb-4">Get Started Now! For your free personalized quote.</h3>
              <Link to="/get-payroll">
                <img 
                  src="https://managemytaxbusiness.com/pub/media/wysiwyg/getstarted.png"
                  alt="Pay-days made easy! Get your small business payroll started with MyPayroll, the easy to use Online Payroll Solution"
                  title="Get Started with MyPayroll: the easy to use Online Payroll Solution!"
                  className="mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}