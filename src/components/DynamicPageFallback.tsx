import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageContent } from '../hooks/usePageContent';
import { PageRenderer } from './PageRenderer';
import { NotFoundPage } from '../pages/NotFoundPage';

export function DynamicPageFallback() {
  const location = useLocation();
  const slug = useMemo(() => {
    const normalized = location.pathname.replace(/^\/+|\/+$/g, '');
    return normalized || null;
  }, [location.pathname]);

  const { page, status } = usePageContent(slug);

  if (status === 'loading') {
    return (
      <div className="py-24 flex justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (status === 'success' && page) {
    return <PageRenderer page={page} />;
  }

  return <NotFoundPage />;
}
