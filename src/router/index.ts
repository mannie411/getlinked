import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import ContactView from '@/views/Contact/ContactView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: ContactView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash }
    }
  }
})

export default router
