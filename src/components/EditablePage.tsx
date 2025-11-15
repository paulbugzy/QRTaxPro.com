import React from 'react';
import { usePageContent } from '../hooks/usePageContent';
import { PageRenderer } from './PageRenderer';

interface EditablePageProps {
  slug: string;
  fallback: React.ReactElement;
}

export function EditablePage({ slug, fallback }: EditablePageProps) {
  const { page, status, error } = usePageContent(slug);

  if (status === 'success' && page) {
    return <PageRenderer page={page} />;
  }

  if (status === 'error') {
    console.warn(`Failed to load editable page for slug "${slug}":`, error);
  }

  return fallback;
}
