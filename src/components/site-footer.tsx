"use client" // Only if you need client-side interactivity for your newsletter form

import * as React from "react"

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#E3E3E3] text-sm text-[#9C9C9D]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* 4-column grid layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1 */}
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
            <FooterGroup heading="Sell an Antique Chimneypiece" items={[]} />
          </div>

          {/* COLUMN 2 */}
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

          {/* COLUMN 3 */}
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

          {/* COLUMN 4 */}
          <div className="space-y-6">
            {/* Newsletter Section */}
            <div className="space-y-4">
              <h2 className="font-semibold uppercase tracking-wide text-[#000000]">
                Newsletter
              </h2>
              <div className="flex w-full max-w-sm items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 border border-[#9C9C9D] bg-white px-2 py-1 text-sm outline-none text-[#9C9C9D]"
                />
                <button className="ml-2 whitespace-nowrap border border-[#9C9C9D] bg-white px-3 py-1 text-sm hover:bg-[#9C9C9D]/10 text-[#9C9C9D]">
                  Subscribe
                </button>
              </div>
              <label className="flex items-center space-x-2 text-[#9C9C9D]">
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

/** A simple horizontal divider. */
function HrLine() {
  return <hr className="border-t border-[#9C9C9D]" />
}

interface FooterGroupProps {
  heading: string
  items: string[]
}

function FooterGroup({ heading, items }: FooterGroupProps) {
  return (
    <div className="space-y-2">
      {/* Heading in bold black (#000000) */}
      <h3 className="font-semibold text-[#000000]">{heading}</h3>

      {/* Sub-items in lighter gray (#9C9C9D) */}
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
