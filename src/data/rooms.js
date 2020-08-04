const rooms = [
  {
    name: 'Classic Guestroom',
    description: 'You will find the interior of our refreshed classic rooms alluring and ' +
      'surprisingly spacious. This is an ideal choice for those looking to have space to unwind and relax. ' +
      'One king or two twin beds provided.',
    galleryUrl: [
      'room-carousel-1',
      'room-carousel-3',
      'room-carousel-5',
      'room-carousel-6'
    ],
    routeName: 'Classic Guestroom',
    id: 'classic'
  },
  {
    name: 'Deluxe Guestroom',
    description: 'With warm touches furnishing such as sandstone counters, fireplace and restorative sleep await. ' +
      'Deluxe guestroom furnished with either a plush king or two queen-sized beds.',
    galleryUrl: [
      'room-carousel-2',
      'room-carousel-4',
      'room-carousel-1',
      'room-carousel-3'
    ],
    routeName: 'Deluxe Guestroom',
    id: 'deluxe'
  },
  {
    name: 'The Spa Suite',
    description: 'The Spa Suite features the modern style furniture and full-supported amenities, including ' +
      'private patio. After a day of outdoor adventures or shopping pursuits, this luxury accommodation is ' +
      'a proper way to recover yourself. Over 750 square feet with one king bed. Additionally, an optional second ' +
      'classic guestroom can be connected to this suite including two twin beds, private bathroom, patio ' +
      'and a separate entrance.',
    galleryUrl: [
      'room-carousel-6',
      'room-carousel-3',
      'room-carousel-2',
      'room-carousel-5'
    ],
    routeName: 'The Spa Suite',
    id: 'spa'
  },
  {
    name: 'Luxury Suite',
    description: 'With all the features of the Spa Suite, the Luxury Suite is a plus version of the Spa ' +
      'Suite. Featuring an outdoor shower and living space with fireplace and whirlpool, the Luxury Suite ' +
      'also own its private massage room. We offer luxury accommodations to fit what you needs.',
    galleryUrl: [
      'room-carousel-4',
      'room-carousel-1',
      'room-carousel-6',
      'room-carousel-2'
    ],
    maxGuestAllow: 8,
    routeName: 'Luxury Suite',
    id: 'luxury'
  }
]

export default rooms
