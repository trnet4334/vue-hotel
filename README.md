# vue-hotel

![Screenshot](https://github.com/trnet4334/vue-hotel/blob/development/src/assets/images/Screenshot.png "Screenshot of homepage")

## Description

A hotel reservation web app built with Vue 3, Firebase Firestore, and Element Plus. The site introduces resort services and provides a full booking flow — guests can make reservations, check their booking status, and cancel trips.

Built as a personal project to practice modern frontend development, Vue 3 migration patterns, and TypeScript adoption.

## Demo

[Click here for a demo](https://vue-hotel-53dd5.web.app/)

> The live demo requires a connected Firebase project for the booking system to function.

## Tech Stack

| Category | Library / Tool |
|----------|---------------|
| Framework | Vue 3.4 + Vue Router 4 + Vuex 4 |
| UI | Element Plus 2.8 |
| Slideshow | Swiper 11 |
| Forms | vee-validate 4 |
| Date picker | v-calendar 3 |
| Backend | Firebase 11 (Firestore — modular API) |
| Date utilities | dayjs |
| Utilities | lodash, nanoid |
| State persistence | vuex-persistedstate (sessionStorage) |
| Language | JavaScript + TypeScript (partial) |
| Build | @vue/cli-service (webpack) |
| Testing | Vitest + @vue/test-utils |

## Features

- Room browsing with image carousel (Swiper)
- Multi-step reservation wizard (room selection → guest info → confirmation)
- Add-on services per room (breakfast, late checkout, etc.)
- Booking status lookup by email + last name
- Trip cancellation
- Responsive layout (mobile / tablet / desktop)
- Sticky sidebar summary on checkout

## Quick Start

### 1. Clone the repository

```shell
git clone https://github.com/trnet4334/vue-hotel.git
cd vue-hotel
```

### 2. Install dependencies

```shell
npm install
```

### 3. Configure Firebase

Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com), then copy your project credentials:

```shell
cp .env.example .env.local
```

Edit `.env.local` and fill in your Firebase config values:

```
VUE_APP_FIREBASE_API_KEY=your_api_key
VUE_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VUE_APP_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
VUE_APP_FIREBASE_PROJECT_ID=your_project_id
VUE_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VUE_APP_FIREBASE_APP_ID=your_app_id
VUE_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run locally

```shell
# Development server
npm run serve

# Or with Firebase emulators (recommended for full booking system)
firebase emulators:start
```

### 5. Deploy

```shell
firebase init   # first time only
firebase deploy
```

## Development

```shell
# Lint
npm run lint

# Run tests
npm test

# Run tests with coverage report
npm run test:coverage

# Production build
npm run build
```

## Project Structure

```
src/
├── assets/
│   ├── data/          # Static data (rooms, offers, add-ons, FAQ) — TypeScript
│   └── images/
├── common/
│   ├── firebase.js    # Firebase init (gitignored — use .env.local)
│   └── firebaseApi.js # Firestore CRUD helpers
├── components/
│   ├── booking/       # Booking lookup components
│   └── checkout/      # Reservation checkout components (Sidebar, Room, etc.)
├── plugins/
│   └── validation.js  # vee-validate 4 rule definitions
├── router/            # Vue Router 4 config
├── store/
│   ├── modules/
│   │   ├── booking.js      # Booking lookup / filter state
│   │   └── reservation.js  # Reservation wizard state
│   ├── action-types.ts
│   └── mutation-types.ts
├── styles/            # Global SCSS + breakpoint mixins
├── utils/
│   └── date.ts        # Activity date helpers (getActivityDate, diffDaysFromToday, …)
└── views/
    ├── Booking/       # Booking status pages
    ├── Home/
    ├── Reservation/   # Multi-step reservation wizard
    └── ...
```

## Testing

Tests live alongside source files in `__tests__/` directories and use Vitest with `jsdom`.

```shell
npm test               # watch mode
npm run test:coverage  # single run + lcov report
```

Current coverage:
- `src/utils/date.ts` — 100%
- `src/store/modules/booking.js` mutations + getters — 100%

## Firestore Collections

| Collection | Description |
|------------|-------------|
| `reservationList` | Hotel room bookings |
| `eventsRequestList` | Event / meeting inquiries |
| `weddingRequestList` | Wedding inquiries |

All collections use public read/write rules (no Auth). Tighten rules before production use.

## Contribute

Contributions and feedback are always welcome!

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
