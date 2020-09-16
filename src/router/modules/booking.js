const booking = [
  {
    path: '/manage-booking',
    name: 'booking',
    component: () => import('@/views/Booking/Booking/Booking.vue')
  },
  {
    path: '/manage-booking/activity/',
    name: 'Activity',
    component: () => import('@/views/Booking/ReservationDetail/ReservationDetail.vue')
  }
]

export default booking
