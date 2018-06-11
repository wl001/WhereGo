# wanglei
### 项目目录

```bash
├── build                                        // webpack配置文件
├── config                                       // 项目打包路径
├── dist                                         // 打包路径
├── src                                          // 源码目录
│   ├── assetc                                  // 静态数据
│   ├── common                                  // 组件
│   ├── pages                                   // 主体组件
│   │   ├── city                               // 城市列表
│   │   ├── detaile                            // 详情页
│   │   ├── home                               // 主页
│   ├── router
│   │   ├── router.js                          // 路由
│   ├── store                                   // vuex数据处理
│   │   ├── index.js
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                       // 静态资源文件
├── index.html                                   // 入口html文件
```
#### 项目运行
 ![image](https://github.com/wl001/WhereGo/blob/master/static/images/whereGo.gif)

1 处理移动端1像素边框问题 border.css
2 处理移动端click事件300毫秒延迟 npm install fastclick --save
3 插件的公共样式更改在当前页中style scope无法替换公共样式
- 解决方法 .wrapper >>> .swiper-pagination-bullet-active
- >>>的意思是样式穿透  wrapper子组件下的所有swiper-pagination-bullet-activ的样式就更改了
- 注意直接在less文件下写会报错 在style标签下在新写一个style标签
4 NavIcon.vue 按钮导航需要computed动态计算数据每页放八条数据 将一维数组变成二维数组
6 ajax数据请求
- axios.get('/static/mock/index.json').then()我们开发的时候都是本地模拟的接口地址，如果项目要上线需要替换成axios.get('/api/index.json').then()这种格式
- 解决办法 在开发环境中依然这么写 但是如果有个转发机制 可以把对api下边所有的json请求转发到本地的mock文件夹下
- webpack中提供了一个代理功能 config/index.js文件夹下 proxyTable{}
```bash
  proxyTable: {
      '/api':{
        //服务器接口
        target:'http://localhost:8080',
        //接下来希望做一个路径替换
        pathRewrite:{
        //一旦请求的地址是以API开头的那么就替换请求到/static/mock的文件夹下
        //当访问api的时候axios.get('/api/index.json')会自动帮你替换成axios.get('/static/mock/index.json')
          '^/api': '/static/mock'
        },
      }
    },
```

7 使用H5的localStorage 就在外边包裹try{ } catch{ } 因为在某些浏览器用户关闭了已储存的功能或者隐身模式有可能会导致浏览器抛出异常

8 因为切换路由的时候都要重新加载数据 我们在路由上加上<keep-alive></keep-alive>做一下数据缓存
- exclude="Detail" 也可以解决缓存 name为Detail的组件不缓存 挂载在export default {}中的name
```bash
 <keep-alive exclude="Detail">
    <router-view></router-view>
 </keep-alive>
```
- 但是我们切换首页会重新加载对应城市的数据,需要重新发送请求,但是keep-alive已经缓存数据不会在发起请求,闹我们怎么解决呢
- 不要慌,当我们使用keep-alive的时候会出现一个新的钩子函数 activated(){},这个钩子执行是在页面需要重新显示的时候执行
- deactivated(){}页面将要隐藏的时候执行
- 然后判断上一次的城市和新加载的城市是否一样,不一样则activated 发起ajax请求,一样就不会发起请求了
9 swiper隐藏在显示会高度出现问题  observeParents: true,observer: true,
10  window.addEventListener之后对全局事件进行解绑
11 递归组件
```bash
<template>
    <div>
      <div class="item" v-for="(item,index) of list" :key="index">
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div v-if="item.children"  class="item-chilren" >
            //组件调用自身
            <DetailList :list="item.children"></DetailList>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    //每个组件的名字都是递归组件的时候使用调用自身
        name: 'DetailList',
        props:{
          list:Array,
        }
    };
```
## 解决bug
- 多页面之间拖动会受到影响 再次进入别的页面滚动条会在最底部 添加到路由上
```bash
scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
```
## 前后端联调
- 当请求后台数据的时候需要把本地模拟的数据删除掉 然后更改 config/index.js
- 这种情况是后端服务业存在本地
```bash
  proxyTable: {
    '/api':{
      target:'http://localhost:80',
    }
  },
```
- 那么后端不再本地 在后端人员自己的电脑上或者是外网、内外的服务器上的情况下该如何让解决呢
```bash
 proxyTable: {
    '/api':{
      target:'http://localhost:80',//更改成ip或者外网域名
    }
  },
```
### 真机测试
- 查看本地ip地址 cmd  ipconfig查看本地地址替换localhost  http://10.10.140.106:8080/#
- 要想可以查看项目 需要在package的dev中增加 --host 0.0.0.0 即可然后和手机同一局域网内登陆ip即可或者生成二维码扫描
- 有的手机版本低不支持promise;安装并引入import 'babel-polyfill'
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
