// pages/products.tsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/sanity/sanity.client';
import ProductCard from '@/app/components/productCard';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts( );
      setProducts(productData);
    };

    getProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
