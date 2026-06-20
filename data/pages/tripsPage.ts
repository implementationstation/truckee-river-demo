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
  //ADDED [ktag] june17
  heroHome: {
    eyebrow: "poes se eyebrow",
    title: "",
    subtitle: "",
    primaryActionLabel: "",
    primaryActionLink: "",
     

  },
//SNAPSHOT 
  snapshot: [
    { label: 'Duration', value: '4 Hours Total' },
    { label: 'Runs', value: 'Morning + afternoon' },
    { label: 'Adults', value: '$120' },
    { label: 'Youth', value: '$100' },
  ],

  //HOME -- TRIPSCHEDULE [ktag]
  schedule: [
    {
      title: 'Morning Boca Run',
      time: 'Meets at 9:00 AM',
      text: 'Best for cooler weather, wildlife and getting your adventure done early. Typically less busy than the afternoon run. The morning trip is a guide favourite.',
    },
    {
      title: 'Afternoon Boca Run',
      time: 'Meets at 1:30 PM',
      text: 'Best for relaxed mornings and hot summer sun. The afternoon is great for visitors coming from further away. Get to North Tahoe early, and not stress about traffic.',
    },
  ],

  included: [
    'Professional river guide',
    'Raft and paddles',
    'Safety gear',
    'Pre-trip instructions',
    'Scenic Truckee River route',
    'Transport from I.R.I.E offices',
  ],

  cta: {
    eyebrow: 'Ready?',
    title: 'Book the Boca Run.',
    text: 'Keep the path simple: choose a time, confirm your group, and get ready for the river: We handle the rest.',
    buttonText: 'Reserve Your Raft',
    href: 'https://book.singenuity.com/338/'
  },
}