"use client"

import { motion } from "framer-motion"
import { MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactPreviewSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold tracking-wider uppercase"
        >
          Contáctanos
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground"
        >
          ¿Tienes preguntas o necesitas ayuda? Estamos aquí para ti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/50760159654"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="min-w-[200px] gap-2">
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </Button>
          </a>
          <a
            href="https://instagram.com/rebelnationnn_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="min-w-[180px] gap-2">
              <Instagram className="w-5 h-5" />
              @rebelnationnn_
            </Button>
          </a>
          <a
            href="https://tiktok.com/@rebelnationn_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="min-w-[180px] gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              @rebelnationn_
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
