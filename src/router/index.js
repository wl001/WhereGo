import Vue from 'vue'
import Router from 'vue-router'
//import City from '../pages/city/City.vue'
//import Detail from '../pages/detail/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: resolve => require(['../pages/home/Home.vue'], resolve)
    },{
    path: '/city',
    name: 'City',
    component: resolve => require(['../pages/city/City.vue'], resolve)
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: resolve => require(['../pages/detail/detail.vue'], resolve)
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
