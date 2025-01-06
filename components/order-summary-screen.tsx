'use client'

import { useCartStore } from "@/store/cartStore"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export function OrderSummaryScreen() {
  const { items, getTotal, getItemsCount, shippingAddress } = useCartStore()
  const router = useRouter()

  if (!shippingAddress) {
    router.push('/shipping-address')
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Items ({getItemsCount()})</h2>
        {items.map((item) => (
          <div key={item.id} className="flex items-center mb-2">
            <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md mr-4" />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
        <p>{shippingAddress.fullName}</p>
        <p>{shippingAddress.address}</p>
        <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
        <p>{shippingAddress.country}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Order Details</h2>
        <div className="flex justify-between mb-2">
          <p>Subtotal:</p>
          <p>${getTotal().toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Shipping:</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Total:</p>
          <p>${getTotal().toFixed(2)}</p>
        </div>
      </div>
      <Button className="w-full mb-4">Place Order</Button>
      <Link href="/cart">
        <Button variant="outline" className="w-full">Back to Cart</Button>
      </Link>
    </div>
  )
}

