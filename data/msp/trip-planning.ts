// ~/content/trips/trip-planning.ts

import type { CTAButton, FeatureItem, ContentSection, HeroSection, TripPage } from './truckee-half-day'

const tripPlanning: TripPage = {
  slug: 'trip-planning',

  seo: {
    title: 'Trip Planning - IRIE Rafting',
    description:
      'Reservation info, pricing, packing lists, and photos to help plan your whitewater rafting adventure with IRIE Rafting.'
  },

  hero: {
    heading: 'Reservation Info',
    subtitle:
      'Information to help plan your next whitewater rafting adventure with I.R.I.E. Rafting Company'
  },

  meta: {
    difficulty: 'Varies by trip',
    duration: 'Varies',
    season: 'April - September',
    minimumAge: 5,
    tripLength: 'Varies',
    departureTimes: ['Varies by trip'],
    raftCapacity: 'Varies',
    location: 'Truckee & Tahoe Rivers'
  },

  sections: [
    {
      id: 'choosing-river',
      heading: 'What River is Right for your group?',
      body: `When choosing your trip, consider the swimming and athletic ability, age, and adventurous nature of your group. For first timers or large groups, we recommend erring on the side of caution to ensure everyone has fun. Our guides will teach you proper safety techniques. We accommodate most group requests including special shuttle logistics, time changes, disability accommodations, VIP services, and more. Sorry, no pets.`
    },
    {
      id: 'how-to-reserve',
      heading: 'How To Make A Reservation',
      body: 'We recommend booking at least 2 weeks in advance, but walk-ins are accepted based on availability. Here’s how to reserve:',
      items: [
        {
          title: 'By Phone',
          description:
            'Call 530.582.4900 during business hours (8:00 a.m. to 6:00 p.m. PST, March–October) to process your reservation over the phone.'
        },
        {
          title: 'Online',
          description:
            'Use our secure online booking system via "BOOK NOW" to reserve any single-day rafting trip.'
        },
        {
          title: 'Via Email',
          description:
            'Email info@raftirie.com. Payment is required to confirm all reservations. We can process orders online, over the phone, or by email.'
        }
      ]
    },
    {
      id: 'reservation-info-needed',
      heading: 'Information we will need from you',
      items: [
        { title: 'Number of participants, their ages, and date/time of trip' },
        { title: 'Phone number to reach you in Tahoe' },
        { title: 'Current email address' },
        { title: 'Credit card info (Visa, MC, AmEx, Discover, debit, or cash)' },
        { title: 'All info is confidential' },
        { title: 'Full payment required to confirm reservation' }
      ]
    },
    {
      id: 'guest-release',
      heading: 'Rafting Guest Release of Liability',
      items: [
        { title: 'Liability Forms', description: 'All participants must complete a waiver; minors require guardian signatures.' },
        { title: 'Check-In', description: 'Complete forms before arrival for faster check-in.' },
        { title: 'PDF Option', description: 'For large groups or technical issues, PDF waivers can be printed.' }
      ]
    },
    {
      id: 'what-to-wear',
      heading: 'What to Wear and Bring',
      body: `Bring a bathing suit, sunscreen, and secure shoes. Layers for warmth or sun protection are recommended. Towels or dry clothes are helpful. Safety gear and water are provided on the raft.`
    },
    {
      id: 'pricing-cancellations',
      heading: 'Pricing and Cancellations',
      items: [
        { title: 'Half Day Truckee River Trip', description: 'Adults: $120, Youth (14 and under): $100' },
        { title: 'Gratuities', description: 'Typically 15–18% for guides; included for large or corporate groups.' }
      ]
    },
    {
      id: 'discounts',
      heading: 'Discounts for IRIE Rafting Trips',
      items: [
        { title: 'Military', description: '10% discount if no other discounts apply' },
        { title: 'Educational/Non-Profit', description: '15% off per person, minimum 10; 1 adult free for youth groups' },
        { title: 'Returning Guests', description: 'Additional 5% off for return trips in same season' },
        { title: 'Returning Group Leaders', description: 'Same discounts as adult groups + 1 free adult' },
        { title: 'Large Group Discounts', description: 'Call 530.582.4900 for groups 15+' }
      ]
    },
    {
      id: 'packing-list',
      heading: 'What to Bring',
      body: 'Closed-toe shoes are required. Bring sunscreen, change of clothes, and secure items. Avoid cotton clothing and heavy items.',
      items: [
        { title: 'Shoes', description: 'Must stay on feet; no flip-flops or bare feet' },
        { title: 'Shorts/Bathing suit', description: 'T-shirt or cover-up recommended' },
        { title: 'Sunscreen' },
        { title: 'Change of clothes' },
        { title: 'Optional', description: 'Sunglasses with strap, baseball hat, extra sun layer, water (attachable bottle)' }
      ]
    },
    {
      id: 'rafting-photos',
      heading: 'Whitewater Rafting Photos',
      body: `Photos of your adventure are available for purchase before or after most trips. Packages include 50–75 digital images. Start at $75; single photos $25. Bundling with a trip reservation gets 10% off. Available within 24–48 hours.`,
      items: [
        { title: 'Contact', description: 'Email or call 530.582.4900 if you have issues receiving your photos.' }
      ]
    }
  ],

  importantNotes: [
    'Information on reservations, pricing, and packing lists is essential before arrival.',
    'Please ensure all forms are completed for a smoother check-in process.',
    'Check for any traffic or road conditions if traveling to Truckee/Tahoe.'
  ]
}

export default tripPlanning