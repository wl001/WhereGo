<template>
    <div>
        <Banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></Banner>
        <Header></Header>
        <List :list="list"></List>
        <div class="content"></div>

    </div>
</template>

<script type="text/ecmascript-6">
  import Banner from './components/Banner/banner.vue'
  import Header from './components/Header/header.vue'
  import List from './components/List/List.vue'
  import axios from 'axios'
    export default {
         name: 'Detail',
        data(){
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                list: []
            }
        },
        methods: {
          getDetailInfo(){
              axios.get('/api/detail.json',{
                params: {
                  id: this.$route.params.id
                }
              }).then(this.handleGetDataSuccess)
          },
          handleGetDataSuccess(res){
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.sightName = data.sightName
              this.bannerImg = data.bannerImg
              this.gallaryImgs = data.gallaryImgs
              this.list = data.categoryList
            }
          }
        },
        mounted(){
          this.getDetailInfo()
        },
        components: {
          Banner,
          Header,
          List
        }
    };
</script>
<style scoped>
  .content{
    height: 50rem;
  }
</style>
