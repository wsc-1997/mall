import Vue from 'vue'
import VueRouter from 'vue-router'


const home = () => import('../views/home/home')
const sort = () => import('../views/sort/sort')
const cart = () => import('../views/cart/cart')
const my = () => import('../views/my/my')
const Detail = () => import('../views/detail/Detail')


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:home
  },
  {
    path:'/sort',
    name:'sort',
    component: sort
  },
  {
    path:'/cart',
    name:'cart',
    component: cart
  },
  {
    path:'/my',
    name:'my',
    component: my
  },
  {
    path:'/detail/:iid',
    name:'Detail',
    component: Detail
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
