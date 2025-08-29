import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/martina', name: 'martina', component: () => import('../views/Martina.vue') },
    { path: '/helena', name: 'helena', component: () => import('../views/Helena.vue') },
    { path: '/su', name: 'su', component: () => import('../views/Su.vue') },
    { path: '/kurt', name: 'kurt', component: () => import('../views/Kurt.vue') },
  ],
})

export default router
