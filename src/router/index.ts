import { createRouter, createWebHistory } from 'vue-router'

// Make sure the file exists at this path, or update the path if necessary

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home', // <-- here
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: Home,
  },
  {
    path: '/account',
    name: 'Account',
    component: Home,
  },
  // Optional catch-all for 404
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
