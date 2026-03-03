## ADDED Requirements

### Requirement: Language toggle in header
The site header SHALL display a language toggle control that allows users to switch between English (`en`) and Traditional Chinese (`zh-TW`). The toggle SHALL be visible on all pages.

#### Scenario: Default language on first visit
- **WHEN** a user visits the site for the first time (no stored preference)
- **THEN** the site SHALL display in the browser's detected language if it is `zh-TW`, otherwise default to `en`

#### Scenario: User switches language
- **WHEN** a user clicks the language toggle in the header
- **THEN** the site SHALL immediately re-render all translated strings in the new locale without a page reload

#### Scenario: Language preference persisted
- **WHEN** a user selects a language
- **THEN** the chosen language SHALL be saved to `localStorage` under the key `vue-hotel-lang`
- **THEN** on next visit the site SHALL load in the previously chosen language

### Requirement: Translated UI strings
The application SHALL provide translations for all user-visible strings in priority components. Untranslated strings SHALL fall back to English without throwing errors.

#### Scenario: Navigation items translated
- **WHEN** the locale is `zh-TW`
- **THEN** all navigation links and header/footer text SHALL display in Traditional Chinese

#### Scenario: Form labels translated
- **WHEN** the locale is `zh-TW`
- **THEN** all form labels, placeholders, and validation messages in Contact Us and Wedding Request forms SHALL display in Traditional Chinese

#### Scenario: Missing translation fallback
- **WHEN** a translation key exists in `en` but not in `zh-TW`
- **THEN** the system SHALL display the English string and SHALL NOT throw a console error

### Requirement: Locale files structure
The i18n locale files SHALL be TypeScript modules (`src/i18n/locales/en.ts`, `src/i18n/locales/zh-TW.ts`) sharing a common `I18nSchema` interface so missing keys are caught at compile time.

#### Scenario: Missing key caught at compile time
- **WHEN** a key is present in `en.ts` but absent in `zh-TW.ts`
- **THEN** TypeScript SHALL emit a compile error (strict type checking via shared interface)
