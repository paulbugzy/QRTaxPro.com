export interface MenuItem {
  title: string;
  path: string;
  submenu?: MenuItem[];
  external?: boolean;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
  };
  slogan: string;
}

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  schema?: object;
}