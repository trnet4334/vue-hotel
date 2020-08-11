const reservation = [
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('@/views/Reservation/Reservation.vue'),
    children: [
      {
        path: 's1',
        name: 'RoomSelect',
        component: () => import('@/views/Reservation/components/RoomSelect'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 's2',
        name: 'AddOns',
        component: () => import('@/views/Reservation/components/AddOns'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 's3',
        name: 'GuestDetails',
        component: () => import('@/views/Reservation/components/GuestDetails'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 's4',
        name: 'Confirmation',
        component: () => import('@/views/Reservation/components/Confirmation'),
        meta: {
          keepAlive: true
        }
      }
    ]
  }
]

export default reservation
