export interface TrustItem {
  title: string
  value: string
  icon: string
}

export const TrustBarItems: TrustItem[] = [

  {
    icon: 'mdi-star-circle',
    value: '4.9 ★',
    title: 'Average Yelp Rating'
  },

  {
    icon: 'mdi-calendar',
    value: '30 +',
    title: 'Years Experience on Rapids'
  },

  {
    icon: 'mdi-account-hard-hat',
    title: 'Experienced Guides',
    value: 'with a local flair',

  },

  {
    icon: 'mdi-shield-check',
    value: 'Safety',
    title: 'Top Priority'
  },

  // {
  //   icon: 'mdi-account-group',
  //   value: '50000k+',
  //   title: 'Guests Served'
  // },


]
