import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useCatalog() {
  const [catalogRoot, setCatalogRoot] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCatalog = async (refresh = false) => {
    try {
      setLoading(true);
      const url = `http://localhost:3001/api/catalog${refresh ? '?refresh=true' : ''}`;
      const res = await axios.get(url);
      setCatalogRoot(res.data);
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
