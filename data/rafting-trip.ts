/// data/rafting-trip.ts

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