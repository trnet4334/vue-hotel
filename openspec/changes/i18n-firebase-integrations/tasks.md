## 1. Dependencies & Configuration

- [x] 1.1 Install `vue-i18n@^9` and `@emailjs/browser` via npm
- [x] 1.2 Add EmailJS env vars to `.env.example`: `VUE_APP_EMAILJS_SERVICE_ID`, `VUE_APP_EMAILJS_PUBLIC_KEY`, `VUE_APP_EMAILJS_TEMPLATE_BOOKING`, `VUE_APP_EMAILJS_TEMPLATE_CONTACT`, `VUE_APP_EMAILJS_TEMPLATE_WEDDING`, `VUE_APP_EMAILJS_TEMPLATE_NEWSLETTER`
- [x] 1.3 Register i18n plugin in `src/main.js` (`app.use(i18n)`)

## 2. i18n Module Setup

- [x] 2.1 Create `src/i18n/locales/en.ts` with `I18nSchema` interface and all English strings (nav, forms, validation messages, footer)
- [x] 2.2 Create `src/i18n/locales/zh-TW.ts` implementing `I18nSchema` with Traditional Chinese translations
- [x] 2.3 Create `src/i18n/index.ts` — `createI18n({ legacy: false, locale: stored || detected, fallbackLocale: 'en', messages: { en, 'zh-TW' } })`
- [x] 2.4 Add language toggle button to Navbar.vue (text label); on click call `locale.value = toggled; localStorage.setItem('vue-hotel-lang', toggled)`
- [ ] 2.5 Replace hard-coded strings in AppHeader and AppFooter with `t('key')` composable calls
- [x] 2.6 Replace hard-coded strings in Contact Us view with `t('key')` calls (labels, placeholders, validation messages)
- [x] 2.7 Replace hard-coded strings in Wedding Request view with `t('key')` calls
- [x] 2.8 Replace hard-coded strings in Newsletter section with `t('key')` calls
- [ ] 2.9 Replace hard-coded strings in home page hero / key marketing text with `t('key')` calls

## 3. Firebase API Helpers

- [x] 3.1 Add `subscribeNewsletter(email)` helper to `src/common/firebaseApi.js` — query for duplicate email first, then `addDoc(collection('newsletters'), { email, subscribedAt: serverTimestamp() })`
- [x] 3.2 Add `submitContact(payload)` helper — generate `refId = 'CNT-' + date + '-' + nanoid(6).toUpperCase()`, `setDoc(doc('contacts', refId), { ...payload, refId, createdAt: serverTimestamp() })`
- [x] 3.3 Add `submitWeddingRequest(payload)` helper — generate `orderId = 'WED-' + date + '-' + nanoid(6).toUpperCase()`, `setDoc(doc('wedding_requests', orderId), { ...payload, orderId, createdAt: serverTimestamp() })`; retry once on collision
- [x] 3.4 Add `sendConfirmationEmail(templateId, params)` helper in `src/common/emailService.js` — wraps `emailjs.send()`; logs warning if env vars are missing; catches errors without rethrowing

## 4. Contact Us Form

- [x] 4.1 Add **Booking Number** field to the Contact Us form component (required, free-text)
- [x] 4.2 Add vee-validate rule for the Booking Number field (required)
- [x] 4.3 Wire form submit to `submitContact()` Firebase helper
- [x] 4.4 On success: show reference ID in success alert (e.g., "Your enquiry has been received. Reference: CNT-...")
- [x] 4.5 On Firebase error: show user-friendly error message
- [x] 4.6 After successful Firestore write, call `sendConfirmationEmail(TEMPLATE_CONTACT, { guest_name, email, booking_number, contact_ref })`

## 5. Wedding Request Form

- [x] 5.1 Wire form submit to `submitWeddingRequest()` Firebase helper
- [x] 5.2 On success: prominently display order number in confirmation message
- [x] 5.3 On Firebase error: show user-friendly error message; do not display order number
- [x] 5.4 After successful Firestore write, call `sendConfirmationEmail(TEMPLATE_WEDDING, { guest_name, email, event_date, order_id, package })`

## 6. Newsletter Form

- [x] 6.1 Wire newsletter form submit to `subscribeNewsletter()` Firebase helper
- [x] 6.2 On success: show success message
- [x] 6.3 On duplicate email: show "already subscribed" message
- [x] 6.4 After successful Firestore write, call `sendConfirmationEmail(TEMPLATE_NEWSLETTER, { email })`

## 7. Room Booking Email Confirmation

- [x] 7.1 Locate existing room reservation submit logic in the Vuex store or component
- [x] 7.2 After successful Firestore write, call `sendConfirmationEmail(TEMPLATE_BOOKING, { guest_name, email, room_type, check_in, check_out, order_id })`
- [x] 7.3 Handle email failure gracefully — booking is still successful; show note if email could not be sent

## 8. EmailJS Setup

- [ ] 8.1 Create EmailJS account and connect an email service (Gmail or SMTP)
- [ ] 8.2 Create email template for room booking (`TEMPLATE_BOOKING`)
- [ ] 8.3 Create email template for contact enquiry (`TEMPLATE_CONTACT`)
- [ ] 8.4 Create email template for wedding request (`TEMPLATE_WEDDING`)
- [ ] 8.5 Create email template for newsletter welcome (`TEMPLATE_NEWSLETTER`)
- [ ] 8.6 Add real credentials to local `.env` (never commit to git)

## 9. Firestore Security Rules

- [x] 9.1 Update Firestore rules to allow create-only (no read/update/delete) on `newsletters`, `contacts`, `wedding_requests` collections from the browser
- [x] 9.2 Add a basic honeypot field check in form components to reduce spam submissions

## 10. Verification

- [ ] 10.1 Manually test language toggle: switch to zh-TW, verify nav/forms/footer translate; refresh and confirm persistence
- [ ] 10.2 Manually test newsletter: submit, check Firestore console, check welcome email
- [ ] 10.3 Manually test contact: submit without Booking Number (expect error), submit with all fields, verify Firestore doc and email
- [ ] 10.4 Manually test wedding request: submit, verify order number displayed and in Firestore, verify email
- [ ] 10.5 Manually test room booking: complete a booking, verify email confirmation received
- [ ] 10.6 Test EmailJS failure path: temporarily remove env vars, submit a form, confirm graceful degradation
