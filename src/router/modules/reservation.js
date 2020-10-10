const reservation = [
  {
    path: '/reservation/:tempId',
    name: 'Reservation',
    component: () => import('@/views/Reservation/Reservation.vue')
  },
  {
    path: '/reservation/completion/:tempId',
    name: 'Completion',
    component: () => import('@/views/Reservation/components/Completion/Completion.vue')
  }
]

export default reservation
