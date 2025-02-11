"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const [bgColor, setBgColor] = useState("#F3F0ED") // default or fallback color

  useEffect(() => {
    // 1) Grab all sections that have a data-bgcolor
    const sections = document.querySelectorAll("section[data-bgcolor]")

    // 2) Intersection Observer callback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting, update the header color
          if (entry.isIntersecting) {
            const color = (entry.target as HTMLElement).dataset.bgcolor
            if (color) setBgColor(color)
          }
        })
      },
      {
        threshold: 0.3, // or your preferred in-view threshold
      }
    )

    // 3) Observe each section
    sections.forEach((sec) => observer.observe(sec))

    // 4) A simple scroll listener that resets the header to its base color
    //    if we’re scrolled all the way up (scrollY === 0).
    const handleScrollTop = () => {
      if (window.scrollY === 0) {
        setBgColor("#F3F0ED")
      }
    }
    window.addEventListener("scroll", handleScrollTop)

    // 5) Cleanup
    return () => {
      sections.forEach((sec) => observer.unobserve(sec))
      window.removeEventListener("scroll", handleScrollTop)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      style={{ backgroundColor: bgColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="w-full flex items-center justify-between h-auto md:h-[110px] pt-4 px-4 md:px-6">
        <Link href="/" className="inline-block text-xl md:text-2xl font-serif">
          <Image
            src="/images/logo.svg"
            alt="Site Logo"
            width={108}
            height={45}
            className="object-contain w-[108px] h-[45px]"
            priority
          />
        </Link>
        <div className="flex items-center space-x-6">
          {/* Search icon with intrinsic size */}
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={24}
              height={24}
              className="object-contain w-auto h-auto"
            />
          </Button>

          {/* Mail icon with intrinsic size */}
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Image
              src="/icons/mail.svg"
              alt="Mail"
              width={24}
              height={24}
              className="object-contain w-auto h-auto"
            />
          </Button>

          {/* Menu icon with intrinsic size */}
          <Button variant="ghost" size="icon">
            <Image
              src="/icons/menu.svg"
              alt="Menu"
              width={24}
              height={24}
              className="object-contain w-auto h-auto"
            />
          </Button>
        </div>
      </div>
    </header>
  )
}
