import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: () => import('./components/navcomp/navpage1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('./components/navcomp/navpage2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('./components/navcomp/navpage3.vue')
    },
    {
      path: '/page4',
      name: 'page4',
      component: () => import('./components/navcomp/navpage4.vue')
    },
    {
      path: '/page5',
      name: 'page5',
      component: () => import('./components/navcomp/navpage5.vue')
    },
  ]
})
