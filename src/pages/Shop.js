// src/pages/Shop.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCatalog from '../hooks/useCatalog';
import { getAllCategories } from '../utils/catalog';
import CategoryFind from '../components/CategoryFind';

export default function Shop() {
  const { categoryId } = useParams();               // <-- read the :categoryId
  const { catalogRoot, loading, fetchCatalog } = useCatalog();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // When catalogRoot or categoryId changes, set selectedCategory:
  useEffect(() => {
    if (!loading && catalogRoot) {
      if (categoryId) {
        const found = getAllCategories(catalogRoot).find(
          (cat) => cat.id === categoryId
        );
        setSelectedCategory(found || null);
      } else {
        // no categoryId in URL → “Shop All”
        setSelectedCategory(null);
      }
    }
  }, [loading, catalogRoot, categoryId]);

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>

      <button
        onClick={() => {
          fetchCatalog(true);
          setSelectedCategory(null);
        }}
        disabled={loading}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Refreshing...' : 'Refresh Catalog'}
      </button>

      {!loading && catalogRoot && (
        <>
          {/* Category dropdown (still available for manual switching) */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">
              Choose a Category:
            </h3>
            <select
              value={selectedCategory?.id || ''}
              onChange={(e) => {
                const selId = e.target.value;
                const selCat = getAllCategories(catalogRoot).find(
                  (cat) => cat.id === selId
                );
                setSelectedCategory(selCat);
              }}
              className="px-3 py-2 border border-gray-300 rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select a category --</option>
              {getAllCategories(catalogRoot).map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Display items under the current selectedCategory (or root if none) */}
          <div className="mt-6">
            <CategoryFind category={selectedCategory || catalogRoot} />
          </div>
        </>
      )}
    </div>
  );
}
