// /data/footer.links.ts

export interface FooterLink {
  title: string
  to?: string
  href?: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export const footerSections: FooterSection[] = [
  {
    title: 'Explore',
    links: [
      { title: 'Home', to: '/' },
      { title: 'Half Day Rafting', to: '/trips' },
      { title: 'Important To Know', to: '/trip-planning' }
    ]
  },
  {
    title: 'I.R.I.E River Raft Co.',
    links: [
      { title: 'About', to: '/about' },
      { title: 'Contact', to: '/contact' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Questions: Answered.', to: '/faq' },

    ]
  }
]

export const footerMeta = {
  brand: 'Rafting Co.',
  tagline: 'Unforgettable river experiences.',
  cta: {
    title: 'Book Your Trip',
    to: '/book'
  },
  socials: [
    { icon: 'mdi-instagram', href: '#' },
    { icon: 'mdi-facebook', href: '#' },
    { icon: 'mdi-twitter', href: '#' }
  ]
}