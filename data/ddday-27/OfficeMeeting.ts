//Here I am removing this because I want to use 
// the OfficeSlide interface from 
// types/office.ts instead of duplicating it here. 
// This will help keep the code DRY 
// (Don't Repeat Yourself) and make it easier 
// to maintain in the future.

// export interface OfficeFeature {
//   title: string
//   description: string
//   icon: string
// }

// export interface OfficeSlide {
//   title: string
//   subtitle: string
//   image: string
//   features: OfficeFeature[]
// }
// data/officeMeeting.ts
// This file contains the data for the office slides,
// which will be used in the OfficeShowcase component.
//neater====================================

import type { OfficeSlide } from "@/types/office"

export const officeSlides: OfficeSlide[] = [
  {
    title: "I.R.I.E. Headquarters",
    subtitle:
      "Our Riverside office is where all of our adventures begin and end. Enjoy our beautiful space before and after your tip.",
    eyebrow: "THE MEETING LOCATION",
    image: "/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-second.webp",
    images: [
      "/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-second.webp",
      "/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-first.webp",
    ],
    features: [
      {
        title: "Easy / Secure Parking",
        description: "Your vehicle is safe in our private parking lot while you are on the river",
        icon: "mdi-parking",
      },
      {
        title: "Guest Cubbies",
        description: "Leave your stuff with us so it's safe and dry after your trip!",
        icon: "mdi-eye-lock-outline",
      },
      {
        title: "Meet and Greet",
        description: "Get acquainted with your fellow adventurers and the I.R.I.E. staff.",
        icon: "mdi-handshake-outline",
      },
      {
        title: "Comfortable Meeting Location",
        description: "Restroom, changing room, a 10/10 Back patio to gather on and a meadow full of wildflowers.",
        icon: "mdi-sofa",
      }
    ],
  },

  // {
  //   title: "Gear & Safety",
  //   subtitle:
  //     "Every guest receives professionally maintained equipment and a complete safety briefing before departure.",

  //   image: "/images/compressed-irie/after-deployment/irie-river-rafting-riverside-office-second.webp",

  //   features: [
  //     {
  //       title: "Life Jackets",
  //       description: "USCG approved.",
  //       icon: "mdi-life-jacket",
  //     },
  //     {
  //       title: "Helmets",
  //       description: "Comfortable fitted protection.",
  //       icon: "mdi-hard-hat",
  //     },
  //     {
  //       title: "Safety Briefing",
  //       description: "Easy to understand instruction.",
  //       icon: "mdi-shield-check",
  //     },
  //   ],
  // },
]
// owww 27 [ktag]
// export const officeSlides: OfficeSlide[] = [
//   {
//     title: "Private Secure Parking",
//     subtitle: "Leave your vehicle with confidence while you're on the river.",
//     image: "/images/office/parking.jpg",
//     features: [
//       {
//         icon: "mdi-shield-car",
//         title: "Secure Parking",
//         description: "Private guest parking."
//       },
//       {
//         icon: "mdi-cctv",
//         title: "Peace of Mind",
//         description: "A dedicated headquarters rather than roadside parking."
//       },
//       {
//         icon: "mdi-map-marker",
//         title: "Easy Access",
//         description: "Simple arrival and check-in."
//       }
//     ]
//   },

//   {
//     title: "Comfortable Meeting Point",
//     subtitle: "Start your adventure somewhere comfortable.",
//     image: "/images/office/lounge.jpg",
//     features: [
//       {
//         icon: "mdi-sofa",
//         title: "Indoor Waiting Area",
//         description: "Relax before departure."
//       },
//       {
//         icon: "mdi-coffee",
//         title: "Refreshments",
//         description: "Grab a drink while your group arrives."
//       },
//       {
//         icon: "mdi-account-group",
//         title: "Meet Your Guide",
//         description: "Get acquainted before heading out."
//       }
//     ]
//   }
// ]