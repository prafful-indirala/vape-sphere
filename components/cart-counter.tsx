'use client'

import { useCartStore } from "@/store/cartStore"

export function CartCounter() {
  const getItemsCount = useCartStore((state) => state.getItemsCount)
  const itemCount = getItemsCount()

  if (itemCount === 0) return null

  return (
    <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
      {itemCount}
    </span>
  )
}

