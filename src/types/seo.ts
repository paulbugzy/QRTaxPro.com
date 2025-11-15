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