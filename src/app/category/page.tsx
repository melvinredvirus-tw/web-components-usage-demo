'use client';

import CategoryCard from '@/components/CategoryCard';
import { fetchCategories } from '@/services/fetchCategories';
import type { Category, ErrorType } from '@/types/category';
import { useEffect, useState } from 'react';

export default function CatalogPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Catalog</h1>
      {error && <p className="text-red-500 mb-4">Error fetching categories: {error.message}</p>}
      {!categories.length && !error && <p>Loading categories...</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}
