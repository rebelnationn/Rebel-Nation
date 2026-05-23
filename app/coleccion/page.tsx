"use client"

import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function ColeccionPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen">
      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            The Origins
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold tracking-wider uppercase"
          >
            Colección
          </motion.h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
