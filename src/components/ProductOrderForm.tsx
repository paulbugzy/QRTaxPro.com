import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, AlertTriangle } from 'lucide-react';
import type { Product, OrderFormData } from '../types/products';
import { ProductOptions } from './ProductOptions';
import { CustomerForm } from './CustomerForm';

interface ProductOrderFormProps {
  product: Product;
}

export function ProductOrderForm({ product }: ProductOrderFormProps) {
  const [step, setStep] = useState<'options' | 'customer'>('options');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const navigate = useNavigate();

  const handleOptionsSubmit = (options: Record<string, string>) => {
    setSelectedOptions(options);
    setStep('customer');
  };

  const handleSubmit = async (customerData: OrderFormData['customer']) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const orderData: OrderFormData = {
        products: [{
          productId: product.id,
          quantity: 1,
          options: selectedOptions
        }],
        customer: customerData
      };

      // Send email to admin
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'support@qrtaxpro.com',
          subject: 'QRTaxPro: New Order Submitted by New User',
          html: `
            Dear QRTaxPro Administrator,

            A <b>New User</b> <em>(or a user that is <b>not Logged-in</b>)</em> has submitted a <b>New Order Form</b> from <a href="https://qrtaxpro.com/" title="Visit QRTaxPro.com">QRTaxPro.com</a>. Below is the information provided for <b>New User Registration</b> and the <b>Order Form</b> they submitted:

            <u><b>New User Registration:</b></u>

            Name: ${customerData.firstName} ${customerData.lastName}
            Phone: ${customerData.phone}
            Email: ${customerData.email}
            Address: ${customerData.address}
            City, State & Zip: ${customerData.city}, ${customerData.state} ${customerData.zip}

            <u><b>Order Details:</b></u>
            Product: ${product.name}
            SKU: ${product.sku}
            Price: $${product.price.toFixed(2)}
            
            Selected Options:
            ${Object.entries(selectedOptions)
              .map(([key, value]) => `${key}: ${value}`)
              .join('\n')}

            Best Regards,

            <b>QRTaxPro</b>
            <i>Web Administrator</i>

            <center>
              <a href="https://qrtaxpro.com/" title="Visit QRTaxPro.com for Powerful Cloud Software and Products for Tax Professionals">QRTaxPro.com</a> | © 2024 QRTaxPro. All Rights Reserved. | <a href="tel:+13129392222" title="Click to call QRTaxPro Support">(312) 939-2222</a><br>
              10700 W Higgins Ave - Suite 270 - Rosemont, IL 60018
            </center>
          `
        })
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Order submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 text-green-600 mb-4">
          <Check className="w-6 h-6" />
          <p className="text-lg font-semibold">Your Order Request has been submitted successfully!</p>
        </div>
        
        <div className="flex items-start gap-2 bg-yellow-50 p-4 rounded-lg text-yellow-800">
          <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">IMPORTANT NOTICE:</p>
            <p>
              In order to complete your order, you must first{' '}
              <a
                href="tel:+13129392222"
                className="font-semibold text-yellow-900 hover:text-yellow-700"
                title="Click to call the QRTaxPro Account Activation team to activate your account and complete your purchase (This step is required to complete your order)."
              >
                call our <b>Account Verification Team</b> at <b>(312) 939-2222</b>
              </a>
              {' '}to <b><em>validate</em></b> and <b><em>activate</em></b> your account.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {step === 'options' ? (
        <ProductOptions 
          product={product} 
          onSubmit={handleOptionsSubmit} 
        />
      ) : (
        <CustomerForm 
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          error={submitStatus === 'error'}
        />
      )}
    </div>
  );
}