// types/office.ts
export interface OfficeFeature {
  title: string
  description: string
  icon: string
}

export interface OfficeSlide {
  title: string
  subtitle: string
  eyebrow?: string
  image: string
  images: string[] // Array of image URLs for the slide
// Optional call to action for the slide
  cta?: {
    label: string
    to: string
  }

  features: OfficeFeature[]
}

//Removed because we making it better above with more extensionability
// export interface OfficeSlide {
//   title: string
//   subtitle: string
//   image: string
//   features: OfficeFeature[]
// }