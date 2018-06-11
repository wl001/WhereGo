/**
 * Created by 王磊 on 2018/6/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger';  // logger是一个日志插件
Vue.use(Vuex);

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

const state={
  city:defaultCity
};
//做限制 然后commit派发changeCity到 mutations
const actions = {
  changeCity(commit,city){
     this.commit('changeCity',city)
  }
};
const mutations = {
  changeCity(state,city){
    this.state.city = city;
    try{
      localStorage.city = city //存储城市
    }catch (e) {}
  }
}

const  store = new Vuex.Store({
  state,
  actions,
  mutations,
  plugins:[logger()],
  strict:true // 只能通过mutation(管理员)来更改状态，mutation不支异步
});

export default store

