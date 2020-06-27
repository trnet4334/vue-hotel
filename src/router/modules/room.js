const room = [
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import('@/views/Room/Room.vue')
  },
  {
    path: '/rooms/classic-guestroom',
    name: 'Classic Guestroom',
    component: () => import('@/views/Room/RoomType/ClassicGuestroom.vue')
  },
  {
    path: '/rooms/deluxe-guestroom',
    name: 'Deluxe Guestroom',
    component: () => import('@/views/Room/RoomType/DeluxeGuestroom.vue')
  },
  {
    path: '/rooms/the-spa-suite',
    name: 'The Spa Suite',
    component: () => import('@/views/Room/RoomType/SpaSuite.vue')
  },
  {
    path: '/rooms/luxury-suite',
    name: 'Luxury Suite',
    component: () => import('@/views/Room/RoomType/LuxurySuite.vue')
  },
  {
    path: '/rooms/accessible-accommodation',
    name: 'Accessible Accommodation',
    component: () => import('@/views/Room/Accessible.vue')
  },
  {
    path: '/pet-friendly',
    name: 'Pet Friendly',
    component: () => import('@/views/Room/PetFriendly.vue')
  },
  {
    path: '/pet-friendly/pet-firendly-form',
    name: 'Pet Friendly Form',
    component: () => import('@/views/Room/PetFriendlyForm.vue')
  }
]

export default room
