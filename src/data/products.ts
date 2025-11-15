import type { Product } from '../types/products';

export const products: Product[] = [
  {
    id: 'tax-software-2024',
    name: '2024 QRTaxPro',
    sku: 'PRO-SFT-21',
    price: 599.00,
    shortDescription: '2024 QRTaxPro Comprehensive Tax Software',
    description: `<h2 style="color:#f75e00;">2024 QRTaxPro</h2>
    <h3>QRTaxPro is a powerful and easy to use comprehensive tax software which includes the following features:</h3>
    <ul>
      <li>Individual & Business Modules</li>
      <li>All 50 States</li>
      <li>E-Filing</li>
      <li>Document & Scanning Manager</li>
      <li>Electronic Signature</li>
      <li>Audit Trail</li>
      <li>E-File within the Tax Return 2022, 2023 & 2024</li>
      <li>Auto Email Tax Return with Password Protection</li>
      <li>Occupation Field with Autofill</li>
      <li>Simplified 1040X with Generated Explanation of Changes</li>
      <li>Bank Product Interface</li>
    </ul>`,
    image: 'https://qrtaxpro.com/images/services/tax-software/QRTaxProCDImage.webp',
    category: 'tax-software',
    customOptions: [
      {
        id: 'package',
        type: 'radio',
        label: 'Package Options',
        name: 'package',
        required: true,
        options: [
          {
            value: 'comprehensive',
            label: 'Comprehensive Pro (up to 100 Free E-Files)',
            price: 0,
            sku: 'PROSS11001a'
          },
          {
            value: 'proplus',
            label: 'ProPlus (up to 200 Free E-Files)',
            price: 200,
            sku: 'PROSS11001b'
          },
          {
            value: 'probiz',
            label: 'ProBiz (Unlimited Free E-Filing)',
            price: 600,
            sku: 'PROSS11001c'
          }
        ]
      }
    ]
  },
  {
    id: 'business-cards-k72',
    name: 'Professional Business Cards - Design K72',
    sku: 'PRO-TMP-11-BUS-001',
    price: 39.99,
    shortDescription: 'Use your business card as a link to a client, a potential client or for referring business. Select one of the back of the business cards that\'s most useful to you. We will personalize this card design with your business information.',
    description: `<ul>
      <li><b>Marketing:</b> Your business cards are one of the most productive pieces of marketing you will generate. Consider them the seeds of your business, and scatter them widely. Business cards will be retained, noticed and kept for many years to come.</li>
      <li><b>Personalize:</b> This Pre-Designed business card will be personalized with your logo or company name, your information and your choice of the back of the business card. The design will be printed on 2" x 3.5" 16pt matte finish business card.</li>
      <li><b>Turnaround:</b> 3-4 days.</li>
    </ul>`,
    image: 'https://qrtaxpro.com/images/services/business-cards/mtb-tmp-11-bus-00x/MTB-TMP-11-BUS-002.webp',
    category: 'business-cards',
    customOptions: [
      {
        id: 'back-design',
        type: 'radio',
        label: 'Select a Back for Your Business Card',
        name: 'back-design',
        required: true,
        options: [
          { value: 'blank', label: 'Blank', image: 'MTB-TMP-11-BUS-BLANK-300.webp' },
          { value: 'a', label: 'Choice A', image: 'MTB-TMP-11-BUS-A-300.webp' },
          { value: 'b', label: 'Choice B', image: 'MTB-TMP-11-BUS-B-300.webp' },
          { value: 'c', label: 'Choice C', image: 'MTB-TMP-11-BUS-C-300.webp' },
          { value: 'd', label: 'Choice D', image: 'MTB-TMP-11-BUS-D-300.webp' },
          { value: 'e', label: 'Choice E', image: 'MTB-TMP-11-BUS-E-300.webp' },
          { value: 'f', label: 'Choice F', image: 'MTB-TMP-11-BUS-F-300.webp' },
          { value: 'g', label: 'Choice G', image: 'MTB-TMP-11-BUS-G-300.webp' },
          { value: 'h', label: 'Choice H - Your Custom Message', image: 'MTB-TMP-11-BUS-H-300.webp' }
        ]
      }
    ]
  },
  {
    id: 'tax-return-folders',
    name: 'Tax Return Folders',
    sku: 'PRO-FLD-11-001',
    price: 250.00,
    shortDescription: 'Professional tax return folders for presenting completed returns to your clients.',
    description: `<p>Our Tax Return Folders are printed with the highest quality and vibrant colors. Give your client a professional presentation of their tax return. On the front cover you may:</p>
    <ol type="a" style="color:#ff8040;">
      <li>Write your name or staple your business card.</li>
      <li>Check the appropriate product your client applied for and indicate the expected refund amount and date or balance due amount(s) for federal/state.</li>
      <li>Advise your clients to call the CheckStatus line to confirm the acceptance of their e-filed tax returns or to inquire about their refund status.</li>
    </ol>
    <p>On the inside cover your client will find your Guiding Principles and the Privacy Policy.</p>`,
    image: 'https://qrtaxpro.com/images/services/folders/tax-return-folder.webp',
    category: 'folders',
    customOptions: [
      {
        id: 'quantity',
        type: 'radio',
        label: 'Quantity',
        name: 'quantity',
        required: true,
        options: [
          { value: '500', label: '500 Folders', price: 0 },
          { value: '1000', label: '1000 Folders', price: 200 },
          { value: '2500', label: '2500 Folders', price: 450 }
        ]
      }
    ]
  },
  {
    id: 'tax-return-envelopes',
    name: 'Tax Return Envelopes',
    sku: 'PRO-ENV-11-001',
    price: 259.00,
    shortDescription: 'Professional 9" X 12" tax return envelopes on 70lb Premium Uncoated Text.',
    description: `<p>Our <span style="font-weight:semibold;">Tax Return Envelopes</span> are printed with the highest quality and vibrant colors. All returns and supporting documents of up to 65 pages can easily fit in this large 9" x 12" envelope.</p>
    <p>Our multi-purpose envelopes can be used for:</p>
    <ol type="a" style="color:#ff8000;">
      <li>Handing your clients their completed returns, or</li>
      <li>Accepting your client's documents to be completed later, or</li>
      <li>Mailing your client's return.</li>
    </ol>
    <p>The front provides space for a memo area and mailing address. The back provides space for client's name, phone numbers and the tax year.</p>`,
    image: 'https://qrtaxpro.com/images/services/envelopes/tax-return-envelope.webp',
    category: 'envelopes',
    customOptions: [
      {
        id: 'quantity',
        type: 'radio',
        label: 'Quantity',
        name: 'quantity',
        required: true,
        options: [
          { value: '500', label: '500 Envelopes', price: 0 },
          { value: '1000', label: '1000 Envelopes', price: 200 },
          { value: '2500', label: '2500 Envelopes', price: 450 }
        ]
      }
    ]
  }
];