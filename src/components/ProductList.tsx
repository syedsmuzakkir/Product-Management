import React, { useState, useEffect } from 'react';
import { Product } from '../services/productServices';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <div style={{ padding: '10px', marginLeft: '20px' }}>
      <h2>Products</h2>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          style={{
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            flexGrow: 1
          }}
        />
        {/* // Search Buton  */}
        <button
          style={{
            marginLeft: '10px',
            padding: '8px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🔍
        </button>
      </div>
      {filteredProducts.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>ID</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Title</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Price</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Rating</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.id}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.title}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.description}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>${product.price}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.rating}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
