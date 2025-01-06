import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export type ShippingAddress = {
  fullName: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

type CartStore = {
  items: CartItem[]
  shippingAddress: ShippingAddress | null
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemsCount: () => number
  setShippingAddress: (address: ShippingAddress) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      shippingAddress: null,
      addItem: (item) => set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id)
        if (existingItem) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          }
        }
        return { items: [...state.items, item] }
      }),
      removeItem: (id) => set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),
      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        ),
      })),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      getItemsCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
      setShippingAddress: (address) => set({ shippingAddress: address }),
    }),
    {
      name: 'cart-storage',
    }
  )
)

