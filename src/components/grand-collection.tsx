import Image from "next/image"
import { Button } from "@/components/ui/button"

export function GrandCollection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6">
          <span className="text-sm text-gray-600">JOURNAL</span>
          <h2 className="text-3xl md:text-4xl font-serif">The Grand Collection</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.
          </p>
          <div className="flex flex-col space-y-3 pt-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-gray-300 hover:bg-gray-50 text-sm md:text-base"
            >
              Discover more
            </Button>
          </div>
        </div>
        <div className="relative aspect-[3/4] md:aspect-[4/5] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20at%207.20.06%E2%80%AFPM-9kxo9lZ8z57jAmjuPClCV7d2uk24Rw.png"
            alt="Grand architectural space with hanging lantern"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  )
}

