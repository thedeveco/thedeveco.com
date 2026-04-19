import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/consultancy',
      name: 'consultancy',
      component: () => import('../views/ConsultancyView.vue'),
    },
    {
      path: '/ecosystem',
      name: 'ecosystem',
      component: () => import('../views/EcosystemView.vue'),
    },
    {
      path: '/devxrl',
      name: 'devxrl',
      component: () => import('../views/DevXRL.vue'),
    },
    {
      path: '/smrl',
      name: 'smrl',
      component: () => import('../views/SMRL.vue'),
    },
    {
      path: '/g2mrl',
      name: 'g2mrl',
      component: () => import('../views/G2MRL.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/heimdall',
      name: 'heimdall',
      component: () => import('../views/HeimdallView.vue'),
    },
  ],
})

export default router
