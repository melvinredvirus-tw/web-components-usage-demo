'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { type Product } from '@/types/category';

export default function ProductDetailsPage() {
  const { productId: id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => setProduct(data))
      .catch((err) => console.error('Error fetching product details:', err));
  }, [id]);

  if (!product) {
    return <p className="p-6">Loading product details...</p>;
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <Image src={product.images[0]} alt={product.title} width={500} height={350} className="rounded object-cover" />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-green-600 text-xl font-medium mb-2">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="flex items-center gap-3 mt-4">
            <Image
              src={product.category.image}
              alt={product.category.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-sm text-gray-600">Category: {product.category.name}</p>
          </div>

          <Link href={`/category/${product.category.id}`} className="text-blue-500 text-sm mt-4 inline-block">
            Back to Category Products →
          </Link>
        </div>
      </div>
    </main>
  );
}
