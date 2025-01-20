

import Image from 'next/image';
// 
import { Button } from './ui/Button';

interface BadgeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeWrapperProps) {
  return (
    <span className={`px-2 py-1 text-xs font-medium text-white rounded ${className}`}>
      {children}
    </span>
  );
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const products: Product[] = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: '/chair2.png', isNew: true },
  { id: 2, name: 'Library Stool Chair', price: 20, originalPrice: 60, image: '/Image.png', isSale: true },
  { id: 3, name: 'Library Stool Chair', price: 20, image: '/new.png' },
  { id: 4, name: 'Library Stool Chair', price: 20, image: '/new2.png' },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-4 md:px-6 overflow-hidden relative">
      <h2 className="text-2xl font-semibold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-square">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
              {product.isNew && (
                <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">New</Badge>
              )}
              {product.isSale && (
                <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">Sales</Badge>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  
  