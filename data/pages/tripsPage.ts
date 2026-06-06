/// data/rafting-trip.ts
//GO THROUGH AND FISH FROM HERE WHILE COMPILING ONE DATASOURCE TO RULE THEM ALL

export const raftingTrip = {
  title: 'Half Day Truckee River Trip',

  subtitle:
    'Family-friendly whitewater rafting experience with professional guides.',

  duration: '3.5 Hours',

  pricing: [
    {
      label: 'Adult Ticket',
      value: '$120',
      icon: 'mdi-account',
    },
    {
      label: 'Youth Ticket',
      value: '$100',
      icon: 'mdi-account-child',
    },
  ],

  included: [
    'Professional rafting guide',
    'Helmet & life jacket',
    'Transportation shuttle',
    'Safety orientation',
  ],

  notes: [
    'Arrive 30 minutes early',
    'Wear quick-dry clothing',
    'Secure footwear required',
    'No valuables on raft',
  ],

  discounts: [
    {
      title: 'Military Discount',
      description: '10% off eligible bookings',
    },
    {
      title: 'Returning Guest',
      description: '5% off future trips',
    },
  ],

  gratuities:
    'Guide gratuities are appreciated and help support our rafting staff.',

  cancellation: [
    {
      title: '48+ Hour Cancellation',
      description: 'Eligible for refund minus processing fees.',
    },
    {
      title: 'Less Than 48 Hours',
      description: 'Partial refund or rescheduling may apply.',
    },
    {
      title: 'No Shows',
      description: 'No refunds available.',
    },
  ],
}


//THE ACTUAL USED BIT - (Ithink)
export const tripsPage = {
  seo: {
    slug: '/trips',
    title: 'Truckee River Rafting Trips | Boca Run',
    description:
      'Book a half-day Boca Run rafting trip on the Truckee River near Tahoe.',
  },

  hero: {
    eyebrow: 'Truckee River Trips',
    title: 'The Boca Run: half-day rafting, Tahoe scenery, easy booking.',
    subtitle:
      'A focused trip page for guests who want to know the route, schedule, price, and what to bring before booking.',
    primaryAction: 'Book a Trip',
    secondaryAction: 'Prepare for Your Trip',
  },

  snapshot: [
    { label: 'Duration', value: 'Half-day' },
    { label: 'Runs', value: 'Morning + afternoon' },
    { label: 'Adults', value: '$120' },
    { label: 'Youth', value: '$100' },
  ],

  schedule: [
    {
      title: 'Morning Boca Run',
      time: 'Departs around 9:00 AM',
      text: 'Best for families, cooler weather, and getting your adventure done early.',
    },
    {
      title: 'Afternoon Boca Run',
      time: 'Departs around 1:30 PM',
      text: 'Best for relaxed mornings, warmer sun, and visitors coming from Tahoe or Truckee.',
    },
  ],

  included: [
    'Professional river guide',
    'Raft and paddles',
    'Safety gear',
    'Pre-trip instructions',
    'Scenic Truckee River route',
    'Simple booking flow',
  ],

  cta: {
    eyebrow: 'Ready?',
    title: 'Book the Boca Run.',
    text: 'Keep the path simple: choose a time, confirm your group, and get ready for the river.',
    buttonText: 'Start Booking',
  },
}