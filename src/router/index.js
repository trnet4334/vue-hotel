import Vue from 'vue'
import VueRouter from 'vue-router'
import { MessageBox } from 'element-ui'
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
import store from '../store'

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

router.beforeEach(async (to, from, next) => {
  // Guard 1: Block direct access to the Completion page
  if (to.name === 'Completion' && from.name !== 'Reservation') {
    return next('/home')
  }

  // Guard 2: Warn the user when navigating away from an in-progress reservation
  if (from.name === 'Reservation' && to.name !== 'Completion' && to.name !== 'Reservation') {
    try {
      await MessageBox.confirm(
        'You might lose all the data you typed.',
        'Leave page?',
        {
          confirmButtonText: 'Leave',
          cancelButtonText: 'Stay',
          type: 'warning'
        }
      )
      await store.dispatch('resetAllReservation')
      window.sessionStorage.clear()
      return next()
    } catch (e) {
      // User clicked "Stay" or dismissed the dialog
      return next(false)
    }
  }

  // Guard 3: Clear booking search state when leaving the Activity page
  if (from.name === 'Activity' && to.name !== 'Activity') {
    await store.dispatch('leaveSearchResult')
    window.sessionStorage.clear()
    return next()
  }

  next()
})

export default router
