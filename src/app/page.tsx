import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FireplacesSection } from "@/components/fireplaces-section"
import { LightingSection } from "@/components/lighting-section"
import { ProductCarousel } from "@/components/product-carousel"
import { FurnitureSection } from "@/components/furniture-section"
import { GrandCollection } from "@/components/grand-collection"

const chimneypieces = [
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
]

const lighting = [
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
]

const furniture = [
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
  { image: "/placeholder.svg?height=400&width=400", title: "Lorem Ipsum", subtitle: "Subtitle" },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-20">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden border border-blue-400">
            <Image
              src="/images/furniture.png"
              alt="Decorative mantelpiece with classical objects and ornate mirror"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
        <FireplacesSection />
        <ProductCarousel title="Our latest chimneypieces" products={chimneypieces} />
        <LightingSection />
        <ProductCarousel title="Our latest lighting" products={lighting} />
        <FurnitureSection />
        <ProductCarousel title="Our latest furniture" products={furniture} />
        <GrandCollection />
      </main>
      <SiteFooter />
    </div>
  )
}

