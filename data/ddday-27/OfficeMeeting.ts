export interface OfficeFeature {
  title: string
  description: string
  icon: string
}

export interface OfficeSlide {
  title: string
  subtitle: string
  image: string
  features: OfficeFeature[]
}

export const officeSlides: OfficeSlide[] = [
  {
    title: "Private Secure Parking",
    subtitle: "Leave your vehicle with confidence while you're on the river.",
    image: "/images/office/parking.jpg",
    features: [
      {
        icon: "mdi-shield-car",
        title: "Secure Parking",
        description: "Private guest parking."
      },
      {
        icon: "mdi-cctv",
        title: "Peace of Mind",
        description: "A dedicated headquarters rather than roadside parking."
      },
      {
        icon: "mdi-map-marker",
        title: "Easy Access",
        description: "Simple arrival and check-in."
      }
    ]
  },

  {
    title: "Comfortable Meeting Point",
    subtitle: "Start your adventure somewhere comfortable.",
    image: "/images/office/lounge.jpg",
    features: [
      {
        icon: "mdi-sofa",
        title: "Indoor Waiting Area",
        description: "Relax before departure."
      },
      {
        icon: "mdi-coffee",
        title: "Refreshments",
        description: "Grab a drink while your group arrives."
      },
      {
        icon: "mdi-account-group",
        title: "Meet Your Guide",
        description: "Get acquainted before heading out."
      }
    ]
  }
]