import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/web',
      name: 'web',
      component: () => import('./views/web/index.vue'),
      children: [
        {
          path: 'ts',
          name: 'ts',
          component: () => import('./views/web/tsdemo/index.vue')
        },
        {
          path: 'vue',
          name: 'vue',
          component: () => import('./views/web/vue/index.vue')
        },
        {
          path: 'bt4',
          name: 'bt4',
          component: () => import('./views/web/bootstrap4/index.vue')
        },
        {
          path: '/layout',
          component: () => import('./views/web/layout/index.vue'),
          children: [
            {
              path: 'doc',
              component: () => import('./views/web/layout/doc.vue'),
            },
            {
              path: 'l1',
              component: () => import('./views/web/layout/l1.vue'),
            }
          ] 
        },
      ]
    }
  ]
})
