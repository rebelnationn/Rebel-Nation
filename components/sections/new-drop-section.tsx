"use client"

import { useRef, useCallback } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { getNewDropProducts } from "@/lib/products"

export function NewDropSection() {
  const products = getNewDropProducts()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-wider uppercase">
            New Drop
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 bg-card hover:bg-accent rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 bg-card hover:bg-accent rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="flex-none w-[280px] md:w-[320px]"
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
