import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/atrativos',
      name: 'atrativos',
      props:true,
      component: () => import('../views/AtrativosView.vue')
    },
    {
      path: '/destinos',
      name: 'destino',
      props:true,
      component: () => import('../views/DestinoView.vue')
    }
  ]
})

export default router
