## ADDED Requirements

### Requirement: Booking Number field on Contact Us form
The Contact Us form SHALL include a Booking Number field that is **required**. The field SHALL accept free-text input (no fixed format enforced) so guests can enter room reservation IDs or other reference numbers.

#### Scenario: Booking Number required
- **WHEN** a user submits the Contact Us form without entering a Booking Number
- **THEN** the system SHALL display a validation error "Booking Number is required"
- **THEN** the form SHALL NOT be submitted

#### Scenario: Booking Number accepted with valid input
- **WHEN** a user enters any non-empty string in the Booking Number field
- **THEN** the field SHALL be considered valid

### Requirement: Contact enquiry persisted to Firestore
When a user submits the Contact Us form with all required fields valid, the system SHALL generate a contact reference ID and write the enquiry to the Firestore `contacts` collection.

#### Scenario: Successful contact submission
- **WHEN** a user fills in all required fields (including Booking Number) and submits the form
- **THEN** the system SHALL generate a reference ID in the format `CNT-YYYYMMDD-XXXXXX` (6 random alphanumeric chars)
- **THEN** the system SHALL write the document `{ refId, bookingNumber, firstName, lastName, email, phone, subject, message, createdAt }` to the `contacts` collection
- **THEN** the system SHALL display the generated reference ID in a success message so the guest can track their enquiry

#### Scenario: Firestore write failure
- **WHEN** the Firestore write fails
- **THEN** the system SHALL display a user-friendly error message
- **THEN** no confirmation email SHALL be sent

#### Scenario: Reference ID uniqueness
- **WHEN** a contact document is created
- **THEN** the reference ID SHALL be unique across all documents in the `contacts` collection (verified by using it as the Firestore document ID)
