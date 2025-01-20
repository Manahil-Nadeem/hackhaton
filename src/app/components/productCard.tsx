
import React from 'react';

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  badge: string | null;
  imageUrl: string;
  description: string;
  inventory: number;
  category: {
    title: string;
  };
  tags: string[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.category.title}</p>
      <p>Price: ${product.price}</p>
      {product.priceWithoutDiscount && (
        <p><s>${product.priceWithoutDiscount}</s></p>
      )}
      {product.badge && <span>{product.badge}</span>}
      <p>In Stock: {product.inventory}</p>
      <div>
        {product.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
