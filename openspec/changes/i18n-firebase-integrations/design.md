## Context

The vue-hotel project is a Vue 3.4 SPA (webpack / @vue/cli-service) with Vuex 4 and Firebase 11 (Firestore modular API). There is no existing i18n layer and no server-side logic — the project is a static front-end deployed to GitHub Pages. Firebase is used for Firestore reads/writes; the project is on the public/free plan, which means Cloud Functions require the Blaze (pay-as-you-go) plan. All existing data files and components are in English.

## Goals / Non-Goals

**Goals:**
- Add `vue-i18n` v9 with `en` and `zh-TW` locales; expose a toggle in `AppHeader`
- Persist newsletter subscriptions, contact enquiries, and wedding requests to dedicated Firestore collections
- Add a required Booking Number field to the Contact Us form
- Generate a human-readable order number (`WED-YYYYMMDD-XXXX`) for wedding requests
- Send transactional email confirmations to guests after each submission

**Non-Goals:**
- Full server-side rendering or SSR-based i18n routing (`/en/`, `/zh/` URL prefixes)
- Admin dashboard or back-office UI for managing enquiries
- Converting all existing Vuex store modules to TypeScript (tracked in Phase 3)
- Real-time two-way email threading

## Decisions

### D1 — i18n: vue-i18n v9 (Composition API mode, legacy: false)

**Choice**: `vue-i18n@^9` with `createI18n({ legacy: false })` + `useI18n()` composable inside Vue 3 components.

**Rationale**: The project already runs Vue 3. The Composition API mode aligns with Vue 3 best practice, avoids global `$t` prototype pollution, and tree-shakes unused locale messages. `legacy: true` would keep the Vue 2 `$t` global but couples tightly to Options API.

**Locale files**: `src/i18n/locales/en.ts` and `src/i18n/locales/zh-TW.ts` as plain TS objects (typed with an `I18nSchema` interface). Index file: `src/i18n/index.ts` exports the configured instance.

**Language persistence**: `localStorage` key `vue-hotel-lang` so the choice survives page refresh.

**Toggle placement**: A flag/globe icon button in `AppHeader.vue` switches between `en` and `zh-TW`.

---

### D2 — Email: EmailJS (client-side) over Firebase Cloud Functions

**Choice**: Use [EmailJS](https://www.emailjs.com/) free tier (200 emails/month) via `@emailjs/browser` package.

**Rationale**: Firebase Cloud Functions require the Blaze plan and backend deployment complexity. EmailJS runs entirely in the browser, is free for moderate volume, and integrates with common SMTP providers (Gmail, SendGrid). For a boutique hotel this volume is sufficient. Cloud Functions can be adopted later if volume grows.

**Trigger**: After a successful Firestore `addDoc` call, the front-end calls `emailjs.send(serviceId, templateId, templateParams)`.

**Template params** vary per form type:
| Form | Params |
|------|--------|
| Room booking | `guest_name`, `email`, `room_type`, `check_in`, `check_out`, `order_id` |
| Contact | `guest_name`, `email`, `booking_number`, `subject`, `message`, `contact_ref` |
| Wedding request | `guest_name`, `email`, `event_date`, `order_id`, `package` |
| Newsletter | `email` (welcome only) |

EmailJS credentials (`SERVICE_ID`, `PUBLIC_KEY`, template IDs) are stored in `.env` as `VUE_APP_EMAILJS_*` variables.

---

### D3 — Order / Reference ID generation

**Choice**: Use `nanoid(8)` (already in project) prefixed with a date segment.

**Format**:
- Wedding: `WED-YYYYMMDD-{nanoid(6).toUpperCase()}`
- Contact reference: `CNT-YYYYMMDD-{nanoid(6).toUpperCase()}`

Generation happens in the front-end before the Firestore `addDoc` call so the ID is stored in the document and included in the confirmation email.

---

### D4 — Firestore collections schema

```
newsletters/{docId}
  email: string
  subscribedAt: Timestamp

contacts/{docId}
  refId: string          // CNT-YYYYMMDD-XXXXXX
  bookingNumber: string  // required, user-provided
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: Timestamp

wedding_requests/{docId}
  orderId: string        // WED-YYYYMMDD-XXXXXX
  firstName: string
  lastName: string
  email: string
  phone: string
  eventDate: string
  guestCount: number
  package: string
  notes: string
  createdAt: Timestamp
```

---

### D5 — i18n scope: key components only (incremental)

Full i18n of every string in one pass is prohibitively large. **Priority order**:
1. Navigation, header, footer
2. Contact Us form labels & validation messages
3. Wedding Request form
4. Newsletter section
5. Home page hero & key marketing text
6. Room cards, FAQ — deferred

Untranslated strings fall back to English automatically via vue-i18n's `fallbackLocale: 'en'`.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| EmailJS free tier limit (200/month) exceeded | Upgrade to paid tier or migrate to Firebase Cloud Functions + SendGrid later |
| Firestore public write rules allow spam | Add basic honeypot field to forms; rate-limit by IP via Cloud Functions later |
| i18n translations are incomplete on launch | `fallbackLocale: 'en'` ensures no missing-key errors; flag untranslated keys with a CI lint step |
| `nanoid` collision probability | At 8 chars from 64-char alphabet, probability is negligible for boutique hotel volume |
| Wedding order ID not guaranteed unique in Firestore | Add a Firestore transaction check or use `setDoc` with the generated ID as document key |

## Migration Plan

1. Install deps: `npm install vue-i18n @emailjs/browser`
2. Create i18n module and locale files; register in `main.js`
3. Add language toggle to `AppHeader.vue`
4. Wire `firebaseApi.js` helpers for each new collection
5. Update Contact Us form (add Booking Number field + Firestore write + email)
6. Update Wedding Request form (generate order ID + Firestore write + email)
7. Update Newsletter form (Firestore write + welcome email)
8. Add email confirmation to existing room booking flow
9. Translate priority strings (nav, forms)
10. Configure `.env` with EmailJS credentials

**Rollback**: All changes are additive (new fields, new collections). Rolling back means removing the new fields and reverting component changes — no destructive DB migrations.

## Open Questions

- Q1: Does the hotel have an existing email account/SMTP to connect to EmailJS, or should a new Gmail service account be created?
- Q2: Should the wedding order ID be shown on-screen to the user after submission (confirmation page)?
- Q3: Is there a preferred language for the default locale on first visit (browser language detection vs always `zh-TW`)?
