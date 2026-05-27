// ~/content/trips/truckee-half-day.ts

export interface CTAButton {
  label: string
  href: string
  variant?: 'flat' | 'outlined' | 'tonal' | 'text'
  color?: string
  prependIcon?: string
}

export interface FeatureItem {
  title: string
  description?: string
  icon?: string
}

export interface ContentSection {
  id: string
  heading?: string
  subheading?: string
  body?: string
  items?: FeatureItem[]
}

export interface HeroSection {
  heading: string
  subtitle: string
  image?: string
  badges?: string[]
  primaryCta?: CTAButton
  secondaryCta?: CTAButton
}

export interface TripMeta {
  difficulty: string
  duration: string
  season: string
  minimumAge: number
  tripLength: string
  departureTimes: string[]
  raftCapacity: string
  location: string
}

export interface TripPage {
  slug: string
  seo: {
    title: string
    description: string
  }
  hero: HeroSection
  meta: TripMeta
  sections: ContentSection[]
  importantNotes: string[]
}

const truckeeHalfDay: TripPage = {
  slug: 'truckee-half-day-class-3',

  seo: {
    title: 'Truckee River Half Day - Class 3',
    description:
      'Family-friendly guided whitewater rafting trip on the Truckee River featuring scenic canyon views and exciting Class II-III rapids.'
  },

  hero: {
    heading: 'Truckee River Half Day - Class 3',

    subtitle:
      'Half Day Trip • Family Friendly • Great For Larger Groups • Ages 5+',

    image: '/images/l-exciting-truckee-river-rafting-experiences.webp',

    badges: [
      'Class II-III Rapids',
      'Family Friendly',
      'Half-Day Adventure',
      'Ages 5+',
      'Twice Daily'
    ],

    primaryCta: {
      label: 'Book Now',
      href: 'https://book.singenuity.com/338/catalog/activities',
      variant: 'flat',
      color: 'primary',
      prependIcon: 'mdi-calendar-check'
    },

    secondaryCta: {
      label: 'View Trip Details',
      href: 'https://book.singenuity.com/338/activity/details/1452/rates',
      variant: 'outlined',
      color: 'white',
      prependIcon: 'mdi-arrow-right'
    }
  },

  meta: {
    difficulty: 'Class II-III',
    duration: '3.5 Hours Round Trip',
    season: 'April - September',
    minimumAge: 5,
    tripLength: '2 Hours On The Water',
    departureTimes: ['9:00 AM', '1:30 PM'],
    raftCapacity: 'Up to 6 guests plus 1 guide',
    location: 'Truckee River Gorge'
  },

  sections: [
    {
      id: 'overview',

      heading: 'Choose Your Truckee River Adventure',

      body:
        'Our most popular river trip is offered twice daily throughout the season. This scenic stretch of the Truckee River flows through beautiful canyon landscapes filled with rich local history. The trip begins with mellow riffles before gradually building into exciting Class III rapids near the end, making it ideal for first-time rafters and thrill seekers alike.'
    },

    {
      id: 'trip-highlights',

      heading: 'Trip Highlights',

      items: [
        {
          title: 'Family Friendly Adventure',
          description:
            'Perfect for families, first-time rafters, and larger groups.',
          icon: 'mdi-account-group'
        },

        {
          title: 'Scenic River Canyon',
          description:
            'Experience beautiful canyon views and historic stretches of the Truckee River.',
          icon: 'mdi-image-filter-hdr'
        },

        {
          title: 'Exciting Class III Rapids',
          description:
            'Gradually increasing rapids help guests build confidence before the thrilling finale.',
          icon: 'mdi-wave'
        },

        {
          title: 'Convenient Half-Day Format',
          description:
            'Great for guests wanting adventure without committing to a full-day excursion.',
          icon: 'mdi-clock-outline'
        }
      ]
    },

    {
      id: 'included',

      heading: `What's Included`,

      items: [
        {
          title: 'Transportation',
          description:
            'Round-trip shuttle transportation from our office near Truckee (15-30 minutes).',
          icon: 'mdi-bus'
        },

        {
          title: 'Safety Equipment',
          description:
            'PFDs, paddles, and helmets provided for all guests.',
          icon: 'mdi-shield-check'
        },

        {
          title: 'Cold Drinks',
          description: 'Cold refreshments provided after your trip.',
          icon: 'mdi-cup-water'
        },

        {
          title: 'Wetsuits',
          description:
            'Wetsuits included when river conditions require them.',
          icon: 'mdi-hanger'
        },

        {
          title: 'Water Storage',
          description:
            'Each raft includes a large water jug. Personal water bottles should be attachable to the raft.',
          icon: 'mdi-water'
        }
      ]
    },

    {
      id: 'trip-details',

      heading: 'Trip Details',

      items: [
        {
          title: 'Raft Size & Capacity',
          description:
            "12’ & 13' rafts accommodating up to 6 guests plus one guide.",
          icon: 'mdi-boat'
        },

        {
          title: 'Departure Times',
          description: 'Trips depart daily at 9:00 AM and 1:30 PM.',
          icon: 'mdi-calendar-clock'
        },

        {
          title: 'Trip Duration',
          description:
            'Approximately 3.5 hours round trip including transportation, gear-up, and safety orientation.',
          icon: 'mdi-timer-outline'
        },

        {
          title: 'River Time',
          description: 'Approximately 2 hours on the water.',
          icon: 'mdi-kayaking'
        }
      ]
    },

    {
      id: 'about-the-river',

      heading: 'About The Truckee River',

      body:
        'Lake Tahoe has 63 streams flowing into it and only one flowing out — the Truckee River. Unlike the mellow float section in Tahoe City, the Lower Truckee Gorge delivers exciting Class II-III rapids that create a fun and memorable whitewater experience. The river gradually increases in intensity, giving guests time to become comfortable paddling before entering a continuous stretch of thrilling Class III rapids near the end of the trip.'
    }
  ],

  importantNotes: [
    'Traffic around Lake Tahoe and Truckee can be heavy during summer and holiday weekends.',
    'Please allow additional travel time before your scheduled departure.',
    'Check current traffic and road construction conditions before arriving.',
    'Minimum age requirement is 5 years old.'
  ]
}

export default truckeeHalfDay