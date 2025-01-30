"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavMenuItemProps {
    href: string
    label: string
    showDivider?: boolean
  }
  
  export function NavMenuItem({ href, label, showDivider }: NavMenuItemProps) {
    return (
      <>
        <Button variant="menu" asChild className="p-0">
          <Link className="text-[13px] sm:text-sm md:text-base text-[#9C9C9D]" href={href}>
            {label}
          </Link>
        </Button>
        {showDivider && <span className="text-[#737373] font-light">|</span>}
      </>
    )
  }

export function NavMenu() {
  return (
    <nav className="flex items-center justify-center space-x-2 py-6 text-xs sm:text-sm whitespace-nowrap min-w-0">
      <NavMenuItem href="/fireplaces" label="Fireplaces" showDivider />
      <NavMenuItem href="/lighting" label="Lighting" showDivider />
      <NavMenuItem href="/furniture" label="Furniture" showDivider />
      <NavMenuItem href="/journal" label="Journal" />
    </nav>
  )
}

