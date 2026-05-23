"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useCart, generateWhatsAppMessage } from "@/lib/cart"
import { Button } from "@/components/ui/button"

export function SlideCart() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeItem, 
    totalPrice 
  } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold tracking-wide uppercase">
                Tu Carrito ({items.length})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 hover:bg-accent/50 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-muted-foreground mb-4">Tu carrito está vacío</p>
                  <Button 
                    onClick={() => setIsCartOpen(false)}
                    variant="outline"
                  >
                    Continuar Comprando
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4"
                    >
                      <div className="relative w-24 h-32 bg-card rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-medium">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">Talla: {item.size}</p>
                        <p className="text-sm font-medium mt-1">${item.product.price}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                              className="p-1 hover:bg-accent rounded transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                              className="p-1 hover:bg-accent rounded transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-xl font-semibold">${totalPrice}</span>
                </div>
                <a
                  href={generateWhatsAppMessage(items)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full" size="lg">
                    Finalizar Pedido por WhatsApp
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Serás redirigido a WhatsApp para completar tu pedido
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
