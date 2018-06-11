<template>
    <div class="header">
      <div class="header_left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header_input">
        <span class="iconfont">&#xe632;</span>
        输入城市/经典/游玩主题</div>
      <router-link to="/city">
          <div class="header_right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
          </div>
      </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from  'vuex'
    export default {
        name:'HomeHeader',
        data(){
            return {}
        },
        methods: {},
        computed: {
          ...mapState(['city'])
        },
        components: {

        }
    };
</script>
<style lang="less">
  @import "Header.less";
</style>
