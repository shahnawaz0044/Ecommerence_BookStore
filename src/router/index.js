// Composables
import { createRouter, createWebHistory } from 'vue-router'
import loginformview from '../views/loginformview'
import SignUpForm from '../views/SignUpForm'
import AddCard from '../views/AddCard'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path:'/login',
        name: 'Login',
        component:loginformview
      },

      {
        path:'/signup',
        name: 'SignUp',
        component:SignUpForm
      }
    ],
  },
  {
    path:'/AddCard',
    name: 'AddCard',
    component:AddCard
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
