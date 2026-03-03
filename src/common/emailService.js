import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.VUE_APP_EMAILJS_SERVICE_ID
const PUBLIC_KEY = process.env.VUE_APP_EMAILJS_PUBLIC_KEY

if (!SERVICE_ID || !PUBLIC_KEY) {
  console.warn('[emailService] EmailJS env vars missing — emails will not be sent.')
}

/**
 * Send a transactional confirmation email via EmailJS.
 * Errors are caught and logged; they never propagate to the caller.
 *
 * @param {string} templateId  - EmailJS template ID
 * @param {Record<string, string>} params - Template variables
 */
async function sendConfirmationEmail (templateId, params) {
  if (!SERVICE_ID || !PUBLIC_KEY) return

  try {
    await emailjs.send(SERVICE_ID, templateId, params, { publicKey: PUBLIC_KEY })
  } catch (err) {
    console.error('[emailService] Failed to send email:', err)
  }
}

export { sendConfirmationEmail }
