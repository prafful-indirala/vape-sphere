import CategoriesSection from '@/components/categories-section'
import { FeaturedProducts } from '@/components/featured-products'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
    </div>
  )
}

