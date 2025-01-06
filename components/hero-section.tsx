import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="text-center space-y-8">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Premium Vape Products for Retailers
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Elevate your inventory with our curated selection of top-quality vaping products.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/products">
          <Button size="lg" className="gradient-bg button-shadow text-primary-foreground">
            Explore Our Catalog
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

