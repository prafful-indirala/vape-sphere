'use client'

import { useCartStore } from "@/store/cartStore"
import { motion } from "framer-motion"

export function CartCounter() {
  const getItemsCount = useCartStore((state) => state.getItemsCount)
  const itemCount = getItemsCount()

  if (itemCount === 0) return null

  return (
    <motion.span 
      className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {itemCount}
    </motion.span>
  )
}

