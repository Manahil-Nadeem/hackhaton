// components/CategoryFilter.tsx
import React from 'react';

interface Category {
  _id: string;
  title: string;
  imageUrl: string;
}

interface CategoryFilterProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <h2>Filter by Category</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category._id}
            className="category-item"
            onClick={() => onSelectCategory(category._id)}
          >
            <img src={category.imageUrl} alt={category.title} />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
