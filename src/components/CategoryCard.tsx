import { Category } from '@/types/category';
import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  category: Category;
};

function CategoryCard(props: CategoryCardProps) {
  const { category } = props;

  return (
    <div
      key={category.id}
      className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
    >
      <Image src={category.image} alt={category.name} width={200} height={150} className="rounded object-cover" />
      <h2 className="text-lg font-semibold mt-4">
        <Link href={`/category/${category.id}/products`} key={category.id}>
          {category.name}
        </Link>
      </h2>
    </div>
  );
}
export default CategoryCard;
