export default function CategoryFind({ category }) {
  if (!category) return null;

  const gatherItems = (node) => {
    let items = node.items || [];
    for (const child of node.children || []) {
      items = items.concat(gatherItems(child));
    }
    return items;
  };

  const allItems = gatherItems(category);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">{category.name}</h2>
      <div className="grid gap-5 mt-6 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
        {allItems.map((item, idx) => {
          const price = (item.variations?.[0]?.price || 0) / 100;
          return (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg p-4 text-center bg-white shadow-sm hover:shadow-md transition"
            >
              {item.imageURLs?.[0] && (
                <img
                  src={item.imageURLs[0]}
                  alt={item.name}
                  className="w-full h-40 object-contain mb-3"
                />
              )}
              <div className="font-semibold text-sm">{item.name || 'No Name'}</div>
              <div className="text-gray-700">${price.toFixed(2)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
