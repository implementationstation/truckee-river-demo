// /data/nav.links.ts

export interface NavLink {
  title: string
  to?: string
  children?: NavLink[]
  cta?: boolean
}

export const navLinks: NavLink[] = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'The Rafting Trip',
    to: '/trips'
  },
  // {
  //   title: 'Whitewater Trips',
  //   children: [
  //     //{ title: 'All Trips', to: '/trips' },
  //     { title: 'Truckee River Half Day', to: '/trips' },
  //   //   { title: 'Half Day Boca Run: Morning Session', to: '/trips/fuck' },
  //   //   { title: 'Half Day Boca Run: Afternoon Session', to: '/trips/half-day' }
  //   ]
  // },
  // {
  //   title: 'Plan Your Trip',
  //   children: [
  //     { title: 'og:Reservation Info', to: '/trip-planning' },
  //     { title: 'og:Pricing & Cancellations', to: '/trip-planning' },
  //     { title: 'og:What To Bring ', to: '/trip-planning' },
      
  //     { title: 'og:Rafting Photos', to: '/trip-planning'}
  //   ]
  // },
  {
    title: 'Preparation',
    to: '/trip-planning'
  },
  {
    title: 'About',
    to: '/about'
  },
  {
    title:'FAQs',
    to: '/faq'
  },
  {
    title: 'Contact',
    to: '/contact'
  },
  {
    title: 'Book',
    to: '/trips',
    cta: true
  }
]