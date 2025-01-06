import { ProductList } from '@/components/product-list'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.slug.replace('-', ' ')}</h1>
      <ProductList category={params.slug} />
    </div>
  )
}

