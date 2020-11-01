import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './modules/home'
import about from './modules/about'
import dining from './modules/dining'
import events from './modules/events'
import information from './modules/information'
import room from './modules/room'
import specials from './modules/specials'
import wellness from './modules/wellness'
import reservation from './modules/reservation'
import booking from './modules/booking'
import store from '../../src/store'

Vue.use(VueRouter)

const routes = [
  ...home,
  ...about,
  ...room,
  ...dining,
  ...events,
  ...wellness,
  ...information,
  ...specials,
  ...reservation,
  ...booking,
  {
    path: '/careers/jobs',
    name: 'Jobs',
    component: () => import('@/views/Information/section/Jobs/Jobs.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (from.name === 'Reservation') {
    if (to.name !== 'Completion' && to.name !== 'Reservation') {
      const answer = window.confirm('You might lose all the data you typed. Do you really want to leave this page?')
      if (answer) {
        store.dispatch('resetAllReservation').then(() => {
          window.sessionStorage.clear()
          next()
        })
      } else {
        next(false)
      }
    } else {
      next()
    }
  } else {
    next()
  }
  if (to.name === 'Completion' && from.name !== 'Reservation') {
    next('/home')
  }
  if (from.name === 'Activity' && to.name !== 'Activity') {
    store.dispatch('leaveSearchResult').then(() => {
      window.sessionStorage.clear()
      next()
    })
  } else {
    next()
  }
})

export default router
