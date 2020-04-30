
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/loginpage.vue') },
      { path: 'registerfb', name: 'registerfb', component: () => import('pages/registerfb.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'inputJadwal', name: 'inputJadwal', component: () => import('pages/inputJadwal.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
