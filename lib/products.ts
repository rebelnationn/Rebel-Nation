export interface SizeStock {
  size: string
  stock: number
}

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  description?: string
  details?: string[]
  sizes?: string[]
  sizeStock?: SizeStock[]
  category?: string
  collection?: string
  isNewDrop?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "HODDIE - ORIGINS ZIP",
    price: 40,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0775-KZOaGItHVKIcTJro16vsp18SrfOCiL.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0775-KZOaGItHVKIcTJro16vsp18SrfOCiL.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0778-yZAlvXmLKJ4jgcBVrMIeKcTMDNAiVw.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0773-Tdj1m9OcflkBYLHLFMUjuqdvoTEliP.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0774-2p15OetaIUUzBgw6nKi5dW70XvZYhT.jpg",
    ],
    description: "Una pieza creada para representar la esencia de Rebel Nation. La Origins Zip combina comodidad, minimalismo y detalles gráficos inspirados en la cultura urbana moderna.",
    details: [
      "Oversized fit",
      "400G heavyweight fabric",
      "100% cotton",
      "High-quality front zipper",
    ],
    sizeStock: [
      { size: "M", stock: 2 },
      { size: "L", stock: 2 }
    ],
    category: "hoodies",
    collection: "THE ORIGINS",
    isNewDrop: true,
  },
  {
    id: "2",
    name: "TSHIRT - MOVEMENT TEE",
    price: 20,
    originalPrice: 30,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0749-5HxwnSJ57ZzUXYiPZaHcKe7er1Tyd5.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0749-5HxwnSJ57ZzUXYiPZaHcKe7er1Tyd5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0747-81qLAYaldQByYo8TBvVyZ1xjbHdzrx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0748-9hbGV9uTc1eA7DYVGshY8rYLAThGFV.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0750-Stce3COarbSiWirjRgpTUwZNKerUuU.jpg",
    ],
    description: "La pieza donde comienza todo. La Movement Tee representa el origen de Rebel Nation: minimalismo oscuro, identidad urbana y una visión creada para quienes no siguen tendencias, las crean.",
    details: [
      "Oversized fit",
      "240G fabric",
      "Polyester / cotton blend",
      "Sensación fresca y ligera",
      "Textura suave y cómoda",
    ],
    sizeStock: [
      { size: "S", stock: 1 },
      { size: "M", stock: 5 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 2 },
    ],
    category: "camisetas",
    collection: "THE ORIGINS",
    isNewDrop: true,
  },
]

export const getNewDropProducts = () => products.filter(p => p.isNewDrop)
export const getFeaturedProducts = () => products.slice(0, 4)
export const getProductById = (id: string) => products.find(p => p.id === id)
