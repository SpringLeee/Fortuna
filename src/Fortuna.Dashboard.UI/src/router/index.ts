import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import body from '../views/body.vue'
import index from '../views/index.vue'
import trace from '../views/trace.vue'
import topology from '../views/topology.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'body',
      component: body,
      children: [
        {
          path: '/',
          name:'index',
          component: index
        },
        {
          path: '/index',
          name:'index',
          component: index
        },
        {
          path: '/trace',
          name:'trace',
          component: trace
        },
        {
          path:'/topology',
          name:'topology',
          component:topology
        }
      ]
    }
  ]
})

export default router
