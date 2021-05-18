import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import register from '@/page/register'
import login from '../page/login'
import home from '../page/home'
import search from '../page/search'
import detail from '../page/detail'
import pay from '../page/pay'
import order from '../page/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
