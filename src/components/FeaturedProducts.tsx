'use client';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';

import { fetchFeaturedProducts } from '@/redux/featuredProducts';
import { MyCard } from './custom/MyCard';

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
        <MyCard key={product.id} name={product.title} description="" image={product.images[0]} price={product.price} />
      ))}
    </div>
  );
}
export default FeaturedProducts;
