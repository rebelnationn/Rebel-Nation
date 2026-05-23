"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function CollectionPreviewSection() {
  return (
    <section id="collection" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] text-muted-foreground uppercase text-center mb-4"
        >
          The Origins
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold tracking-wider uppercase text-center mb-12"
        >
          Colección
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 lg:gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/coleccion">
            <Button size="lg" variant="outline">
              Ver Más
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
