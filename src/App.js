// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/catalog')  // Fetch data from backend
//       .then(res => {
//         setProducts(res);  // Set data to state
//       })
//       .catch(err => {
//         console.error('Failed to fetch products:', err);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Square Products</h1>
//       <ul>
//         {products.map((product, index) => {
//           const name = product?.itemData?.name || 'No name';
//           const description = product?.itemData?.description || '';
//           const imageId = product?.itemData?.imageIds?.[0];
//           const priceCents = product?.itemData?.variations?.[0]?.itemVariationData?.priceMoney?.amount;
//           const price = priceCents != null ? `$${(priceCents / 100).toFixed(2)}` : 'N/A';

//           return (
//             <li key={index}>
//               <h3>{name}</h3>
//               <p>{description}</p>
//               <p>Price: {price}</p>
//               {imageId && <p>Image ID: {imageId}</p>} {/* Replace with actual image later */}
//             </li>
//           );
//         })}
//     </ul>
//     </div>
//   );
// }

// export default App;


// OOOOOOOOOOOOOOOLLLLLLLLLLLLLDDDDDDDDDDDDDD

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [catalogRoot, setCatalogRoot] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchCatalog = async (refresh = false) => {
//     try {
//       setLoading(true);
//       const url = `http://localhost:3001/api/catalog${refresh ? '?refresh=true' : ''}`;
//       const res = await axios.get(url);
//       setCatalogRoot(res.data);
//     } catch (err) {
//       console.error('Failed to fetch catalog:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCatalog();
//   }, []);


//   const renderCategory = (category) => {
//   return (
//     <li key={category.id}>
//       <h2>{category.name}</h2>
//       <ul>
//         {category.items && category.items.map((item, index) => {
//           const name = item.name || "No Name";
//           const description = item.description || "No Description";
//           const id = item.id;
//           const imageURLs = item.imageURLs || [];
//           const variations = item.variations || [];

//           return (
//             <li key={index} style={{ marginBottom: '20px' }}>
//               <h3>{name}</h3>
//               <p>{description}</p>

//               {/* Render all image URLs */}
//               {imageURLs.length > 0 ? (
//                 <img src= {imageURLs[0]} alt={name} style={{ width: '200px', height: 'auto', marginRight: '10px' }} />
//               ) : (
//                 <img
//                   src="/images/no_image.jpg"
//                   alt={name}
//                   style={{ width: '200px', height: 'auto' }}
//                 />
//               )}

//               <p><strong>ID:</strong> {id}</p>

//               {/* Render variations */}
//               {variations.length === 1 ? (
//                 <p><strong>Price:</strong> ${ (variations[0].price / 100).toFixed(2) }</p>
//               ) : (
//                 <div>
//                   <strong>Variations:</strong>
//                   <ul>
//                     {variations.map((v, i) => (
//                       <li key={i} style={{ marginLeft: '20px' }}>
//                         <p><strong>Name:</strong> {v.name || "No Name"}</p>
//                         <img src={imageURLs[i]} alt={name} style={{ width: '200px', height: 'auto', marginRight: '10px' }}/>
//                         <p><strong>Weight:</strong> {v.weight || "N/A"}</p>
//                         <p><strong>Price:</strong> ${ (v.price / 100).toFixed(2) }</p>
//                         <p><strong>ID:</strong> {v.id}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           );
//         })}
//       </ul>

//       {/* Recurse through children */}
//       {category.children && category.children.length > 0 && (
//         <ul>
//           {category.children.map(child => renderCategory(child))}
//         </ul>
//       )}
//     </li>
//   );
// };


//   return (
//     <div className="App">
//       <h1>Square Products Catalog</h1>
//       <button onClick={() => fetchCatalog(true)} disabled={loading}>
//         {loading ? 'Refreshing...' : 'Refresh Catalog'}
//       </button>
//       {catalogRoot ? (
//         <ul>
//           {renderCategory(catalogRoot)}
//         </ul>
//       ) : (
//         <p>Loading catalog...</p>
//       )}
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/shop" element={<Shop />} />
        <Route path = "/checkout" element={<Checkout />} />
        <Route path = "/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;