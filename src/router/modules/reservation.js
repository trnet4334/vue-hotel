const reservation = [
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('@/views/Reservation/Reservation.vue'),
    beforeEach: (to, from, next) => {},
    children: [
      {
        path: 's1',
        name: 'RoomSelect',
        component: () => import('@/views/Reservation/components/RoomSelect/RoomSelect'),
        meta: {
          requireSearch: true
        }
      },
      {
        path: 's2',
        name: 'AddOns',
        component: () => import('@/views/Reservation/components/AddOns/AddOns'),
        meta: {
          requireSearch: true,
          requireSelect: true
        }
      },
      {
        path: 's3',
        name: 'GuestDetails',
        component: () => import('@/views/Reservation/components/GuestDetails/GuestDetails'),
        meta: {
          requireSearch: true,
          requireSelect: true
        }
      },
      {
        path: 's4',
        name: 'Confirmation',
        component: () => import('@/views/Reservation/components/Confirmation/Confirmation'),
        meta: {
          requireSearch: true,
          requireSelect: true
        }
      }
    ]
  }
]

export default reservation
