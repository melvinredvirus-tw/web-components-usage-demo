import { type Product } from '@/types/category';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  product: Product;
};

export function ProductCard(props: ProductCardProps) {
  const { product } = props;

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center">
      <Image src={product.images[0]} alt={product.title} width={200} height={150} className="rounded object-cover" />
      <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
      <p className="mt-2 text-green-600 font-medium">${product.price}</p>
      <Link href={`/product/${product.id}`} className="text-blue-500 mt-2 text-sm">
        View Details
      </Link>
    </div>
  );
}
