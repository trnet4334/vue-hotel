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
    path: '/events/inquiry',
    name: 'Events Inquiry',
    component: () => import('@/views/Events/Inquiry/EventsInquiry.vue')
  },
  {
    path: '/wedding/inquiry',
    name: 'Wedding Inquiry',
    component: () => import('@/views/Events/Inquiry/WeddingInquiry.vue')
  }
]

export default events
