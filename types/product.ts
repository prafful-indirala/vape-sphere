export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category_id: number;
  created_at: string;
  categories?: {
    name: string;
    slug: string;
  };
};

