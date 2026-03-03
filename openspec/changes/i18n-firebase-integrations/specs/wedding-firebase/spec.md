## ADDED Requirements

### Requirement: Wedding request persisted to Firestore
When a user submits the Wedding Request/Proposal form, the system SHALL generate a unique order number and write the request to the Firestore `wedding_requests` collection.

#### Scenario: Successful wedding request submission
- **WHEN** a user fills in all required wedding request fields and submits the form
- **THEN** the system SHALL generate an order number in the format `WED-YYYYMMDD-XXXXXX` (6 random uppercase alphanumeric chars via nanoid)
- **THEN** the system SHALL write `{ orderId, firstName, lastName, email, phone, eventDate, guestCount, package, notes, createdAt }` to the `wedding_requests` collection using `orderId` as the Firestore document key
- **THEN** the system SHALL display the generated order number prominently in a confirmation message

#### Scenario: Order ID uniqueness
- **WHEN** a wedding request document is created
- **THEN** the system SHALL use the generated `orderId` as the Firestore document key to guarantee uniqueness (Firestore will reject a duplicate key)
- **WHEN** a key collision occurs (extremely unlikely)
- **THEN** the system SHALL regenerate the ID and retry the write once

#### Scenario: Required fields enforced
- **WHEN** a user submits the form with any required field empty (firstName, lastName, email, eventDate, guestCount)
- **THEN** the system SHALL display per-field validation errors
- **THEN** the form SHALL NOT be submitted

#### Scenario: Firestore write failure
- **WHEN** the Firestore write fails
- **THEN** the system SHALL display a user-friendly error message
- **THEN** the order number SHALL NOT be shown

### Requirement: Wedding order number displayed after submission
After a successful submission, the system SHALL display the order number so the guest can reference it in future communications.

#### Scenario: Confirmation screen shows order number
- **WHEN** the wedding request form is submitted successfully
- **THEN** the page SHALL display a confirmation message including the order number (e.g., "Your request has been received. Reference: WED-20260303-ABC123")
- **THEN** the order number SHALL also be included in the confirmation email sent to the guest
