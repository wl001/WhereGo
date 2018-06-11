<template>
    <div>
      <div class="nav_icon">
        <swiper :options="swiperOption" v-if="iconList.length">
          <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page">
              <div class="icon-img">
                <img :src='item.imgUrl'>
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <ul class='groupCont'>
        <li class="left_tit">
          <span class="iconfont titleIcon">&#xe608;</span>定位失败
        </li>
        <li class="right_tit">
          <span  class="iconfont titleIcon">&#xe60a;</span>五折泡温泉
        </li>
      </ul>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
          iconList:Array
        },
        data(){
            return {
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination'
                }
              }
            }
        },
        computed: {
          pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
              //将一维数组变成二维数组 分页每页8个数据
              const page = Math.floor(index / 8)
              if (!pages[page]) {
                pages[page] = []
              }
              pages[page].push(item)
            });
            return pages
          }
      },
        methods: {},
        components: {}
    };
</script>
<style lang="less" scoped>
  @import './NavIcon.less';
</style>
<style scoped>
  .nav_icon >>> .swiper-container{
    width:100%;
    height: 4rem;
  }
</style>
