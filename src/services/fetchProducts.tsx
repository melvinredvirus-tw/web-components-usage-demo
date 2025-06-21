import { type Product } from '@/types/category';

export async function fetchProduct(id: string | number): Promise<Product> {
  return await fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => res.json());
}

export async function fetchProducts(): Promise<Product[]> {
  return await fetch('https://api.escuelajs.co/api/v1/products').then((res) => res.json());
}
