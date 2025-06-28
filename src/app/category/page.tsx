'use client';

import CategoryCard from '@/components/CategoryCard';
import { fetchCategories } from '@/redux/categorySlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import {} from 'react-redux';

export default function CatalogPage() {
  const { categories, error } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Catagory</h1>
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
