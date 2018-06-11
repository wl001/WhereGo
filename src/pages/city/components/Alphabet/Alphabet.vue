<template>
  <!--字母表-->
    <div class="alphabet">
        <ul>
          <li  @click="handleLetterClick"
               @touchstart.prevent="handleTouchStart"
               @touchmove="handleTouchMove"
               @touchend="handleTouchEnd"
               class="item"  :ref="item" v-for="item of letters" :key="item">{{item}}
          </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
          cities:Object
        },
        computed:{
          letters(){ //将字母存到数组中['A','B','C']
              const letters = []
              for(let i in this.cities){
                letters.push(i)
              }
             return letters;
          }
        },
        data(){
          return {
              touchStatus:false, //滑动开始
              startY:0,
              timer: null
          }
        },
        updated(){//钩子函数 更改就触发
          this.startY =  this.$refs['A'][0].offsetTop
        },
        methods: {
          //点击的时候将当前字母传递给父组件
          handleLetterClick(e){
            this.$emit('change',e.target.innerText)
           // console.log(e.target.innerText)
          },
          //手指开始触摸
          handleTouchStart(){
            this.touchStatus = true
          },
          //手指滑动
          handleTouchMove(e){

            if(this.touchStatus){
              if(this.timer){
                  clearTimeout(this.timer)
              }
              //滑动字母表的时候方法触发的次数很多做个截留优化减少频率
              this.timer = setTimeout(()=>{
                //算出A字母高度离顶端的高度 offsetTop才能拿到元素距离顶部的高度
                const startY = this.$refs['A'][0].offsetTop ;//74
                //手指触摸的位置距离屏幕最顶部的位置的高度 减去蓝色区域
                const touchY = e.touches[0].clientY -79;
                //字母的下标 当前手指滑动的位置对应字母的下标是多少 20是字母的高度
                const index =Math.floor((touchY -startY) / 20)
                //console.log(startY,touchY,index)
                //传递当前手指触摸位置的字母
                if(index >= 0 && index < this.letters.length){
                  this.$emit('change',this.letters[index])
                }
              },16)
            }

          },
          handleTouchEnd(){
            this.touchStatus = false
          }
        },
        components: {

        }
    };
</script>
<style scoped>
  .alphabet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
  }
  .alphabet .item{
    line-height: .4rem;
    text-align: center;
    color: #00bcd4;
  }

</style>
