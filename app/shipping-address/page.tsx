import { ShippingAddressForm } from '@/components/shipping-address-form'

export default function ShippingAddressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shipping Address</h1>
      <ShippingAddressForm />
    </div>
  )
}

