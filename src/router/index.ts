import { createRouter, createWebHashHistory } from 'vue-router'

import Martina from "../views/Martina.vue";
import Helena from "../views/Helena.vue";
import Su from "../views/Su.vue";
import Kurt from "../views/Kurt.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/martina', name: 'martina', component: Martina },
    { path: '/helena', name: 'helena', component: Helena },
    { path: '/su', name: 'su', component: Su },
    { path: '/kurt', name: 'kurt', component: Kurt },
  ],
})

export default router
