import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { SectionComponent } from "@/components/section-component"
import { ProductCarousel } from "@/components/product-carousel"
import { NavMenu } from "@/components/nav-menu"
import { fireplaceSection, lightingSection, furnitureSection,grandSection, subscribeSection } from "@/data/sections"
import { chimneyPiece, furniture, lighting,latestStories } from "@/data/carousels"

export default function Home() {
  return (
<div className="min-h-screen flex flex-col">  
  <SiteHeader />  
  <main className="flex-1">  
    <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-6 py-12 md:py-16">  
      <div className="relative w-full max-w-[98vw] aspect-[4/3] md:aspect-[16/10] overflow-hidden">  
        <Image  
          src="/images/heroImage.png"  
          alt="Decorative mantelpiece with classical objects and ornate mirror"  
          width={1436}
      height={0}
      className="object-contain"
      sizes="(max-width: 1512px) 100vw, (max-width: 1200px) 50vw, auto"
          priority  
        />  
      </div>  
      <NavMenu />
    </div> 

        <SectionComponent {...fireplaceSection} />
        <SectionComponent {...lightingSection} />
        <ProductCarousel {...chimneyPiece} />
        <ProductCarousel {...lighting} />
        <SectionComponent {...furnitureSection} />
        <ProductCarousel {...furniture} />
        <SectionComponent {...grandSection} />
        <ProductCarousel {...latestStories} />
        <SectionComponent {...subscribeSection} />
      </main>
      <SiteFooter />
    </div>
  )
}

