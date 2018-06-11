<template>
    <div class="city">
      <!--头部-->
       <CityHeader></CityHeader>
      <!--查询组件-->
       <Search  :cities="cities"></Search>
      <!--列表组件-->
       <List :letter="letter"  :cities="cities" :hostCities="hostCities"></List>
      <!--字母表-->
      <Alphabet @change="handleLetterChange" :cities="cities"></Alphabet>
    </div>
</template>

<script type="text/ecmascript-6">
  import axiso from 'axios'
  import CityHeader from './components/Header/Header.vue'
  import Search from './components/Search/Search.vue'
  import List from './components/List/List.vue'
  import Alphabet from './components/Alphabet/Alphabet.vue'
    export default {
        data(){
            return {
              cities:{},//城市
              hostCities:[], //热门城市
              letter:''
            }
        },
        methods: {
          //请求城市数据
          getCityInfo(){
            axiso.get('/api/city.json').then(this.handleGetCityInfoSucces)
          },
          handleGetCityInfoSucces(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data;
                this.cities = data.cities;
                this.hostCities = data.hotCities
            }
          },
          handleLetterChange(letter){
            //接受Alphabet子组件传递的字母参数 给data 在由父级传给List子组件
            this.letter = letter
            //console.log(letter)
          }
        },
        mounted(){
          this.getCityInfo()
        },
        computed: {},
        components: {
          CityHeader,
          Search,
          List,
          Alphabet
        }
    };
</script>
<style >

</style>
