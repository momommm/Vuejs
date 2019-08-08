# 移动端项目
```
练手用的小项目
```

## 1、制作首页APP组件
1. 在根组件中完成，Header区域 使用的是Mint-UI中 Header组件
2. 制作底部的 Tabbar 区域，使用的是Vant组件
3. 要做 跟组件中间，放置一个 router-view 展示路由匹配组件

## 2、改造 tabbar 为 router-link
+ 2.1 在van-tabbar中增加router属性
## 3、设置路由高亮

## 4、点击 tabber 中的路由链接，展示对应的路由组件

## 5、制作首页轮播图布局

## 6、加载首页轮播图数据
+ 获取数据，使用 vue-axios
+ 定义http文件
  http.js 
```bash
import axios from 'axios'


const http = axios.create({
    baseURL: 'http://www.liulongbin.top:3005/api/',
    headers: {'Content-Type': 'application/json'}
});


export default http
```
在main.js 中引用
```bash
import http from './http.js'

Vue.prototype.$http = http
```
引用后即可在对应组件中，已this.$http.get 直接使用http组件
+ 获取到数据后，保存在data身上
+ 使用v-for 循环渲染每个item项