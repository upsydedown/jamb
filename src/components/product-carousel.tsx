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
  columns = 4, // default to 4 columns
}: ProductGridProps) {
  return (
    <section
      className="py-12 md:py-16 bg-[#E3E3E3]"
      data-bgcolor="#E3E3E3" // <--- Added data-bgcolor matching the background
    >
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-[#737373] mb-8 text-xl md:text-2xl font-serif">
          {title}
        </h3>

        <div
          className={`mx-auto w-full max-w-[1400px] grid gap-8 sm:grid-cols-2 md:grid-cols-3 ${getLgGridCols(
            columns
          )} items-stretch`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col h-full items-center justify-end"
            >
              <div className="flex flex-col items-center justify-center w-auto h-auto max-w-full mx-auto flex-1">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={0}
                  height={0}
                  unoptimized
                  className="object-scale-down w-auto h-auto max-w-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="text-center mt-3">
                <p className="text-[#737373] text-sm md:text-base font-semibold">
                  {product.title}
                </p>
                <p className="text-[#737373] text-xs md:text-sm">
                  {product.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
