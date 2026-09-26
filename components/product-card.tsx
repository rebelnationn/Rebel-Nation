"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/producto/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNewDrop && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide">
              Nuevo
            </span>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground mt-1">
          {product.originalPrice && (
            <span className="line-through">${product.originalPrice}</span>
          )}
          <span className={product.originalPrice ? "text-foreground" : undefined}>
            ${product.price}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
