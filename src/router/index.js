import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Board',
      name: 'Board',
      component: Board
    }
  ]
})
