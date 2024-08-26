import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from './services/productServices';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);

      // Extract categories
      const uniqueCategories = [...new Set(data.products.map(p => p.category))];
      setCategories(uniqueCategories);
    };

    loadProducts();
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '200px', position: 'fixed', top: 0, left: 0, bottom: 0, borderRight: '1px solid #ddd', backgroundColor: '#f9f9f9', overflowY: 'auto' }}>
        <Sidebar categories={categories} onCategorySelect={setSelectedCategory} />
      </div>
      <div style={{ marginLeft: '200px', flex: 1, padding: '10px' }}>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
