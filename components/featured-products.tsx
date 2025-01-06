import { ProductCard } from './product-card'
import { supabase } from '@/lib/supabase-client'
import { Product } from '@/types/product'

async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(4)
    
    if (error) {
      console.error('Error fetching featured products:', error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Failed to fetch featured products:', error)
    return []
  }
}

export async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  if (products.length === 0) {
    return <div className="text-center text-muted-foreground">No featured products available</div>;
  }

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center gradient-text">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

