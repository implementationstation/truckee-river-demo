export const useSeo = ({
  title,
  description,
  image,
  url
}: {
  title: string
  description: string
  image?: string
  url?: string
}) => {
  const siteName = 'Truckee River Rafting'
  const baseUrl = 'https://yourdomain.com'

  const fullTitle = `${title} | ${siteName}`
  const resolvedUrl = url || baseUrl
  const resolvedImage = image || `${baseUrl}/og-default.jpg`

  useHead({
    title: fullTitle,

    meta: [
      { name: 'description', content: description },

      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: resolvedImage },
      { property: 'og:url', content: resolvedUrl },
      { property: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: resolvedImage }
    ],

    link: [
      {
        rel: 'canonical',
        href: resolvedUrl
      }
    ],

    script: [
  {
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: title,
      description,
      image: resolvedImage,
      provider: {
        '@type': 'Organization',
        name: siteName
      }
    })
  }
]
    // script: [
    //   {
    //     type: 'application/ld+json',
    //     children: JSON.stringify({
    //       '@context': 'https://schema.org',
    //       '@type': 'TouristTrip',
    //       name: title,
    //       description,
    //       image: resolvedImage,
    //       provider: {
    //         '@type': 'Organization',
    //         name: siteName
    //       }
    //     })
    //   }
    // ]
  })
}

// export const useSeo = ({
//   title,
//   description,
//   image,
//   url
// }: {
//   title: string
//   description: string
//   image?: string
//   url?: string
// }) => {
//   const siteName = 'Truckee River Rafting'
//   const baseUrl = 'https://yourdomain.com'

//   useHead({
//     title: `${title} | ${siteName}`,
//     meta: [
//       { name: 'description', content: description },

//       // Open Graph (Facebook, iMessage, Slack)
//       { property: 'og:title', content: title },
//       { property: 'og:description', content: description },
//       { property: 'og:image', content: image || `${baseUrl}/og-default.jpg` },
//       { property: 'og:url', content: url || baseUrl },
//       { property: 'og:type', content: 'website' },

//       // Twitter
//       { name: 'twitter:card', content: 'summary_large_image' },
//       { name: 'twitter:title', content: title },
//       { name: 'twitter:description', content: description },
//       { name: 'twitter:image', content: image || `${baseUrl}/og-default.jpg` }
//     ],
//     link: [
//       {
//         rel: 'canonical',
//         href: url || baseUrl
//       }
//     ]
//   })
// }