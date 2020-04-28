import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/views/index'
import Layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [{
        path: 'index',
        name: 'Home',
        component: () => import('@/views/index')
      }]
    }
  ]
})
