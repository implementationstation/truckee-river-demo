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
    title: 'I.R.I.E Rafting Company',
    links: [
      { title: 'About', to: '/about' },
      { title: 'Contact', to: '/contact' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'FAQs', to: '/faq' },
      { title: 'Preparation', to: '/trip-planning'}

    ]
  }
]

export const footerMeta = {
  brand: 'I.R.I.E Rafting Company',
  tagline: 'Isolated Rivers Incredible Experiences',
  cta: {
    title: 'Reserve Your Raft',
    to: '/trips',
    href: 'https://book.singenuity.com/338/activity/details/1452/rates'
  },
  socials: [
    { icon: 'mdi-instagram', href: 'https://instagram.com/raftirie' },
    { icon: 'mdi-youtube', href: 'https://www.youtube.com/channel/UC72y5dGdF-fBalazy2qvZaw'},
    { icon: 'mdi-facebook', href: 'https://www.facebook.com/raftirie/' },
    { icon: 'mdi-email-outline', href: 'mailto:info@raftirie.com' },
    { icon: 'mdi-phone-outline', href: 'tel:5305824900'}
  ]
}

//[ktag] JUNE 20
//Company Info on Footer 
//  replace the button with logo
  // add all the social links
  //  add a phone and email link side by side