import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../components/Index.vue')
    },
    {
      path: '/:id',
      name: 'Item',
      component: () => import('../components/Item.vue')
    }
  ]
})
