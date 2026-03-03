import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import _ from 'lodash'
import ElementPlus from 'element-plus'
import { ElMessageBox, ElMessage, ElNotification } from 'element-plus'
import en from 'element-plus/es/locale/lang/en'
import 'element-plus/dist/index.css'
import './styles.scss'
import 'normalize.css/normalize.css'
import { setupCalendar } from 'v-calendar'
import 'v-calendar/style.css'
import faq from '@/assets/data/faq'
import rooms from '@/assets/data/rooms'
import offers from '@/assets/data/offers'
import roomType from '@/assets/data/checkout/roomType'
import addOns from '@/assets/data/checkout/addOns'
import countries from '@/assets/data/checkout/countries'
import dayjs from 'dayjs'
import preventMultipleClick from './plugins/directives'
import './plugins/validation'
import 'default-passive-events'

const app = createApp(App)

// Element Plus (includes all components + locale)
app.use(ElementPlus, { locale: en })

// v-calendar components (registers v-calendar and v-date-picker globally)
app.use(setupCalendar, {})

// i18n
app.use(i18n)

// Vue Router & Vuex
app.use(router)
app.use(store)

// Global directive
app.directive('preventMultipleClick', preventMultipleClick)

// Global error handler for Vue component errors
app.config.errorHandler = (err, _vm, info) => {
  console.error(`[Vue Error] ${info}:`, err)
}

// Global handler for unhandled Promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Rejection]:', event.reason)
  event.preventDefault()
})

// Global properties (replaces Vue.prototype)
app.config.globalProperties.$_ = _
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$msgbox = ElMessageBox
app.config.globalProperties.$alert = ElMessageBox.alert
app.config.globalProperties.$confirm = ElMessageBox.confirm
app.config.globalProperties.$prompt = ElMessageBox.prompt
app.config.globalProperties.$notify = ElNotification
app.config.globalProperties.$message = ElMessage

// Preloaded data
app.config.globalProperties.$faq = faq
app.config.globalProperties.$roomCardsInfo = rooms
app.config.globalProperties.$roomsInfo = roomType
app.config.globalProperties.$offersInfo = offers
app.config.globalProperties.$checkoutAddOns = addOns
app.config.globalProperties.$countriesList = countries

app.mount('#app')
