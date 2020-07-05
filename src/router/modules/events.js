const events = [
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/Events/Events.vue')
  },
  {
    path: '/wedding',
    name: 'Wedding',
    component: () => import('@/views/Events/Wedding.vue')
  },
  {
    path: '/inquiry',
    name: 'Events Inquiry',
    component: () => import('@/views/Events/Inquiry/Inquiry.vue')
  }
]

export default events
