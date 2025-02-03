import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { SectionComponent } from "@/components/section-component"
import { ProductGrid } from "@/components/product-carousel"
import { NavMenu } from "@/components/nav-menu"
import { fireplaceSection, lightingSection, furnitureSection, grandSection, subscribeSection } from "@/data/sections"
import { chimneyPiece, furniture, lighting, latestStories } from "@/data/carousels"

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-6 py-12 md:py-16 mt-[45px]">
      <div className="relative w-auto h-auto max-w-full">
        <Image
          src="/images/heroImage.png"
          alt="Decorative mantelpiece with classical objects and ornate mirror"
          width={1436}
          height={768}
          className="object-contain"
          sizes="(max-width: 1512px) 100vw, (max-width: 1200px) 50vw, auto"
          priority
        />
      </div>
      <NavMenu />
    </div>
  )
}


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SectionComponent {...fireplaceSection} />
        <SectionComponent {...lightingSection} />
        <ProductGrid {...chimneyPiece} />
        <ProductGrid {...lighting} />
        <SectionComponent {...furnitureSection} />
        <ProductGrid {...furniture} />
        <SectionComponent {...grandSection} />
        <ProductGrid {...latestStories} />
        <SectionComponent {...subscribeSection} />
      </main>
      <SiteFooter />
    </div>
  )
}
