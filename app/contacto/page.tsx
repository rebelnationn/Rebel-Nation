"use client"

import { motion } from "framer-motion"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen">
      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold tracking-wider uppercase"
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
          >
            ¿Tienes preguntas sobre tu pedido o necesitas ayuda? 
            Estamos aquí para ti. Contáctanos directamente por WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* WhatsApp Main CTA - Most Prominent */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border relative overflow-hidden">
              {/* Accent gradient background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
                  Escríbenos por WhatsApp
                </h2>
                
                <p className="text-muted-foreground text-center mb-8 max-w-md mx-auto">
                  La forma más rápida y directa de contactarnos. Pedidos, preguntas, seguimiento de envíos - todo por WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Respuesta en menos de 24 horas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4" />
                    <span>Atención personalizada</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <a
                    href="https://wa.me/50760159654"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button size="lg" className="w-full sm:w-auto gap-3 text-lg px-8 py-6">
                      <MessageCircle className="w-6 h-6" />
                      Abrir WhatsApp
                    </Button>
                  </a>
                  <span className="text-sm text-muted-foreground">+507 6015-9654</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold tracking-wider uppercase text-center mb-12"
          >
            Síguenos
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/rebelnationnn_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-background rounded-xl p-6 flex items-center gap-4 hover:bg-accent/10 transition-colors"
            >
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Instagram</h3>
                <p className="text-muted-foreground">@rebelnationnn_</p>
              </div>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://tiktok.com/@rebelnationn_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-background rounded-xl p-6 flex items-center gap-4 hover:bg-accent/10 transition-colors"
            >
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">TikTok</h3>
                <p className="text-muted-foreground">@rebelnationn_</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold tracking-wider uppercase text-center mb-12"
          >
            Preguntas Frecuentes
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                question: "¿Cómo realizo un pedido?",
                answer: "Simplemente agrega los productos a tu carrito, selecciona la talla y cantidad, y haz clic en 'Finalizar Pedido por WhatsApp'. Te redirigiremos a WhatsApp con tu pedido listo para enviar."
              },
              {
                question: "¿Cuánto tarda el envío?",
                answer: "Los tiempos de envío varían según tu ubicación. Contáctanos por WhatsApp para obtener información específica sobre envíos a tu zona."
              },
              {
                question: "¿Puedo cambiar o devolver mi pedido?",
                answer: "Sí, aceptamos cambios y devoluciones dentro de los primeros 15 días después de recibir tu pedido. El producto debe estar en perfectas condiciones y con sus etiquetas originales."
              },
              {
                question: "¿Qué métodos de pago aceptan?",
                answer: "Aceptamos transferencia bancaria, depósito en efectivo y pagos en línea. Los detalles de pago te los compartiremos por WhatsApp al confirmar tu pedido."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6"
              >
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              ¿Tienes más preguntas? Escríbenos directamente.
            </p>
            <a
              href="https://wa.me/50760159654"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
