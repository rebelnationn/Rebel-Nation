import { HeroSection } from "@/components/sections/hero-section"
import { NewDropSection } from "@/components/sections/new-drop-section"
import { AboutPreviewSection } from "@/components/sections/about-preview-section"
import { CollectionPreviewSection } from "@/components/sections/collection-preview-section"
import { ContactPreviewSection } from "@/components/sections/contact-preview-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewDropSection />
      <AboutPreviewSection />
      <CollectionPreviewSection />
      <ContactPreviewSection />
    </>
  )
}
