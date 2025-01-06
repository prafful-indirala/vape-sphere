import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types/product"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-square relative mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{product.description.substring(0, 100)}...</p>
          <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
        </Link>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  )
}

