import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "@/views/home/home";
import category from "@/views/category/category";
import sort from "@/views/sort/sort";
import cart from "@/views/cart/cart";
import my from "@/views/my/my";


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component: category
  },
  {
    path:'/sort',
    component: sort
  },
  {
    path:'/cart',
    component: cart
  },
  {
    path:'/my',
    component: my
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
