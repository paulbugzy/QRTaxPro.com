export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  category: 'tax-software' | 'business-cards' | 'folders' | 'envelopes';
  customOptions?: CustomOption[];
}

export interface CustomOption {
  id: string;
  type: 'radio' | 'checkbox' | 'text' | 'textarea' | 'file' | 'phone';
  label: string;
  name: string;
  required: boolean;
  options?: {
    value: string;
    label: string;
    price?: number;
    image?: string;
    sku?: string;
  }[];
  validation?: {
    maxLength?: number;
    allowedExtensions?: string[];
    pattern?: string;
  };
  conditional?: {
    dependsOn: string;
    showWhen: string;
  };
}

export interface OrderFormData {
  products: {
    productId: string;
    quantity: number;
    options: Record<string, string>;
  }[];
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
}