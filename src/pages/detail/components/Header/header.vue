<template>
    <div>
      <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div :style="opacityStyle" class="header-fixed" v-show="!showAbs">
        景点详情
        <router-link to="/">
          <div class="iconfont header-fixed-back" >&#xe624;</div>
        </router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
              showAbs:true,
              opacityStyle: {
                opacity: 0
              }
            }
        },
        methods: {
          handleScroll(){
            //获取滚动条带顶端的距离
            const top = document.documentElement.scrollTop
            if (top > 60) {
              let opacity = top / 140;
              opacity = opacity > 1 ? 1 : opacity
              this.opacityStyle = { opacity:opacity }
              this.showAbs = false
            } else {
              this.showAbs = true
            }
          }
        },
      //keep-alive多出来的钩子 只要页面展示就激活
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
        },
        unmounted () {
          window.removeEventListener('scroll', this.handleScroll)
        },
        computed: {},
        components: {}
    };
</script>
<style lang="less" scoped>
    @import "header.less";
</style>
