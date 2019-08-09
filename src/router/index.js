import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
const axios = require('axios')
import { SessionStorage } from 'quasar'

Vue.use(VueRouter)

/*
* If not building with SSR mode, you can
* directly export the Router instantiation
*/

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      axios.put('http://localhost:1337/signin', { email: SessionStorage.getItem('email')? SessionStorage.getItem('email').replace('__q_strn|', '') : null, password: SessionStorage.getItem('password')? SessionStorage.getItem('password').replace('__q_strn|', '') : null }).then(response => {
        next()
      }).catch(function (response) {
        next({
          path: '/signin',
          params: { nextUrl: to.fullPath }
        })
      })
    } else if (to.matched.some(record => record.meta.guest)) {
      axios.put('http://localhost:1337/isloggedin', { email: SessionStorage.getItem('email')? SessionStorage.getItem('email').replace('__q_strn|', '') : null, password: SessionStorage.getItem('password')? SessionStorage.getItem('password').replace('__q_strn|', '') : null }).then(response => {
        next({
          path: '/'
        })
      }).catch(function () {
        next()
      })
    } else {
      next()
    }
  })

  return Router
}
