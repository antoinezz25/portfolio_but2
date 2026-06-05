import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tech/trace1',
      name: 'tech-trace1',
      component: () => import('../views/TechView.vue')
    },
    {
      path: '/proj/trace3',
      name: 'proj-trace3',
      component: () => import('../views/ProjView.vue')
    },
    {
      path: '/integration/trace5',
      name: 'integration-trace5',
      component: () => import('../views/IntegrationView.vue')
    }
  ]
})

export default router