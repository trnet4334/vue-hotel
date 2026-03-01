import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import _ from 'lodash'
// Element UI — on-demand import (JS only; CSS is loaded via styles.scss)
import {
  Dialog,
  Divider,
  InputNumber,
  Popover,
  Step,
  Steps,
  MessageBox,
  Message,
  Notification
} from 'element-ui'
import elLocale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'
import './styles.scss'
import 'normalize.css/normalize.css'
import VCalendar from 'v-calendar'
import faq from './data/faq'
import rooms from './data/rooms'
import offers from './data/offers'
import roomType from './data/roomType'
import addOns from './data/checkout/addOns'
import countries from './data/checkout/countries'
import dayjs from 'dayjs'
// eslint-disable-next-line no-unused-vars
import preventMultipleClick from './plugins/directives'
import 'default-passive-events'

// Element UI locale
elLocale.use(lang)

// Element UI components
;[Dialog, Divider, InputNumber, Popover, Step, Steps].forEach(c => Vue.use(c))

// Element UI JS services
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'v'
})

Vue.config.productionTip = false

// Global handler for Vue component errors (lifecycle, render, watchers)
Vue.config.errorHandler = (err, vm, info) => {
  console.error(`[Vue Error] ${info}:`, err)
}

// Global handler for unhandled Promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Rejection]:', event.reason)
  event.preventDefault()
})
// Define prototype for Lodash
Vue.prototype.$_ = _
// Define prototype for dayjs
Vue.prototype.$dayjs = dayjs

// Define prototype for preload data
Vue.prototype.$faq = faq
Vue.prototype.$roomCardsInfo = rooms
Vue.prototype.$roomsInfo = roomType
Vue.prototype.$offersInfo = offers
Vue.prototype.$checkoutAddOns = addOns
Vue.prototype.$countriesList = countries

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
