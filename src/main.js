import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
// FastClick 处理移动端click事件300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
