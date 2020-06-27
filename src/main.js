import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './styles.scss'
import VCalendar from 'v-calendar'

// Use element-ui component
Vue.use(ElementUI, { locale })
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
