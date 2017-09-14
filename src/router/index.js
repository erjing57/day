import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import q1 from '@/components/q1'
import q2 from '@/components/q2'
import loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/q1/:id',
      name: 'q1',
      component: q1
    },
    {
      path: '/q2',
      name: 'q2',
      component: q2
    },
//  {
//    path: '/',
//    name: 'loading',
//    component: loading
//  }
  ]
})
