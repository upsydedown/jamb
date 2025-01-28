import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="py-6 px-4 md:px-6 text-center text-gray-600">
      <nav className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <Link href="/fireplaces" className="hover:text-gray-900 text-sm md:text-base">
            Fireplaces
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/lighting" className="hover:text-gray-900 text-sm md:text-base">
            Lighting
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline">|</span>
          <Link href="/furniture" className="hover:text-gray-900 text-sm md:text-base">
            Furniture
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/journal" className="hover:text-gray-900 text-sm md:text-base">
            Journal
          </Link>
        </div>
      </nav>
    </footer>
  )
}

