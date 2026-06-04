export interface PageData {
  slug: string
  route: string

  title: string
  description: string

  seo: {
    title: string
    description: string
    keywords: string[]
  }

  hero: {
    heading: string
    subheading: string
    image: string

    cta?: {
      label: string
      to: string
    }
  }
}

export const pages = {
  home: {
    slug: 'home',
    route: '/',

    title: 'Truckee River Rafting Adventures',

    description:
      'Family-friendly rafting experiences on the beautiful Truckee River.',

    seo: {
      title:
        'Truckee River Rafting | Family Adventures in Truckee',

      description:
        'Experience unforgettable rafting adventures on the Truckee River.',

      keywords: [
        'truckee rafting',
        'truckee river tours',
        'family rafting',
        'lake tahoe rafting'
      ]
    },

    hero: {
      heading:
        'Truckee Tahoe Guided Whitewater Rafting',

      subheading:
        'Experienced guides maximising your river rafting experiences',

      image:
        '/images/half-day-guided-whitewater-experience (2).webp',

      cta: {
        label: 'Book Your Adventure',
        to: '/trip-info'
      }
    },
    /*------------------------ 
        TRUSTBAR
    ------------------------*/
    //TRUSTBAR
    trustBar: {
    items: [
      {
        icon: 'mdi-star-circle',
        value: '4.6 (65 reviews)',
        label: 'Google Business'
      },
      {
        icon: 'mdi-account-group',
        value: '10,000+',
        label: 'Happy Guests'
      },
      {
        icon: 'mdi-calendar',
        value: '2 trips every day',
        label: 'Truckee River'
      },
      {
        icon: 'mdi-shield-check',
        value: 'Safety Conscious',
        label: 'Backed by Experience'
      }
    ]
  },
    /*------------------------ 
        TESTIMONIALS
    ------------------------*/
    testimonials: {
    title: "What Our Guests Say",
    subtitle: "Real experiences from river adventurers.",

    items: [
      {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        source: "Google",
        date: "May 2026",
        review:
          "Absolutely incredible experience. The guides were knowledgeable and made everyone feel safe."
      },
      {
        id: 2,
        name: "James R.",
        rating: 5,
        source: "Google",
        date: "April 2026",
        review:
          "Perfect family outing. The scenery was beautiful and the staff was fantastic."
      },
      {
        id: 3,
        name: "Emily T.",
        rating: 5,
        source: "Yelp",
        date: "March 2026",
        review:
          "One of the highlights of our trip. Would absolutely book again."
      }
    ],
    //ADDED THIS FOR MODULAR APPROACH
    reviews: [
  {
    id: 1,
    name: 'Sarah M',
    rating: 5,
    source: 'Google',
    review:
      'Amazing experience. The guides were knowledgeable and friendly.'
  },
  {
    id: 2,
    name: 'James R',
    rating: 5,
    source: 'Google',
    review:
      'Beautiful scenery and a great family outing.'
  },
  {
    id: 3,
    name: 'Emily T',
    rating: 5,
    source: 'Yelp',
    review:
      'Would absolutely book again.'
  }
    ],

    

  },

  about: {
    slug: 'about',
    route: '/about',

    title: 'About IRIE Raft co',

    description:
      'Learn about our guides, history, and equal commitment to both safety and fun.',

    seo: {
      title:
        'About Our Truckee Rafting Company',

      description:
        'Meet the experienced guides behind our rafting adventures.',

      keywords: [
        'rafting guides',
        'truckee rafting company'
      ]
    },

    hero: {
      heading:
        'Locally Owned. Adventure Driven.',

      subheading:
        'Sharing the Truckee River with visitors for generations.',

      image:
        '/images/about/hero.jpg'
    }
  }

  // Add:
  // trip-info
  // planning-your-trip
  // faq
  // contact
}
}