import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Manager,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/manager/Home.vue'),
      },
      {
        path:"order",
        component: () => import('../pages/manager/Order.vue')        
      },
      {
        path:"user",
        component: () => import('../pages/manager/User.vue')        
      },
      {
        path:"product",
        component: () => import('../pages/manager/Product.vue')        
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/submitorder',
    name: 'submitorder',
    component: () => import('../pages/SubmitOrder.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
