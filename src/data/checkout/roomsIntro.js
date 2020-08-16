const roomsIntro = [
  {
    id: 'classic',
    type: 'Classic Guestroom',
    properties: 'Sleep 2-4 | 1 King/2 Queen | 470 square ft',
    description: 'You will find the interior of our refreshed classic rooms alluring and ' +
      'surprisingly spacious. This is an ideal choice for those looking to have space to unwind and relax. ' +
      'One king or two twin beds provided.',
    imageUrl: 'classic-guestroom-img',
    imageAlt: 'Classic Guestroom',
    detailsLink: '',
    maxGuestAvailable: 4,
    package: [
      {
        type: 'Classic Guestroom',
        name: 'Best Available Rate',
        id: 'bestRate',
        description: 'Best rate guaranteed with fully flexible cancellation policy',
        rate: 300
      },
      {
        type: 'Classic Guestroom',
        name: 'Spa & Breakfast Package',
        id: 'spaPackageRate',
        description: 'Enjoy our well-known spa service and continental breakfast daily ' +
          'in our restaurant.',
        rate: 400
      },
      {
        type: 'Classic Guestroom',
        name: 'Nature Adventure Package',
        id: 'adventurePackageRate',
        description: 'Discover the wonderful nature with our experienced local guide and ' +
          'enjoy the amazing view.',
        rate: 425
      },
      {
        type: 'Classic Guestroom',
        name: 'Summertime Escape Package',
        id: 'summertimePackageRate',
        description: 'Enjoy spectacular view from private deck of the selected room from us.',
        rate: 375
      },
      {
        type: 'Classic Guestroom',
        name: 'The Anniversary/The Honeymoon Package',
        id: 'honeymoonPackageRate',
        description: 'Spend your honeymoon or anniversary with luxurious accommodations from us.',
        rate: 600
      },
      {
        type: 'Classic Guestroom',
        name: 'Retrograde Retreat Package',
        id: 'retrogradePackageRate',
        description: 'Prioritize wellness and embrace retrograde ' +
          'with a 2-night stay, including two free yoga or fitness classes.',
        rate: 375
      }
    ]
  },
  {
    id: 'deluxe',
    type: 'Deluxe Guestroom',
    properties: 'Sleep 2-4 | 1 King/2 Queen | 540 square ft',
    description: 'With warm touches furnishing such as sandstone counters, fireplace and restorative sleep await. ' +
      'Deluxe guestroom furnished with either a plush king or two queen-sized beds.',
    imageUrl: 'deluxe-guestroom-img',
    imageAlt: 'Deluxe Guestroom',
    detailsLink: '',
    maxGuestAvailable: 4,
    package: [
      {
        type: 'Deluxe Guestroom',
        name: 'Best Available Rate',
        id: 'bestRate',
        description: 'Best rate guaranteed with fully flexible cancellation policy',
        rate: 500
      },
      {
        type: 'Deluxe Guestroom',
        name: 'Spa & Breakfast Package',
        id: 'spaPackageRate',
        description: 'Enjoy our well-known spa service and continental breakfast daily ' +
          'in our restaurant.',
        rate: 600
      },
      {
        type: 'Deluxe Guestroom',
        name: 'Nature Adventure Package',
        id: 'adventurePackageRate',
        description: 'Discover the wonderful nature with our experienced local guide and ' +
          'enjoy the amazing view.',
        rate: 625
      },
      {
        type: 'Deluxe Guestroom',
        name: 'Summertime Escape Package',
        id: 'summertimePackageRate',
        description: 'Enjoy spectacular view from private deck of the selected room from us.',
        rate: 575
      },
      {
        type: 'Deluxe Guestroom',
        name: 'The Anniversary/The Honeymoon Package',
        id: 'honeymoonPackageRate',
        description: 'Spend your honeymoon or anniversary with luxurious accommodations from us.',
        rate: 800
      },
      {
        type: 'Deluxe Guestroom',
        name: 'Retrograde Retreat Package',
        id: 'retrogradePackageRate',
        description: 'Prioritize wellness and embrace retrograde ' +
          'with a 2-night stay, including two free yoga or fitness classes.',
        rate: 575
      }
    ]
  },
  {
    id: 'spa',
    type: 'The Spa Suite',
    properties: 'Sleep 2-6 | 1 king bed | 780 square feet',
    description: 'The Spa Suite features the modern style furniture and full-supported amenities, including ' +
      'private patio. After a day of outdoor adventures or shopping pursuits, this luxury accommodation is ' +
      'a proper way to recover yourself. Over 750 square feet with one king bed. Additionally, an optional second ' +
      'classic guestroom can be connected to this suite including two twin beds, private bathroom, patio ' +
      'and a separate entrance.',
    imageUrl: 'the-spa-suite-img',
    imageAlt: 'The Spa Suite',
    detailsLink: '',
    maxGuestAvailable: 6,
    package: [
      {
        type: 'The Spa Suite',
        name: 'Best Available Rate',
        id: 'bestRate',
        description: 'Best rate guaranteed with fully flexible cancellation policy',
        rate: 550
      },
      {
        type: 'The Spa Suite',
        name: 'Spa & Breakfast Package',
        id: 'spaPackageRate',
        description: 'Enjoy our well-known spa service and continental breakfast daily ' +
          'in our restaurant.',
        rate: 650
      },
      {
        type: 'The Spa Suite',
        name: 'Nature Adventure Package',
        id: 'adventurePackageRate',
        description: 'Discover the wonderful nature with our experienced local guide and ' +
          'enjoy the amazing view.',
        rate: 675
      },
      {
        type: 'The Spa Suite',
        name: 'Summertime Escape Package',
        id: 'summertimePackageRate',
        description: 'Enjoy spectacular view from private deck of the selected room from us.',
        rate: 625
      },
      {
        type: 'The Spa Suite',
        name: 'The Anniversary/The Honeymoon Package',
        id: 'honeymoonPackageRate',
        description: 'Spend your honeymoon or anniversary with luxurious accommodations from us.',
        rate: 850
      },
      {
        type: 'The Spa Suite',
        name: 'Retrograde Retreat Package',
        id: 'retrogradePackageRate',
        description: 'Prioritize wellness and embrace retrograde ' +
          'with a 2-night stay, including two free yoga or fitness classes.',
        rate: 625
      }
    ]
  },
  {
    id: 'luxury',
    type: 'Luxury Suite',
    properties: 'Sleep 2-8 | 1 king bed | 810 square feet',
    description: 'With all the features of the Spa Suite, the Luxury Suite is a plus version of the Spa ' +
      'Suite. Featuring an outdoor shower and living space with fireplace and whirlpool, the Luxury Suite ' +
      'also own its private massage room. We offer luxury accommodations to fit what you needs.',
    imageUrl: 'luxury-suite-img',
    imageAlt: 'Luxury Suite',
    detailsLink: '',
    maxGuestAvailable: 8,
    package: [
      {
        type: 'Luxury Suite',
        name: 'Best Available Rate',
        id: 'bestRate',
        description: 'Best rate guaranteed with fully flexible cancellation policy',
        rate: 800
      },
      {
        type: 'Luxury Suite',
        name: 'Spa & Breakfast Package',
        id: 'spaPackageRate',
        description: 'Enjoy our well-known spa service and continental breakfast daily ' +
          'in our restaurant.',
        rate: 900
      },
      {
        type: 'Luxury Suite',
        name: 'Nature Adventure Package',
        id: 'adventurePackageRate',
        description: 'Discover the wonderful nature with our experienced local guide and ' +
          'enjoy the amazing view.',
        rate: 925
      },
      {
        type: 'Luxury Suite',
        name: 'Summertime Escape Package',
        id: 'summertimePackageRate',
        description: 'Enjoy spectacular view from private deck of the selected room from us.',
        rate: 875
      },
      {
        type: 'Luxury Suite',
        name: 'The Anniversary/The Honeymoon Package',
        id: 'honeymoonPackageRate',
        description: 'Spend your honeymoon or anniversary with luxurious accommodations from us.',
        rate: 1200
      },
      {
        type: 'Luxury Suite',
        name: 'Retrograde Retreat Package',
        id: 'retrogradePackageRate',
        description: 'Prioritize wellness and embrace retrograde ' +
          'with a 2-night stay, including two free yoga or fitness classes.',
        rate: 875
      }
    ]
  }
]

export default roomsIntro
