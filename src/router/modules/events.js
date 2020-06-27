const events = [
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/Events/Events.vue'),
    children: [
      {
        path: 'meeting',
        name: 'Meeting inquiry',
        component: () => import('@/views/Events/EventType/Meeting.vue')
      },
      {
        path: 'wedding',
        name: 'Wedding inquiry',
        component: () => import('@/views/Events/EventType/Wedding.vue')
      }
    ]
  }
]

export default events
