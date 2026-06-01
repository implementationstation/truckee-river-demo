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
        'Experience the Truckee River Like Never Before',

      subheading:
        'Scenic rafting adventures for families, groups, and outdoor enthusiasts.',

      image:
        '/images/home/hero.jpg',

      cta: {
        label: 'Book Your Adventure',
        to: '/trip-info'
      }
    }
  },

  about: {
    slug: 'about',
    route: '/about',

    title: 'About Our Company',

    description:
      'Learn about our guides, history, and commitment to safety.',

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