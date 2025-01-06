'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore, ShippingAddress } from "@/store/cartStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function ShippingAddressForm() {
  const router = useRouter()
  const { toast } = useToast()
  const setShippingAddress = useCartStore((state) => state.setShippingAddress)
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.values(address).some(value => value === '')) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }
    setShippingAddress(address)
    router.push('/order-summary')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" value={address.fullName} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" name="address" value={address.address} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input id="city" name="city" value={address.city} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="state">State</Label>
        <Input id="state" name="state" value={address.state} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input id="zipCode" name="zipCode" value={address.zipCode} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="country">Country</Label>
        <Input id="country" name="country" value={address.country} onChange={handleChange} required />
      </div>
      <Button type="submit" className="w-full">Continue to Order Summary</Button>
    </form>
  )
}

