export type Category = {
  id: number;
  slug: string;
  name: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  images: string[];
};

export type ErrorType = {
  message: string;
  error: string;
  statusCode: number;
};
