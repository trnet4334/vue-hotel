export interface I18nSchema {
  nav: {
    home: string
    rooms: string
    specials: string
    dining: string
    wellness: string
    activities: string
    events: string
    about: string
    booking: string
    information: string
    faq: string
    contact: string
    privacyPolicy: string
    switchLang: string
  }
  footer: {
    address: string
    phone: string
    fax: string
    reservationPhone: string
    followUs: string
    links: string
    privacyPolicy: string
    faq: string
    contact: string
    copyright: string
  }
  common: {
    send: string
    submit: string
    cancel: string
    yes: string
    ok: string
    required: string
    success: string
    error: string
    readyToSubmit: string
    requestCanceled: string
  }
  newsletter: {
    title: string
    fullName: string
    fullNamePlaceholder: string
    email: string
    emailPlaceholder: string
    address: string
    addressPlaceholder: string
    stateRegion: string
    stateRegionPlaceholder: string
    country: string
    countryPlaceholder: string
    zipCode: string
    signUp: string
    alreadySubscribed: string
    thankYou: string
    thankYouSub: string
  }
  contact: {
    title: string
    subtitle: string
    description: string
    address: string
    forReservation: string
    formTitle: string
    fullName: string
    email: string
    phone: string
    purpose: string
    purposeOptions: {
      dining: string
      pr: string
      activities: string
      room: string
      sales: string
      donation: string
    }
    comments: string
    commentsPlaceholder: string
    bookingNumber: string
    bookingNumberPlaceholder: string
    bookingNumberRequired: string
    consent: string
    privacyPolicy: string
    successMessage: string
    refLabel: string
  }
  wedding: {
    title: string
    subtitle: string
    description: string
    phone: string
    titleField: string
    firstName: string
    firstNamePlaceholder: string
    lastName: string
    lastNamePlaceholder: string
    phoneNum: string
    phoneNumPlaceholder: string
    email: string
    emailPlaceholder: string
    weddingDate: string
    selectAll: string
    services: {
      ceremony: string
      shower: string
      dinner: string
      guestrooms: string
      reception: string
      brunch: string
    }
    numberOfGuest: string
    consent: string
    privacyPolicy: string
    successMessage: string
    orderLabel: string
  }
  reservation: {
    emailConfirmNote: string
    emailFailed: string
  }
}

const en: I18nSchema = {
  nav: {
    home: 'Home',
    rooms: 'Rooms',
    specials: 'Specials',
    dining: 'Dining',
    wellness: 'Wellness',
    activities: 'Activities',
    events: 'Events',
    about: 'About',
    booking: 'Booking',
    information: 'Information',
    faq: 'FAQ',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    switchLang: '中文'
  },
  footer: {
    address: '135 Bear Wallow Ln, Sedona, AZ 86336',
    phone: 'T. 480.000.0000',
    fax: 'F. 480.000.0002',
    reservationPhone: 'T. 480.000.0001',
    followUs: 'Follow Us',
    links: 'Links',
    privacyPolicy: 'Privacy Policy',
    faq: 'FAQ',
    contact: 'Contact',
    copyright: '© A Resort & Spa. All rights reserved.'
  },
  common: {
    send: 'SEND',
    submit: 'SUBMIT',
    cancel: 'CANCEL',
    yes: 'YES',
    ok: 'OK',
    required: 'This field is required',
    success: 'Success',
    error: 'An error occurred. Please try again.',
    readyToSubmit: 'Ready to submit?',
    requestCanceled: 'Request canceled'
  },
  newsletter: {
    title: 'Sign up for our latest news and promotions',
    fullName: 'Full Name*',
    fullNamePlaceholder: 'Full Name',
    email: 'Email Address*',
    emailPlaceholder: 'E-mail Address',
    address: 'Address*',
    addressPlaceholder: 'Address',
    stateRegion: 'State/Province/Region*',
    stateRegionPlaceholder: 'State/Province/Region',
    country: 'Country*',
    countryPlaceholder: 'Country',
    zipCode: 'Zip Code',
    signUp: 'SIGN UP',
    alreadySubscribed: 'You have already been in our subscription list. Thank you very much.',
    thankYou: 'Thank you for choosing to stay connected with us!',
    thankYouSub: 'We are looking forward to your coming.'
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch',
    description: "We're always happy to help, but you may find what you'd like to know here in the FAQ page.",
    address: '135 Bear Wallow Ln, Sedona, AZ 86336',
    forReservation: 'For Reservation:',
    formTitle: "Contact Us, We're Happy to Hear from You.",
    fullName: 'Full Name*',
    email: 'Email Address*',
    phone: 'Phone Number*',
    purpose: 'Purpose*',
    purposeOptions: {
      dining: 'Dining Reservation',
      pr: 'Public Relations',
      activities: 'Hotel Activities',
      room: 'Room Reservation',
      sales: 'Sales',
      donation: 'Donation Request'
    },
    comments: 'Comments',
    commentsPlaceholder: 'Let us know what we can help you',
    bookingNumber: 'Booking Number*',
    bookingNumberPlaceholder: 'Enter your booking / reservation number',
    bookingNumberRequired: 'Booking Number is required',
    consent: 'I understand that this form collects my name, email and phone number, so I can be contacted. For more information, please check our',
    privacyPolicy: 'privacy policy',
    successMessage: 'Your request has been submitted successfully.',
    refLabel: 'Your enquiry reference'
  },
  wedding: {
    title: 'Weddings',
    subtitle: 'Request Proposal',
    description: 'We offer a various range of possibilities for your wedding. Please take a moment to fill out your information in the form below in two weeks before your wedding date. Our team staff will contact you for more details as soon as possible.',
    phone: 'If you would like to contact us directly, please call 480.000.0008',
    titleField: 'Title',
    firstName: 'First Name*',
    firstNamePlaceholder: 'First name',
    lastName: 'Last Name*',
    lastNamePlaceholder: 'Last name',
    phoneNum: 'Phone Number*',
    phoneNumPlaceholder: 'Start from country code(+)',
    email: 'Email Address*',
    emailPlaceholder: 'Email Address',
    weddingDate: 'Wedding Date',
    selectAll: 'Select all that apply',
    services: {
      ceremony: 'Ceremony / Reception',
      shower: 'Wedding Shower',
      dinner: 'Rehearsal Dinner',
      guestrooms: 'Guestrooms Only',
      reception: 'Reception Only',
      brunch: 'Arrival / Departure Brunch'
    },
    numberOfGuest: 'Number of Guests*',
    consent: 'I understand that this form collects my name, email and phone number so I can be contacted. For more information, please check our',
    privacyPolicy: 'privacy policy',
    successMessage: 'Your request has been submitted successfully.',
    orderLabel: 'Your wedding order number'
  },
  reservation: {
    emailConfirmNote: 'A confirmation email has been sent to your email address.',
    emailFailed: 'Your booking was confirmed, but we could not send a confirmation email. Please contact us if needed.'
  }
}

export default en
