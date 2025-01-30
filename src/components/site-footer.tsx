"use client" // If you need client-side interactivity (e.g. for the newsletter form)

import * as React from "react"
import Link from "next/link"

/**
 * site-footer.tsx
 * A single-file footer for Next/Shadcn/Tailwind.
 * Replicates the layout and content from the provided screenshot.
 */
export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#EAE9E6] text-sm text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Use a 4-column grid to match the screenshot layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1: Contact info + Chimneypieces */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="leading-relaxed">
              <p>Tel: +44 (0) 207 730 2122</p>
              <p>95-97 Pimlico Rd</p>
              <p>London SW1W 8PH</p>
              <p>hello@jamb.co.uk</p>
            </div>

            <HrLine />
            <FooterGroup
              heading="Reproduction Chimneypieces"
              items={[
                "Marble",
                "Stone",
                "Grates & Accessories",
                "Guide to Jamb Marbles",
              ]}
            />
            <HrLine />
            <FooterGroup
              heading="Antique Chimneypieces"
              items={["French & Italian", "Georgian", "Regency"]}
            />
            <HrLine />
            {/* “Sell an Antique Chimneypiece” is treated like a heading with no sub‐items */}
            <FooterGroup heading="Sell an Antique Chimneypiece" items={[]} />
          </div>

          {/* COLUMN 2: Lighting + Furniture */}
          <div className="space-y-6">
            <HrLine />
            <FooterGroup
              heading="Reproduction Lighting"
              items={[
                "Hanging Globes",
                "Hanging Lanterns",
                "Wall Lights",
                "Dish Lights",
                "Table Lamps",
                "Chains & Brackets",
              ]}
            />
            <HrLine />
            <FooterGroup
              heading="Reproduction Furniture"
              items={["Seating", "Tables", "Mirrors", "The Pantry Collection"]}
            />
            <HrLine />
            <FooterGroup
              heading="Antique Furniture"
              items={[
                "Seating",
                "Tables",
                "Desks",
                "Bookcases & Cabinets",
                "Chests",
                "Mirrors",
                "Fire Accessories",
                "Objects",
                "Works of Arts",
                "Lighting",
              ]}
            />
          </div>

          {/* COLUMN 3: Journal */}
          <div className="space-y-6">
            <HrLine />
            <FooterGroup
              heading="Journal"
              items={[
                "Praesentium",
                "Voluptatibus",
                "Accusamus",
                "Iusto",
                "Dignissimos",
              ]}
            />
          </div>

          {/* COLUMN 4: Newsletter + About */}
          <div className="space-y-6">
            {/* Newsletter section at top */}
            <div className="space-y-4">
              <h2 className="font-semibold uppercase tracking-wide">Newsletter</h2>
              <div className="flex w-full max-w-sm items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 border border-gray-400 bg-white px-2 py-1 text-sm outline-none"
                />
                <button className="ml-2 whitespace-nowrap border border-gray-400 bg-white px-3 py-1 text-sm hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
              <label className="flex items-center space-x-2 text-gray-600">
                {/* Example radio or checkbox—adjust as needed */}
                <input type="radio" name="privacy" className="h-4 w-4" />
                <span>I agree to our Privacy Policy</span>
              </label>
            </div>

            <HrLine />
            <FooterGroup
              heading="About"
              items={[
                "Founders",
                "Team",
                "History",
                "Galleries",
                "Workshops",
                "Showrooms",
                "Terms & Conditions",
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

// ----- Reusable mini-components in the same file -----

/** A simple horizontal divider to match screenshot lines. */
function HrLine() {
  return <hr className="border-t border-gray-400" />
}

/** Renders a heading with a vertical list of items underneath. */
interface FooterGroupProps {
  heading: string
  items: string[]
}

function FooterGroup({ heading, items }: FooterGroupProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-900">{heading}</h3>
      {items.length > 0 && (
        <ul className="space-y-1 text-gray-600">
          {items.map((item) => (
            <li key={item}>
              {/* Use Link if desired; here we show plain text to match screenshot */}
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
