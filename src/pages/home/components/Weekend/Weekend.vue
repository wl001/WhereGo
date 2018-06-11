<template>
  <!--推荐页面-->
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-warp">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p  class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      weekendList:Array
    },
    data(){
      return {

      }
    },
    methods: {},
  };
</script>
<style lang="less" scoped>
  @import "weekend.less";
</style>
