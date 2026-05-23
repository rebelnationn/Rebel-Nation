"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/locker-room.jpg"
            alt="Rebel Nation Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold tracking-wider uppercase"
          >
            Acerca de Nosotros
          </motion.h1>
        </div>
      </section>

      {/* Nuestra Historia Section - Image LEFT, Text RIGHT */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-card rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about/rn-logo.jpg"
                alt="Rebel Nation Logo"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-wider uppercase mb-6">
                Nuestra Historia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rebel Nation nació de una visión simple pero poderosa. La idea surge en 2024, 
                inspirada por la cultura urbana y el deseo de traer un estilo diferente a Panamá, 
                fusionando el streetwear con calidad premium y diseños con identidad propia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Después de años de desarrollo y planificación, en 2026 la visión se convierte 
                en realidad y nace oficialmente Rebel Nation. Desde entonces, cada pieza representa 
                autenticidad, detalle y una nueva forma de vivir el streetwear.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold tracking-wider uppercase text-center mb-16"
          >
            Nuestros Valores
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Autenticidad",
                description: "Creemos en ser genuinos. Cada diseño refleja nuestra visión sin compromisos ni imitaciones."
              },
              {
                title: "Calidad",
                description: "Utilizamos los mejores materiales y procesos de fabricación para crear piezas que duran."
              },
              {
                title: "Comunidad",
                description: "Somos más que una marca. Somos una comunidad de personas que comparten una visión."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="inline-block w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión Section - Text LEFT, Image RIGHT */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-wider uppercase mb-6">
                Misión
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Crear prendas que combinen calidad, diseño y autenticidad, construyendo una 
                comunidad para quienes buscan expresar su identidad a través del streetwear.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Rebel Nation busca ofrecer piezas con intención, donde cada detalle represente 
                estilo, exclusividad y pertenencia a algo diferente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-card rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about/crowd.jpg"
                alt="Rebel Nation Community"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-light italic leading-relaxed"
          >
            {'"'}No nacimos para encajar. Nacimos para destacar.{'"'}
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground"
          >
            — Fundadores de Rebel Nation
          </motion.p>
        </div>
      </section>
    </div>
  )
}
