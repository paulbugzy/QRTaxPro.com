import { useEffect, useState } from 'react';
import type { CMSPage } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '';

type PageStatus = 'idle' | 'loading' | 'success' | 'notfound' | 'error';

export function usePageContent(slug: string | null) {
  const [page, setPage] = useState<CMSPage | null>(null);
  const [status, setStatus] = useState<PageStatus>(slug ? 'loading' : 'idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setPage(null);
      setStatus('notfound');
      return;
    }

    let isMounted = true;
    setStatus('loading');
    setError(null);

    const controller = new AbortController();

    fetch(`${API_BASE}/api/public/pages/${encodeURIComponent(slug)}`, {
      signal: controller.signal
    })
      .then(async (response) => {
        if (response.status === 404) {
          throw Object.assign(new Error('Page not found'), { code: 404 });
        }

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || 'Failed to load page');
        }

        return response.json();
      })
      .then((data: CMSPage) => {
        if (!isMounted) return;
        setPage(data);
        setStatus('success');
      })
      .catch((err) => {
        if (!isMounted) return;
        if ((err as any).name === 'AbortError') {
          return;
        }
        if ((err as any).code === 404) {
          setStatus('notfound');
          setPage(null);
          return;
        }
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Failed to load page');
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [slug]);

  return { page, status, error };
}
