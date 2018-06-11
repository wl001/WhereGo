<template>
   <!--推荐页面-->
    <div class="recommend">
      <div class="title">热销推荐</div>
      <ul>
        <router-link  :to="'/detail/'+item.id" tag="li" :key="item.id" class="item" v-for="item of recommendList">
           <img class="item-img" :src="item.imgUrl">
           <div class="item-info">
             <p class="item-title">{{item.title}}</p>
             <p  class="item-desc">{{item.desc}}</p>
             <button class="item-button">查看详情</button>
           </div>
        </router-link>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
          recommendList:Array
        },
        data(){
            return {

            }
        },
        methods: {},
    };
</script>
<style lang="less" scoped>
  @import "Recommend.less";
</style>
