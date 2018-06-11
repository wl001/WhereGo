<template>
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
          swiperList:Array
        },
        data(){
            return {
              swiperOption: {
                autoplay:true,
                setWrapperSize :true,
                observeParents:true,
                pagination: {
                  el: '.swiper-pagination'
                }
              }
            }
        },
        computed: {
          showSwiper () {
            return this.swiperList.length
          }
        },
        methods: {},

    };
</script>
<style scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #fff
  }

  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 2rem;
    background: #eee;
  }
  .swiper-img{
    width: 100%;
    height: 2rem;
  }

</style>
