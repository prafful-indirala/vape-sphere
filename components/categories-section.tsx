import Image from 'next/image'
import Link from 'next/link'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Category } from '@/types/category'
import { motion } from "framer-motion"
import { supabase } from '@/lib/supabase-client'

async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('id');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
}

export default async function CategoriesSection() {
  try {
    const categories = await getCategories();

    if (categories.length === 0) {
      return <div className="text-center text-muted-foreground">No categories available</div>;
    }

    return (
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center gradient-text">Shop by Category</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg p-4">
          <div className="flex space-x-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/category/${category.slug}`}
                  className="flex flex-col items-center space-y-4 group"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden gradient-bg card-shadow group-hover:scale-105 transition-transform duration-200">
                    <Image
                      src={category.icon_path}
                      alt={category.name}
                      width={64}
                      height={64}
                      className="p-6 object-contain"
                    />
                  </div>
                  <span className="font-medium text-center">{category.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    )
  } catch (error) {
    console.error('Error in CategoriesSection:', error);
    return <div className="text-center text-muted-foreground">Unable to load categories. Please try again later.</div>;
  }
}

