"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface SectionProps {
  title: string
  description: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
  image: {
    src: string
    alt: string
  }
  imagePosition?: "left" | "right"
  backgroundColor?: string
}

export function SectionComponent({
  title,
  description,
  primaryButton,
  secondaryButton,
  image,
  imagePosition = "right",
  backgroundColor,
}: SectionProps) {
  const ContentSection = () => (
    <div className="space-y-4 md:space-y-6 w-full max-w-[509px]">
      <h2 className="text-3xl md:text-4xl font-serif text-center">{title}</h2>
      <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-base">
        {description}
      </p>
      <div className="flex flex-col items-center space-y-3 pt-4 w-full">
        <Button
          variant="outline"
          className="border border-[#737373] text-[#737373] text-sm md:text-base bg-transparent hover:bg-[#737373] px-6 py-2 rounded-none w-fit"
        >
          {primaryButton.text}
        </Button>
        {secondaryButton && (
          <Button
            variant="outline"
            className="border border-[#737373] text-[#737373] text-sm md:text-base bg-transparent hover:bg-[#737373] px-6 py-2 rounded-none w-fit"
>
            {secondaryButton.text}
          </Button>
        )}
      </div>
    </div>
  )

  const ImageSection = () => (
    <div className="relative w-fit h-fit">
    <Image
      src={image.src || "/placeholder.svg"}
      alt={image.alt}
      width={image.width ?? 800}
      height={0}
      className="object-contain"
      sizes="(max-width: 1512px) 100vw, (max-width: 1200px) 50vw, auto"
    />
  </div>
  
  )

  return (
    <section
      style={{ backgroundColor }}
      className="flex items-center justify-center mx-auto max-w-full w-full h-[990px] px-4 md:px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-[151px] md:gap-[151px] items-center w-full max-w-[1243px] mx-auto">
        {/* 
          If you need to support switching the positions of ContentSection and ImageSection 
          based on the `imagePosition` prop, add conditional rendering here. 
        */}
        <ContentSection />
        <ImageSection />
      </div>
    </section>
  )
}
