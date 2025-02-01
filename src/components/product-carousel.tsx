"use client"

import Image from "next/image"

interface Product {
  image: string
  title: string
  subtitle: string
}

interface ProductGridProps {
  title: string
  products: Product[]
  /**
   * Number of columns on large screens (e.g., 4 or 5).
   * Defaults to 4 if none provided.
   */
  columns?: number
}

function getLgGridCols(columns: number) {
  switch (columns) {
    case 5:
      return "lg:grid-cols-5"
    case 4:
    default:
      return "lg:grid-cols-4"
  }
}

export function ProductGrid({
  title,
  products,
  columns = 4, // default to 4 columns if not specified
}: ProductGridProps) {
  return (
    <section className="py-12 md:py-16 bg-[#E3E3E3]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Center-aligned heading */}
        <h3 className="text-center text-gray-600 mb-8 text-sm md:text-base">
          {title}
        </h3>

        {/* Center the grid container, limit max width for seamless layout */}
        <div className="mx-auto w-full max-w-[1400px]">
          {/* A responsive grid that centers items and supports 4 or 5 columns */}
          <div
            className={`grid gap-8 sm:grid-cols-2 md:grid-cols-3 ${getLgGridCols(
              columns
            )} place-items-center`}
          >
            {products.map((product, index) => (
              <div key={index} className="space-y-3">
                <div className="relative w-auto h-auto max-w-full mx-auto">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    // Next.js "no-dimension" trick => uses the image's intrinsic size
                    width={0}
                    height={0}
                    unoptimized
                    // Ensures the image won't exceed its natural size on large screens
                    // but can shrink on smaller screens if needed
                    className="object-scale-down w-auto h-auto max-w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="text-center">
                  <p className="text-gray-800 text-sm font-semibold">
                    {product.title}
                  </p>
                  <p className="text-gray-500 text-xs">{product.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
