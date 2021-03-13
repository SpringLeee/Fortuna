import Vue from 'vue'
import Router from 'vue-router' 
import Layout from '@/components/layout' 
import Trace from '@/components/trace'
import Index from '@/components/Index'
import Relationship from '@/components/Relationship'

Vue.use(Router)


//push 
const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: '/trace',
          component: Trace
        },
        {
          path: '/relationship',
          component: Relationship
        } 
      ] 
    } 
  ]
})
