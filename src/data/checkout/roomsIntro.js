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
    rate: {
      bestRate: 300,
      spaPackageRate: 400,
      adventurePackageRate: 425,
      summertimePackageRate: 375,
      honeymoonPackageRate: 600,
      retrogradePackageRate: 375,
      longerPackageRate: 240,
      guestAvailable: 4
    }
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
    rate: {
      bestRate: 500,
      spaPackageRate: 600,
      adventurePackageRate: 625,
      summertimePackageRate: 575,
      honeymoonPackageRate: 800,
      retrogradePackageRate: 575,
      longerPackageRate: 400,
      guestAvailable: 4
    }
  },
  {
    id: 'spa',
    type: 'The Spa Suite',
    properties: 'Sleep 2 | 1 king bed | 780 square feet',
    description: 'The Spa Suite features the modern style furniture and full-supported amenities, including ' +
      'private patio. After a day of outdoor adventures or shopping pursuits, this luxury accommodation is ' +
      'a proper way to recover yourself. Over 750 square feet with one king bed. Additionally, an optional second ' +
      'classic guestroom can be connected to this suite including two twin beds, private bathroom, patio ' +
      'and a separate entrance.',
    imageUrl: 'the-spa-suite-img',
    imageAlt: 'The Spa Suite',
    detailsLink: '',
    rate: {
      bestRate: 550,
      spaPackageRate: 650,
      adventurePackageRate: 675,
      summertimePackageRate: 625,
      honeymoonPackageRate: 850,
      retrogradePackageRate: 625,
      longerPackageRate: 440,
      guestAvailable: 2
    }
  },
  {
    id: 'luxury',
    type: 'Luxury Suite',
    properties: 'Sleep 2 | 1 king bed | 810 square feet',
    description: 'With all the features of the Spa Suite, the Luxury Suite is a plus version of the Spa ' +
      'Suite. Featuring an outdoor shower and living space with fireplace and whirlpool, the Luxury Suite ' +
      'also own its private massage room. We offer luxury accommodations to fit what you needs.',
    imageUrl: 'luxury-suite-img',
    imageAlt: 'Luxury Suite',
    detailsLink: '',
    rate: {
      bestRate: 800,
      spaPackageRate: 900,
      adventurePackageRate: 925,
      summertimePackageRate: 875,
      honeymoonPackageRate: 1200,
      retrogradePackageRate: 875,
      longerPackageRate: 640,
      guestAvailable: 4
    }
  }
]

export default roomsIntro
