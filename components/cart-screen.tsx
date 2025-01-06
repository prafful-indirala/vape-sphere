'use client'

import { useCartStore } from "@/store/cartStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export function CartScreen() {
  const { items, removeItem, updateQuantity, clearCart, getTotal, getItemsCount } = useCartStore()
  const router = useRouter()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.map((item) => (
        <div key={item.id} className="flex items-center border-b py-4">
          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md mr-4" />
          <div className="flex-grow">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            >
              -
            </Button>
            <Input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 mx-2 text-center"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button variant="destructive" className="ml-4" onClick={() => removeItem(item.id)}>
            Remove
          </Button>
        </div>
      ))}
      <div className="mt-8 flex justify-between items-center">
        <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
        <div className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</div>
      </div>
      <Button className="w-full mt-4" onClick={() => router.push('/shipping-address')}>Continue to Shipping</Button>
    </div>
  )
}

