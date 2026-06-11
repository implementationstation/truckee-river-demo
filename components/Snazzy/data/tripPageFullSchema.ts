export const tripPage = [
  {
    type: 'SectionHeroPro',
    props: {
      title: 'Truckee River Half-Day Rafting',
      subtitle: 'The perfect mix of relaxation and adventure',
      price: '$89',
      image: '/images/hero.webp',
      chips: ['Half Day', 'Beginner Friendly', 'Truckee River']
    }
  },

  {
    type: 'TripHighlights',
    props: {
      items: [
        { icon: '⏱', title: '3 Hours', sub: 'Half-day trip' },
        { icon: '🌊', title: 'Class I–II', sub: 'Easy rapids' },
        { icon: '👨‍👩‍👧', title: 'All Ages', sub: 'Family friendly' },
        { icon: '📍', title: 'Truckee', sub: 'Scenic route' }
      ]
    }
  },

  {
    type: 'SectionSplitPro',
    props: {
      title: 'What to expect',
      paragraphs: [
        'Meet your guide...',
        'Safety briefing...',
        'Enjoy the river...'
      ],
      image: '/images/rafting1.webp'
    }
  },

  {
    type: 'ItineraryTimeline',
    props: {
      steps: [
        { title: 'Arrival', text: 'Check in and meet guides' },
        { title: 'Gear Up', text: 'Life jackets + briefing' },
        { title: 'On The River', text: 'Relaxed scenic float' }
      ]
    }
  },

  {
    type: 'ComparisonCards',
    props: { items: [
            {
      title: 'Half Day',
      description: 'Perfect intro trip',
      price: '$89',
      features: ['3 hours', 'Beginner friendly', 'Scenic float'],
      cta: 'Book Now'
    },
         {
      title: 'Morning BOCA Run',
      description: 'Best experience',
      price: '$120',
      badge: 'Most Popular',
      featured: true,
      features: ['Longer route', 'Better rapids', 'Snacks included'],
      cta: 'Book Now'
    },
    {
      title: 'Private',
      description: 'Custom trip',
      price: '$299',
      features: ['Private guide', 'Flexible time', 'Premium gear'],
      cta: 'Contact'
    }
    ] }
  },

  {
    type: 'TrustBar',
    props: {
      items: [
        { value: '10K+', label: 'Happy Guests' },
        { value: '4.9★', label: 'Average Rating' },
        { value: '10+ yrs', label: 'Experience' }
      ]
    }
  },

  {
    type: 'FAQ',
    props: {
      items: [
        { q: 'Do I need experience?', a: 'No, beginner friendly.' },
        { q: 'What should I bring?', a: 'Swimsuit, sunscreen.' }
      ]
    }
  }
]