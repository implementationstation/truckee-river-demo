export interface TrustItem {
  title: string
  value: string
  icon: string
}

export const TrustBarItems: TrustItem[] = [

  {
    icon: 'mdi-star-circle',
    value: '4.9★',
    title: 'Average Rating'
  },

  {
    icon: 'mdi-calendar',
    value: '30+',
    title: 'Years Experience on Rapids'
  },

  {
    icon: 'mdi-account-hard-hat',
    title: 'Certified Guides',
    value: 'with a local flair',

  },

  {
    icon: 'mdi-shield-check',
    value: 'Safety',
    title: 'First Approach'
  },

  {
    icon: 'mdi-account-group',
    value: '10k+',
    title: 'Guests Served'
  },

  {
    icon: 'mdi-kayaking',
    value: 'Truckee',
    title: 'River Experts'
  }
]
