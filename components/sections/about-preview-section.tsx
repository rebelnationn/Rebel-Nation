"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutPreviewSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/locker-room.jpg"
          alt="Rebel Nation Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold tracking-wider uppercase"
        >
          Acerca de Nosotros
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed"
        >
          Rebel Nation es más que una marca de ropa. Somos un movimiento que representa 
          a la nueva generación. Creamos piezas únicas que fusionan el streetwear contemporáneo 
          con la calidad premium, diseñadas para aquellos que no temen expresar su identidad 
          y desafiar lo convencional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link href="/about">
            <Button size="lg" variant="outline">
              Ver Más
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
