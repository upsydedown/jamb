import type { SectionProps } from "@/components/section-component"

export const fireplaceSection: SectionProps = {
  title: "Fireplaces",
  description:
    "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
  primaryButton: {
    text: "Explore our Fireplaces",
    link: "/fireplaces",
  },
  secondaryButton: {
    text: "Sell an Antique Chimneypiece",
    link: "/sell",
  },
  image: {
    src: "/images/fireplaces.png",
    alt: "Elegant fireplace with ornate mirror",
  },
}

export const lightingSection: SectionProps = {
    title: "Lighting",
    description:
      "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
    primaryButton: {
      text: "Explore our Lighting",
      link: "/lighting",
    },
    image: {
      src: "/images/Lighting.png",
      alt: "Elegant fireplace with ornate mirror",
    },
  }

export const furnitureSection: SectionProps = {
  title: "Furniture",
  description:
    "Discover our exquisite collection of handcrafted furniture, blending timeless elegance with modern comfort. Each piece is meticulously designed to enhance your living spaces with unparalleled style and sophistication.",
  primaryButton: {
    text: "Explore our Furniture",
    link: "/furniture",
  },
  image: {
    src: "/images/furniture.png",
    alt: "Elegant white sofa beneath ornate wall panel",
  },
  imagePosition: "left",
}

export const grandSection: SectionProps = {
    title: "The Grand Collection",
    description:
      "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
    primaryButton: {
      text: "Explore our Fireplaces",
      link: "/fireplaces",
    },
    secondaryButton: {
      text: "Sell an Antique Chimneypiece",
      link: "/sell",
    },
    image: {
      src: "/images/grandCollection.png",
      alt: "Elegant fireplace with ornate mirror",
    },
  }

export const subscribeSection: SectionProps = {
  title: "Subscribe to the Jamb Journal",
  description:
    "Stay informed about our latest collections, design inspirations, and exclusive offers. Join our community of design enthusiasts and be the first to know about new arrivals and special events.",
  primaryButton: {
    text: "Subscribe Now",
    link: "/subscribe",
  },
  image: {
    src: "/images/SubscribetoJamb.png",
    alt: "Jamb Journal Cover",
    width: "410",
  },
  backgroundColor:"#DFDAD7" 
}

