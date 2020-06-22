import Vue from 'vue'
import Router from 'vue-router'
import department from './components/department.vue'
import show from './components/show.vue'
import add from './components/add.vue'
import update from './components/update.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: department
    },
    {
      path: '/department',
      component: department
    },
    {
      path: '/show',
      component: show
    },
    {
      path: '/add',
      component: add
    },
    {
      path: '/update',
      component: update
    }
  ]
})
