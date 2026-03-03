## ADDED Requirements

### Requirement: Email confirmation sent after room booking
When a room reservation is successfully saved to Firestore, the system SHALL send a transactional confirmation email to the guest's email address via EmailJS.

#### Scenario: Confirmation email after room reservation
- **WHEN** a room reservation is successfully written to Firestore
- **THEN** the system SHALL call EmailJS with the service template for room bookings
- **THEN** the email SHALL include: guest name, email, room type, check-in date, check-out date, number of nights, total price, and order ID
- **THEN** the email SHALL be delivered to the address provided in the reservation form

#### Scenario: EmailJS failure does not block booking
- **WHEN** the EmailJS send call fails after a successful Firestore write
- **THEN** the booking SHALL still be considered successful
- **THEN** the system SHALL log the email error to the browser console
- **THEN** the system SHALL display a note to the guest that the confirmation email could not be sent

### Requirement: Email confirmation sent after contact enquiry
When a contact enquiry is successfully saved to Firestore, the system SHALL send a confirmation email to the guest.

#### Scenario: Confirmation email after contact submission
- **WHEN** a contact enquiry is successfully written to Firestore
- **THEN** the system SHALL send an email including: guest name, contact reference ID, booking number, and a message that the team will respond within 2 business days

### Requirement: Email confirmation sent after wedding request
When a wedding request is successfully saved to Firestore, the system SHALL send a confirmation email to the guest.

#### Scenario: Confirmation email after wedding request
- **WHEN** a wedding request is successfully written to Firestore
- **THEN** the system SHALL send an email including: guest name, wedding order number, event date, and package selected
- **THEN** the email SHALL state that the events team will contact the guest within 3 business days

### Requirement: Welcome email sent after newsletter subscription
When a newsletter subscription is successfully saved to Firestore, the system SHALL send a welcome email to the subscriber.

#### Scenario: Welcome email after newsletter signup
- **WHEN** a newsletter subscription is successfully written to Firestore
- **THEN** the system SHALL send a welcome email to the provided address

### Requirement: EmailJS configuration via environment variables
The system SHALL read EmailJS credentials exclusively from environment variables so that no secrets are hardcoded in source code.

#### Scenario: Missing EmailJS env vars
- **WHEN** any of `VUE_APP_EMAILJS_SERVICE_ID`, `VUE_APP_EMAILJS_PUBLIC_KEY` are undefined
- **THEN** the system SHALL log a warning at startup and SHALL skip email sending gracefully (not throw an unhandled error)
