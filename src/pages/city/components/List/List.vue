<template>
  <!--列表布局-->
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div @click="handleCityClick(item.name)" class="button-wrapper" v-for="item of hostCities" :key="item.id">
              <div  class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <!--城市列表-->
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list" v-for="innerItem of item">
            <div @click="handleCityClick(innerItem.name)"  class="item  border-bottom" :key="innerItem.id">{{innerItem.name}} </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll' //滚动依赖
    import { mapState, mapMutations } from 'vuex'
    export default {
        props: {
          hostCities: Array,
          cities: Object,
          letter: String
        },
        watch:{//监听字母变化
          letter(){
            if (this.letter) {
              //点击字母 滚动到对应字母位置
              this.$nextTick(function(){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element,{
                  click:true
                })
              })

            }
          }
        },
        mounted(){
          this.$nextTick(() => {
              this._initScroll()
          })
        },
        methods: {
          _initScroll(){
              this.scroll = new Bscroll(this.$refs.wrapper,{
                click:true,
              })
          },
          //有一个Mutations叫changeCity
          //然后把Mutations映射在这个组件里一个叫changeCity的方法里
          ...mapMutations(['changeCity']),
          handleCityClick(city){
              //等价于 this.$store.commit('changeCity',city);
              this.changeCity(city)
              this.$router.push('/')
          },

        },
        computed: {
          ...mapState(['city'])
        },
        components: {}
    };
</script>
<style lang="less" scoped>
  @import './List.less';
</style>
