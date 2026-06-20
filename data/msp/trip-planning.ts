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
      id: 'how-to-reserve',
      heading: 'How To Make A Reservation',
      body: 'We recommend booking at least 2 weeks in advance, but walk-ins are accepted based on availability. Here’s how to reserve:',
      items: [
        {
          title: 'By Phone',
          description:
            'Call 530.582.4900 during business hours (8:30 a.m. to 6:00 p.m. PST, March–October) to process your reservation over the phone and answer any questions you may have.',
            to: '',link: 'tel:5305824900',icon: 'mdi-phone'
        },
        {
          title: 'Online',
          description:
            'Use our secure online booking system via "Reserve Your Raft" to schedule any rafting trip. You will receive a confirmation email with all the important information you need.',
            link: 'https://book.singenuity.com/338/activity/details/1452/rates',
            icon: 'mdi-account', to: '',
        },
        {
          title: 'Via Email',
          description:
            'Email info@raftirie.com. Payment is required to confirm all reservations. Email us to book this way.',
            link: '', icon: 'mdi-email-arrow-right', to: '/contact',
        }
      ]
    },
    
    {
      id: 'packing-list',
      heading: 'What to Bring',
      body: '',
      items: [
        { title: 'Shoes that will stay on your feet!', 
          description: 'Sandals with a backstrap, water-shoes or old tennis shoes. No barefeet. We sell water shoes at the office in case you need.',
          icon: 'mdi-lock-check-outline', 
        },
        { title: 'Swimsuit or Quick-Dry Clothing', 
          description: 'Shorts/bathing suit, t-shirt (having shorts over bikini bottoms is most comfortable on the raft). Avoid wearing cotton, blue jeans and heavy clothing.', 
          icon: 'mdi-swim',
        },

        { title: 'Sunscreen',
          description: 'Preferrably try bring a bio-degradable, waterfproof and high spf solution. ',
          icon: 'mdi-shield-sun',
         },
        { title: 'Change of clothes', 
          description: 'You can store this at the office/meeting location. Definitely great to have when you return.', 
          icon: 'mdi-tshirt-crew',
        },
        { title: 'Optional', 
          description: 'Sunglasses with strap, baseball hat, extra sun layer, water (attachable bottle). These items and more are available at our river store in the office.',
          icon: 'mdi-emoticon-happy',
        }
      ]
    },
    {
      id: 'rafting-photos',
      heading: 'Whitewater Rafting Photos',
      body: `Photos of your adventure are available for purchase before or after most trips. Packages include 50–75 digital images. Start at $75; single photos $25. Bundling with a trip reservation gets 10% off. Available within 24–48 hours. Email or call 530.582.4900 if you have issues receiving your photos.`,
     
    },
    
    // {
    //   id: 'pricing-cancellations',
    //   heading: 'Pricing and Cancellations',
    //   items: [
    //     { title: 'Half Day Truckee River Trip', description: 'Adults: $120, Youth (14 and under): $100', icon: 'mdi-cash-register' },
    //     { title: 'Gratuities', description: 'Typically 15–18% for guides; included for large or corporate groups.', icon: 'mdi-heart' },
    //     { title: 'Cancellations', description: 'No call/ no show receive no refund. Cancel with more than 48hours notice to receive a full refund. We will try reschedule your trip if notice is given within 48 hours before the booking. If no reschedule then 50% refund will be given.', icon: 'mdi-cancel'}
    //   ]
    // },
    {
      id: 'guest-release',
      heading: 'Rafting Guest Release of Liability',
      items: [
        { title: 'Liability Forms', description: 'All participants must complete a waiver; minors require guardian signatures.' },
        { title: 'Check-In', description: 'Complete forms before arrival for faster check-in.' },
        { title: 'PDF Option', description: 'For large groups or technical issues, PDF waivers can be printed.' }
      ]
    },
    
  ],

  importantNotes: [
    'Trips operate rain or shine unless river or weather conditions are deemed unsafe by management.',
    'River Flows & Rapid intensity may vary throughout the season.',
    'Check for any traffic or road conditions if traveling from Truckee/Tahoe/beyond.',
    'Guests are required to: Wear provided safety equipment & follow guide instructions at all times.',
    'All guests receive a full safety orientation before launching. Our guides are trained in river safety, rescue procedures and trip management.'
  ]
}

export default tripPlanning