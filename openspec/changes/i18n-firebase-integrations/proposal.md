## Why

The vue-hotel site currently serves only English-speaking users and lacks Firebase integration for key user touchpoints (newsletter, contact, wedding enquiries), making it impossible to centralise guest communications, track enquiries end-to-end, or send automated email confirmations. Adding Traditional Chinese (zh-TW) support opens the site to a wider audience, while Firebase integration and email confirmation close the loop on every guest interaction.

## What Changes

- Add `vue-i18n` v9 with Traditional Chinese (zh-TW) and English (en) locales; language toggle placed in the site header
- Integrate newsletter subscription form with a Firestore `newsletters` collection
- Integrate Contact Us form with a Firestore `contacts` collection; add a **required** Booking Number field to the form
- Integrate Wedding Request/Proposal form with a Firestore `wedding_requests` collection; generate a unique order number (e.g. `WED-YYYYMMDD-XXXX`) on submission
- Send automated email confirmations for all booking types (room reservation, contact, wedding request) via a Firebase Cloud Function triggered on Firestore document creation

## Capabilities

### New Capabilities

- `i18n-language-switch`: Site-wide Traditional Chinese / English language toggle with vue-i18n v9; toggle button in the AppHeader component
- `newsletter-firebase`: Newsletter subscription form persisted to Firestore `newsletters` collection with duplicate-email guard
- `contact-firebase`: Contact Us form persisted to Firestore `contacts` collection; includes required Booking Number field; auto-generates a contact reference ID
- `wedding-firebase`: Wedding Request/Proposal form persisted to Firestore `wedding_requests` collection; generates a unique order number (`WED-YYYYMMDD-XXXX`)
- `email-confirmation`: Firebase Cloud Function (or EmailJS fallback) that sends transactional confirmation emails to guests on creation of any booking, contact, or wedding-request Firestore document

### Modified Capabilities

<!-- No existing specs found — no delta specs required -->

## Impact

- **Dependencies added**: `vue-i18n@^9`, `nanoid` (already present for order ID generation)
- **New files**: `src/i18n/index.ts`, `src/i18n/locales/en.ts`, `src/i18n/locales/zh-TW.ts`, `functions/` (Cloud Functions for email)
- **Modified files**: `src/main.js` (register i18n plugin), `src/components/AppHeader.vue` (language toggle), `src/views/Contact.vue`, `src/views/Wedding.vue`, `src/views/Newsletter.vue` (or relevant form components), `src/common/firebaseApi.js` (new write helpers)
- **Firebase**: New Firestore collections (`newsletters`, `contacts`, `wedding_requests`); new Cloud Function trigger; requires Firebase project to have Cloud Functions enabled (Blaze plan) or an alternative transactional email service (EmailJS / SendGrid)
- **No breaking changes** to existing room-booking or reservation flows
