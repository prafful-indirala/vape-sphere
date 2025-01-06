'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Product } from "@/types/product"
import { motion } from "framer-motion"
import { ImageCarousel } from './image-carousel'

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  // Assuming product.images is an array of image URLs
  const images = product.images || [product.image]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:shadow-primary/20">
        <CardContent className="p-0 relative">
          <Link href={`/product/${product.id}`}>
            <div className="aspect-square relative">
              <ImageCarousel images={images} alt={product.name} />
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300"
              animate={{ opacity: isHovered ? 0.7 : 0 }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm mb-2">{product.description.substring(0, 100)}...</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          </Link>
        </CardContent>
        <CardFooter className="p-4">
          <Button className="w-full gradient-bg button-shadow text-primary-foreground">View Details</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

