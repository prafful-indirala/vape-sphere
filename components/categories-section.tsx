import Image from 'next/image'
import Link from 'next/link'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Category } from '@/types/category'

async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/categories`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
}

export default async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Shop by Category
        </h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex w-max space-x-8 p-4">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/category/${category.slug}`}
                className="flex flex-col items-center space-y-4"
              >
                <div className="relative w-32 h-32 bg-[#CD2A2A] rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Image
                    src={category.icon_path}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 text-white"
                  />
                </div>
                <span className="text-center font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}

