import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useCatalog() {
  const [catalogRoot, setCatalogRoot] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCatalog = async (refresh = false) => {
    setLoading(true);

    try {
      if (!refresh) {
        const stored = localStorage.getItem('catalogRoot');
        if (stored) {
          const parsed = JSON.parse(stored);
          setCatalogRoot(parsed);
          setLoading(false);
          return;
        }
      }

      const url = `http://localhost:3001/api/catalog${refresh ? '?refresh=true' : ''}`;
      const res = await axios.get(url);
      setCatalogRoot(res.data);
      localStorage.setItem('catalogRoot', JSON.stringify(res.data));
    } catch (err) {
      console.error('Failed to fetch catalog:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  return { catalogRoot, loading, fetchCatalog };
}
