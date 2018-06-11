<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont  banner-icon">&#xe678;</span>
          {{imgLength}}
        </div>
      </div>
    </div>
    <commonGallary @close="handleGallaryClose" :imgs="bannerImgs" v-show="showGallary"></commonGallary>
  </div>

</template>
<script type="text/ecmascript-6">
  import commonGallary from '../../../../common/gallary/gallary.vue'
    export default {
      props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
      },
        computed:{
          imgLength(){
            return this.bannerImgs.length
          }
        },
        data(){
            return {
              showGallary:false,
            }
        },
        methods: {
          handleBannerClick(){
            this.showGallary = true
          },
          handleGallaryClose(){
            this.showGallary = false
          }
        },
        components: {
          commonGallary
        }
    };
</script>
<style lang="less" scope>
    @import "banner.less";
</style>
