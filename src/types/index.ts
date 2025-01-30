export interface Product {
    image: string
    title: string
    subtitle: string
  }
  
  export interface Section {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    image: string
    imageAlt: string
    secondaryButton?: {
      text: string
      link: string
    }
  }
  
  export interface CarouselData {
    title: string
    products: Product[]
  }
  
  