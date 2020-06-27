const main = [
  {
    question: 'How do I view my reservation?',
    answer: 'Check out Manage my Booking page to view, modify or cancel your reservation.',
    id: 'm01'
  },
  {
    question: 'What is check in/check out time?',
    answer: 'Check in is at 4pm, check out is at 12 noon.',
    id: 'm02'
  },
  {
    question: 'What if I left something behind',
    answer: 'Please call us directly, we can help you immediately.',
    id: 'm03'
  },
  {
    question: 'Do you have a spa, pool or fitness center? What are the hours?',
    answer: 'Yes, we do have all these services. You can find the location of ' +
      'each service on our property map. We offer 24-hour fitness center, and two ' +
      'pools open daily from 6am - 10pm. If you want to have spa treatments, please call us ' +
      'through the internal extension 9453 to make an appointment. Operating hours can be found ' +
      'on spa page.',
    id: 'm04'
  },
  {
    question: 'Do you have business center?',
    answer: 'Yes, our self serve business center open 24 hours located next to the front desk. Our front desk staff can help you do Copy, Fax or boarding pass printing services, which is charge free.',
    id: 'm05'
  },
  {
    question: 'Do you offer room service? What are the hours?',
    answer: 'Available between 7am to 10pm, our room service menu will be provided in every rooms.',
    id: 'm06'
  },
  {
    question: 'Do you allow smoking on property? In the rooms?',
    answer: 'We do not allow guest to smoke in the room. You may smoke outside in our beautiful patio area.',
    id: 'm07'
  },
  {
    question: 'Are pets allowed?',
    answer: 'Yes, we gladly welcome up to two pets per room, but they should be weigh under 50 pounds or 70 pounds combined. ' +
      'Please inform us before you arrive. We will need you to fill out a pet waiver form, and a $150 ' +
      'non-refundable pet deposit per stay will be charged.',
    id: 'm08'
  }
]

const transportation = [
  {
    question: 'Do you have onsite parking? How much does it cost?',
    answer: 'We do have complimentary onsite parking and complimentary valet, which is included in your room rate.',
    id: 't01'
  },
  {
    question: 'Do you have any charging stations on property?',
    answer: 'We do have two dual Tesla charging station available.',
    id: 't02'
  }
]

const reservation = [
  {
    question: 'Do you have an early departure fee?',
    answer: 'All reservations will be subjected to an early departure fee, which charge $70 minimum or up to one night room including tax.',
    id: 'r01'
  },
  {
    question: 'Do you have accessible rooms or connecting rooms?',
    answer: 'Yes, we do have both, but both are limited. Please fill in special request at comment area in booking page. You can also call us directly through the reservation line. We are happy to help you.',
    id: 'r02'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Our standard cancellation policy is 72-hour. You may cancel your reservation without penalty by 5pm local hotel time at least 72-hour prior to your scheduled arrival.' +
      'Guests who notify us within 72-hour or do not arrive on the scheduled arrival date will be charged one night room rate with tax.',
    id: 'r03'
  }
]

const accounting = [
  {
    question: 'Who do I call if I have questions about my bill?',
    answer: 'Feel free to contact our financial department at 480.000.0007. We will be happy to help.',
    id: 'a01'
  },
  {
    question: 'Which type of credit card do we accept?',
    answer: 'We accept all major credit cards.',
    id: 'a02'
  }
]

const faq = [
  ...main,
  ...transportation,
  ...reservation,
  ...accounting
]

export default faq
