const reservation = [
  {
    path: '/reservation/:tempId',
    name: 'Reservation',
    component: () => import('@/views/Reservation/Reservation.vue'),
    beforeEach: (to, from, next) => {},
    children: [
      {
        path: 'addons',
        name: 'Addons',
        component: () => import('@/views/Reservation/components/AddOns/AddOns.vue')
      }
    ]
  },
  {
    path: '/reservation/completion/:tempId',
    name: 'Completion',
    component: () => import('@/views/Reservation/components/Completion/Completion.vue')
  }
]

export default reservation
