import { useEffect, useState } from 'react';
import type { MenuItem, MenuPlacement } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '';

interface UseMenuResult {
  items: MenuItem[];
  isLoading: boolean;
  error: string | null;
}

export function useMenu(placement: MenuPlacement, fallback: MenuItem[] = []): UseMenuResult {
  const [items, setItems] = useState<MenuItem[]>(fallback);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchMenu = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/api/public/menu?placement=${placement}`);
        if (!response.ok) {
          throw new Error('Failed to load menu');
        }
        const data = await response.json();
        if (!cancelled) {
          setItems(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load menu');
          // keep fallback items
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchMenu();

    return () => {
      cancelled = true;
    };
  }, [placement]);

  return { items, isLoading, error };
}
