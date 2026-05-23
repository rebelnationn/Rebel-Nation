"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Minus, Plus, ShoppingBag, MessageCircle } from "lucide-react"
import { getProductById, products } from "@/lib/products"
import { useCart, generateSingleProductWhatsAppMessage } from "@/lib/cart"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = getProductById(id)
  const { addItem } = useCart()
  
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem(product, selectedSize, quantity)
  }

  const handleWhatsAppBuy = () => {
    if (!selectedSize) return
    window.open(
      generateSingleProductWhatsAppMessage(product, selectedSize, quantity),
      "_blank"
    )
  }

  // Related products (excluding current)
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="py-6"
        >
          <Link 
            href="/coleccion"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver a Colección
          </Link>
        </motion.div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden">
              <Image
                src={product.images?.[activeImage] || product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-24 rounded-lg overflow-hidden ${
                      activeImage === index 
                        ? "ring-2 ring-primary" 
                        : "opacity-60 hover:opacity-100"
                    } transition-all`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:py-4"
          >
            {product.isNewDrop && (
              <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide mb-4">
                Nuevo
              </span>
            )}
            
            <h1 className="text-3xl lg:text-4xl font-bold">{product.name}</h1>
            <p className="mt-2 text-2xl">${product.price}</p>

            {product.description && (
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Size Selector */}
            {(product.sizeStock || product.sizes) && (
              <div className="mt-8">
                <h3 className="font-medium mb-3">Talla</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizeStock ? (
                    product.sizeStock.map(({ size, stock }) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size)
                          setQuantity(1)
                        }}
                        disabled={stock === 0}
                        className={`min-w-[48px] h-12 px-4 border rounded-lg font-medium transition-all ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : stock === 0
                            ? "border-border opacity-40 cursor-not-allowed line-through"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))
                  ) : (
                    product.sizes?.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[48px] h-12 px-4 border rounded-lg font-medium transition-all ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))
                  )}
                </div>
                {product.sizeStock && selectedSize && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.sizeStock.find(s => s.size === selectedSize)?.stock} disponible(s)
                  </p>
                )}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-8">
              <h3 className="font-medium mb-3">Cantidad</h3>
              <div className="inline-flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => {
                    const maxStock = product.sizeStock?.find(s => s.size === selectedSize)?.stock
                    if (maxStock) {
                      setQuantity(Math.min(maxStock, quantity + 1))
                    } else {
                      setQuantity(quantity + 1)
                    }
                  }}
                  className="p-3 hover:bg-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3">
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="w-full gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Agregar al Carrito
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppBuy}
                disabled={!selectedSize}
                className="w-full gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar por WhatsApp
              </Button>
            </div>

            {!selectedSize && (
              <p className="mt-3 text-sm text-muted-foreground">
                * Selecciona una talla para continuar
              </p>
            )}

            {/* Product Details */}
            {product.details && (
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-medium mb-4">Detalles del Producto</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <h2 className="text-2xl font-bold tracking-wider uppercase mb-8">
              También te puede gustar
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
