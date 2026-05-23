import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <Link 
              href="/" 
              className="font-bold text-xl tracking-[0.2em] uppercase"
            >
              Rebel Nation
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              La nueva generación del streetwear. Ropa urbana premium para aquellos que desafían lo convencional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Inicio
              </Link>
              <Link href="/coleccion" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Colección
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Acerca de
              </Link>
              <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/50760159654"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/rebelnationnn_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@rebelnationn_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rebel Nation. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
