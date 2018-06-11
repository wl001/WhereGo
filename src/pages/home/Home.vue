<template>
    <div>
      <!--头部-->
        <HomeHeader ></HomeHeader>
      <!--轮播图组件-->
        <Swiper :swiperList="swiperList"></Swiper>
      <!--导航按钮组件-->
        <NavIcon :iconList="iconList"></NavIcon>
      <!--推荐组件-->
        <Recommend :recommendList="recommendList"></Recommend>
      <!--周末游-->
      <Weekend :weekendList="weekendList"></Weekend>
    </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from './components/Header/Header.vue'
  import Swiper from './components/Swiper/Swiper.vue'
  import NavIcon from './components/NavIcon/NavIcon.vue'
  import Recommend from './components/Recommend/Recommend.vue'
  import Weekend from './components/Weekend/Weekend.vue'
  import axios from 'axios'
  import { mapState } from 'vuex'
    export default {
        data(){
            return {
              swiperList:[],
              iconList:[],
              recommendList:[],
              weekendList:[],
              lastCity:''
            }
        },
        computed: {
          ...mapState(['city'])
        },

        methods: {
          getHomeInfo(){
            //axios基于promise
            axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSuccess)
          },
          //axios请求成功后的数据
          getHomeInfoSuccess(res){
            res = res.data;
            if(res.ret && res.data){
                const data = res.data;
                this.swiperList= data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList
            }
          }
        },
        mounted(){
          //对上一次加载的城市做一个保存 然后判断是否一样,不一样的话activated()钩子函数执行ajax请求
          this.lastCity = this.city;
          this.getHomeInfo();
        },
        activated(){
          //当用<keep-alive>缓存的时候 会出现新的钩子函数 activated
          //当页面重新被显示的时候一定会重新执行
          //当页面加载的时候 判断当前页面加载的城市和上一次页面加载的城市是否相同 如果不同就发送一次ajax请求
          if (this.lastCity !== this.city) {
            this.lastCity = this.city;
            this.getHomeInfo()
          }
        },
        components: {
          HomeHeader,
          Swiper,
          NavIcon,
          Recommend,
          Weekend
        }
    };
</script>
<style>


</style>
