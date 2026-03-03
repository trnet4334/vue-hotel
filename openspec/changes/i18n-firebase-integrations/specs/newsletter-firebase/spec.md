## ADDED Requirements

### Requirement: Newsletter subscription persisted to Firestore
When a user submits the newsletter subscription form, the system SHALL write a document to the Firestore `newsletters` collection containing the user's email and a server timestamp.

#### Scenario: Successful subscription
- **WHEN** a user enters a valid email and submits the newsletter form
- **THEN** the system SHALL write `{ email, subscribedAt: serverTimestamp() }` to the `newsletters` collection
- **THEN** the system SHALL display a success message to the user

#### Scenario: Duplicate email guard
- **WHEN** a user submits an email that already exists in the `newsletters` collection
- **THEN** the system SHALL NOT create a duplicate document
- **THEN** the system SHALL display a message indicating the email is already subscribed

#### Scenario: Invalid email rejected
- **WHEN** a user submits an invalid email address
- **THEN** the system SHALL display a validation error and SHALL NOT write to Firestore

#### Scenario: Firestore write failure
- **WHEN** the Firestore write fails (network error, permission denied)
- **THEN** the system SHALL display a user-friendly error message
- **THEN** the system SHALL NOT display a success message
