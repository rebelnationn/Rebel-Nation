"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Product } from "./products"

export interface CartItem {
  product: Product
  quantity: number
  size: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string, quantity?: number) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = useCallback((product: Product, size: string, quantity = 1) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.size === size
      )
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += quantity
        return updated
      }
      return [...prev, { product, quantity, size }]
    })
    setIsCartOpen(true)
  }, [])

  const removeItem = useCallback((productId: string, size: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.size === size)
    ))
  }, [])

  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId, size)
      return
    }
    setItems(prev => prev.map(item =>
      item.product.id === productId && item.size === size
        ? { ...item, quantity }
        : item
    ))
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export function generateWhatsAppMessage(items: CartItem[]): string {
  const phoneNumber = "50760159654"
  let message = "Hola! Me gustaría hacer el siguiente pedido:\n\n"
  
  items.forEach(item => {
    message += `• ${item.product.name}\n`
    message += `  Talla: ${item.size}\n`
    message += `  Cantidad: ${item.quantity}\n`
    message += `  Precio: $${item.product.price * item.quantity}\n\n`
  })
  
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  message += `Total: $${total}\n\nGracias!`
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

export function generateSingleProductWhatsAppMessage(
  product: Product, 
  size: string, 
  quantity: number
): string {
  const phoneNumber = "50760159654"
  let message = `Hola, quiero comprar la ${product.name}.\n`
  message += `Talla: ${size}\n`
  message += `Cantidad: ${quantity}\n`
  message += `Precio: $${product.price * quantity}`
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
