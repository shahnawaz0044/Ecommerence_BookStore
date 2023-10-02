// Composables
import { createRouter, createWebHistory } from 'vue-router'
import loginformview from '../views/loginformview'
import SignUpForm from '../views/SignUpForm'
import AddCard from '../views/AddCard'
import ShowAllBooks from '../views/ShowAllBooks'
import DashBoard from '../components/DashBoard'
import CartBox from '../components/CartBox'


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
  },

  {
    path:'/products',
    name: 'products',
    component:ShowAllBooks
  },

  {
    path:'/dashboard',
    name: 'dashboard',
    component:DashBoard
  },

  
  {
    path:'/cartbox',
    name: 'cartbox',
    component:CartBox
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
