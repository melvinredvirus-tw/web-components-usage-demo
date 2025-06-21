'use client';

import CategoryCard from '@/components/CategoryCard';
import { Category } from '@/types/category';
import { useEffect, useState } from 'react';

export default function CatalogPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Catalog</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}
