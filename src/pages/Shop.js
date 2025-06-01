import { useState } from 'react';
import useCatalog from '../hooks/useCatalog';
import { getAllCategories} from '../utils/catalog';
import CategoryFind from '../components/CategoryFind';

export default function Shop() {
  const { catalogRoot, loading, fetchCatalog } = useCatalog();
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <h1>Shop</h1>
      <button onClick={() => {
        fetchCatalog(true);
        setSelectedCategory(null); // reset selected category on refresh
      }} disabled={loading}>
        {loading ? 'Refreshing...' : 'Refresh Catalog'}
      </button>

      {!loading && catalogRoot && (
        <>
          <>
        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-3">Choose a Category:</h3>
          <select
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedCat = getAllCategories(catalogRoot).find(cat => cat.id === selectedId);
              setSelectedCategory(selectedCat);
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
      </>

          <div style={{ marginTop: '20px' }}>
            <CategoryFind category={selectedCategory || catalogRoot} />
          </div>
        </>
      )}
    </div>
  );
}
