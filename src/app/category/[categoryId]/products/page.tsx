'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Product } from '@/types/category';
import { ProductCard } from '@/components/ProductCard';

export default function CategoryProductsPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, [categoryId]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products in Category {categoryId}</h1>

      {products.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
