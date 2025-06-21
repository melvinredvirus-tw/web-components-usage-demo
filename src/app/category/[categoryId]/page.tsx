'use client';

import { fetchCategory } from '@/services/fetchCategories';
import type { Category, ErrorType } from '@/types/category';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function CategoryPage() {
  const { categoryId: id } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    if (!id) return;

    fetchCategory(id as string)
      .then((data: Category) => setCategory(data))
      .catch((err) => setError(err));
  }, [id]);

  if (!category) {
    return <p className="p-6">Loading category details...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">Error loading category: {error.message}</p>;
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <Image
          src={category.image}
          alt={category.name}
          width={600}
          height={400}
          className="rounded-lg object-cover mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-gray-600 text-lg">Slug: {category.slug}</p>

        <Link href={`/category/${category.id}/products`} className="mt-6 text-blue-600 hover:underline text-sm">
          View Products in {category.name} →
        </Link>
      </div>
    </main>
  );
}
export default CategoryPage;
