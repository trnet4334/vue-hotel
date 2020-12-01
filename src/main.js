import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import _ from 'lodash'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
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

// Use element-ui component
Vue.use(ElementUI, { locale })
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'v'
})

Vue.config.productionTip = false
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
