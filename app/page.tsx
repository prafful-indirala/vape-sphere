import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import CategoriesSection from './components/categories-section'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Premium Vape Products for Retailers
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Elevate your inventory with our curated selection of top-quality vaping products.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-zinc-100">
              Explore Our Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Benefits of Ordering Wholesale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Competitive Pricing', description: 'Get the best prices for bulk orders.' },
              { title: 'Wide Selection', description: 'Access to a vast array of premium products.' },
              { title: 'Fast Shipping', description: 'Quick delivery to keep your inventory stocked.' },
              { title: 'Quality Assurance', description: 'All products meet strict quality standards.' },
              { title: 'Dedicated Support', description: '24/7 customer service for all your needs.' },
              { title: 'Flexible Orders', description: 'Customize your order to fit your business.' },
            ].map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-zinc-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Alex Johnson', role: 'Vape Shop Owner', quote: 'VapeSphere has been a game-changer for my business. Their products and service are unmatched.' },
              { name: 'Sarah Lee', role: 'E-commerce Retailer', quote: 'The quality and variety of products from VapeSphere keep my customers coming back for more.' },
              { name: 'Mike Thompson', role: 'Distributor', quote: 'I\'ve never had a smoother wholesale experience. VapeSphere truly understands the needs of retailers.' },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-zinc-600 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={`/placeholder.svg`}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

