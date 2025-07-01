'use client';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { fetchFeaturedProducts } from '@/redux/featuredProducts';

function FeaturedProducts() {
  const { featuredProduct: products, isLoading, error } = useAppSelector((state) => state.featuredProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, []);

  if (isLoading) {
    return <p className="p-6">Loading featured products here...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">Error loading product: {error.message}</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.slice(0, 15).map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            width={200}
            height={150}
            className="rounded object-cover"
          />
          <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
          <p className="text-green-600 font-medium mt-2">${product.price}</p>
          <Link href={`/product/${product.id}`} className="text-blue-500 text-sm mt-2">
            View Details →
          </Link>
        </div>
      ))}
    </div>
  );
}
export default FeaturedProducts;
