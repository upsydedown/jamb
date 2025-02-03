"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export interface SectionProps {
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
    width: number
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
  // imagePosition = "right", <-- REMOVED, no longer used
  backgroundColor,
}: SectionProps) {
  const ContentSection = () => (
    <div className="space-y-4 md:space-y-6 w-full max-w-[509px]">
      <h2 className="text-3xl md:text-4xl text-center">{title}</h2>
      <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-base">
        {description}
      </p>
      <div className="flex flex-col items-center space-y-3 pt-4 w-full">
        <Button
          variant="outline"
          className="border border-[#737373] text-[#737373] text-sm md:text-base bg-transparent hover:bg-[#737373] hover:text-[#F3F0ED] px-6 py-2 rounded-none w-fit">
          {primaryButton.text}
        </Button>
        {secondaryButton && (
          <Button
            variant="outline"
            className="border border-[#737373] text-[#737373] text-sm md:text-base bg-transparent hover:bg-[#737373] hover:text-[#F3F0ED] px-6 py-2 rounded-none w-fit"
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
        // Next.js “no-dimension trick” plus unoptimized, ensuring intrinsic size
        width={0}
        height={0}
        unoptimized
        // Remove object-scale-down & max-w-full so it retains its original dimensions
        className="w-auto h-auto"
        sizes="(max-width: 1512px) 100vw, (max-width: 1200px) 50vw, auto"
      />
    </div>
  )

  return (
    <section
      style={{ backgroundColor }}
      data-bgcolor={backgroundColor}
      className="flex items-center justify-center mx-auto max-w-full w-full h-[990px] px-4 md:px-6 py-12 md:py-16"
    >
      <div className="grid lg:grid-cols-2 gap-[151px] md:gap-[151px] items-center w-full max-w-[1243px] mx-auto">
        {/* 1) Always content on the left, image on the right */}
        <ContentSection />
        <ImageSection />
      </div>
    </section>
  )
}
