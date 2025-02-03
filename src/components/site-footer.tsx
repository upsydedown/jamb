"use client" // Only if you need client-side interactivity in the newsletter form

import * as React from "react"
import { cn } from "@/lib/utils" // Assuming cn utility is already set up in your project

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#E3E3E3] text-sm text-[#9C9C9D]">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* ------------------- FIRST SECTION ------------------- */}
        {/* 5-column grid: address, email, (empty), newsletter spans col-4 + col-5 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Column 1: Address */}
          <div>
            <div className="leading-relaxed">
              <p>Tel: +44 (0) 207 730 2122</p>
              <p>95-97 Pimlico Rd</p>
              <p>London SW1W 8PH</p>
            </div>
          </div>

          {/* Column 2: Email */}
          <div>
            <div className="leading-relaxed">
              <p>hello@jamb.co.uk</p>
            </div>
          </div>

          {/* Column 3: (Empty placeholder) */}
          <div />

          {/* Columns 4 & 5 combined: Newsletter */}
          <div className="col-span-2">
            <h2 className="mb-4 font-semibold uppercase tracking-wide text-[#000000]">
              Newsletter
            </h2>
            <div className="flex w-full max-w-sm items-center">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 border bg-white px-2 py-1 text-sm text-[#9C9C9D] outline-none font-polaris"
              />
              <button className="ml-2 whitespace-nowrap border bg-white px-3 py-1 text-sm text-[#9C9C9D] hover:bg-[#9C9C9D]/10">
                Subscribe
              </button>
            </div>
            <label className="mt-3 flex items-center space-x-2 text-[#9C9C9D]">
              <input type="radio" name="privacy" className="h-4 w-4" />
              <span>I agree to our Privacy Policy</span>
            </label>
          </div>
        </div>

        {/* Spacing between sections */}
        <div className="mt-10" />

        {/* ------------------- SECOND SECTION ------------------- */}
        {/* 5-column grid of links & references. 
            Each column has a horizontal line at the top. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Reproduction Chimneypieces, Antique Chimneypieces, Sell an Antique Chimneypiece */}
          <div>
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
            <FooterGroup heading="Sell an Antique Chimneypiece" items={[]} />
          </div>

          {/* Column 2: Reproduction Lighting */}
          <div>
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
          </div>

          {/* Column 3: Reproduction Furniture, Antique Furniture */}
          <div>
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

          {/* Column 4: Journal */}
          <div>
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

          {/* Column 5: About */}
          <div>
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

/** A simple horizontal divider matching the original color (#9C9C9D). */
function HrLine() {
  return <hr className="my-4 border-t border-[#9C9C9D]" />
}

/** Renders a heading in black (#000000) and a vertical list of items in #9C9C9D. */
interface FooterGroupProps {
  heading: string
  items: string[]
}

function FooterGroup({ heading, items }: FooterGroupProps) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 font-semibold text-[#000000]">{heading}</h3>
      {items.length > 0 && (
        <ul className="space-y-1 text-[#9C9C9D]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
