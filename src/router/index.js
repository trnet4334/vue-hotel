import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './modules/home'
import about from './modules/about'
import dinning from './modules/dinning'
import events from './modules/events'
import information from './modules/information'
import room from './modules/room'
import specials from './modules/specials'
import wellness from './modules/wellness'
import checkout from './modules/checkout'
import booking from './modules/booking'

Vue.use(VueRouter)

const routes = [
  ...home,
  ...about,
  ...room,
  ...dinning,
  ...events,
  ...wellness,
  ...information,
  ...specials,
  ...checkout,
  ...booking,
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('@/views/Information/section/Jobs.vue')
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
