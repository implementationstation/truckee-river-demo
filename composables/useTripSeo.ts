export const useTripSeo = (trip: {
  title: string
  description: string
  image: string
  slug: string
}) => {
  const baseUrl = 'https://yourdomain.com'

  useSeoMeta({
    title: trip.title,
    description: trip.description,

    ogTitle: trip.title,
    ogDescription: trip.description,
    ogImage: `${baseUrl}${trip.image}`,
    ogUrl: `${baseUrl}/${trip.slug}`,

    twitterCard: 'summary_large_image',
    twitterTitle: trip.title,
    twitterDescription: trip.description,
    twitterImage: `${baseUrl}${trip.image}`
  })
}