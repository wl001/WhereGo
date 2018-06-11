<template>
    <div class="container" @click="handleBannerClick">
      <div class="wrapper">
        <swiper :options="swiperOption" >
          <!-- slides -->
          <swiper-slide v-for="(item,index) of imgs" :key="index">
            <img class="gallary-img"  :src="item">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'vue-awesome-swiper'
    export default {
        props:{
          imgs:Array,
          default(){
            return []
          }
        },
        data(){
            return {
              swiperOption: {
                autoplay:true,
                observeParents: true,
                observer: true,
                pagination: {
                  el: '.swiper-pagination',
                  type: 'fraction',
                }
              }
            }
        },
        methods: {
          handleBannerClick(){
            this.$emit('close')
          }
        },
        computed: {},
        components: {}
    };
</script>
<style scoped>
  .container >>> .swiper-container{
    overflow: inherit
  }

  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
  }
  .container .wrapper{
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }
  .container .wrapper .gallary-img{
    width: 100%;
  }
  .container .wrapper .swiper-pagination{
    color: #fff;
    bottom: -1rem;
  }
</style>
