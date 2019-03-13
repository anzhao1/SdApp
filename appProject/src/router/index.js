import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Search from '@/components/Search'
import Employment from '@/components/Employment'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/employment',
      name: 'employment',
      component: Employment
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ],
  mode:'history'
})
