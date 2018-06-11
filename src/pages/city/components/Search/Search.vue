<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword" >
        <ul>
          <li @click="handleCityClick(item.name)" class="search-item border-bottom" v-for="item of list" :key="item.id">
            {{item.name}}
          </li>
          <li class="search-item border-bottom" v-show="hasNoData">
            没有找到匹配数据
          </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
  import { mapMutations } from 'vuex'
    export default {
        props: {
          cities: Object
        },
        data(){
            return {
              keyword: '',
              list: [],
              timer: null
            }
        },
        computed: {
          hasNoData () {
            return !this.list.length
          }
        },
        watch:{
            keyword(){
              if (this.timer) {
                clearTimeout(this.timer)
              }
              if (!this.keyword) {
                this.list = []
                return
              }
              this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                  //循环字母中的键值对 能找到对应的spell和name数据 就添加到result数组中
                  this.cities[i].forEach((value) => {
                    if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                      result.push(value)
                    }
                  })
                }
                this.list = result
              },100)
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.search)
        },
        methods: {
          //有一个Mutations叫changeCity
          //然后把Mutations映射在这个组件里一个叫changeCity的方法里
          ...mapMutations(['changeCity']),
          handleCityClick(city){
            //等价于 this.$store.commit('changeCity',city);
            this.changeCity(city)
            this.$router.push('/')
          }
        }
    };
</script>
<style lang="less" scoped>
   @import "Search.less";
</style>
