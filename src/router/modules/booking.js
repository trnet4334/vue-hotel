const booking = [
  {
    path: '/manage-booking',
    name: 'Booking',
    component: () => import('@/views/Booking/Booking/Booking.vue')
  },
  {
    path: '/manage-booking/activity/:tempId',
    name: 'Activity',
    component: () => import('@/views/Booking/ReservationDetail/ReservationDetail.vue')
  }
]

export default booking
