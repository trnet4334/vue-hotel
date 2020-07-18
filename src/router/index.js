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
    path: '/jobs',
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

export default router
