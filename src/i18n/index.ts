import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zhTW from './locales/zh-TW'

const STORAGE_KEY = 'vue-hotel-lang'
type SupportedLocale = 'en' | 'zh-TW'

function detectLocale (): SupportedLocale {
  const stored = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null
  if (stored === 'en' || stored === 'zh-TW') return stored
  const browser = navigator.language
  if (browser === 'zh-TW' || browser === 'zh-Hant' || browser === 'zh') return 'zh-TW'
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-TW': zhTW
  }
})

export { STORAGE_KEY }
export type { SupportedLocale }
export default i18n
