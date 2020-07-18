const information = [
  {
    path: '/information',
    name: 'Information',
    component: () => import('@/views/Information/Information.vue'),
    children: [
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Information/section/Contact/Contact.vue')
      },
      {
        path: 'careers',
        name: 'Careers',
        component: () => import('@/views/Information/section/Careers/Careers.vue')
      },
      {
        path: 'privacy-policy',
        name: 'Privacy Policy',
        component: () => import('@/views/Information/section/Terms/Terms.vue')
      },
      {
        path: 'sitemap',
        name: 'Sitemap',
        component: () => import('@/views/Information/section/Sitemap/Sitemap.vue')
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: () => import('@/views/Information/section/FAQ/FAQ.vue')
      }
    ]
  }
]

export default information
