'use client';

import { type Product } from '@/types/category';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data.slice(0, 8))) // take first 8 as featured
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
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
