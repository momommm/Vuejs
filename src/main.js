import Vue from 'vue'
import app from './app.vue'
// 导入手机端适配样式
import 'lib-flexible/flexible.js'

// 1.1 导入路由的包
import router from './router.js'
// 导入http模块的包
import http from './http.js'

Vue.prototype.$http = http


// 导入Mint-UI中组件
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

// 导入 Vant组件
import { Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, Image} from 'vant'
import 'vant/lib/index.css';
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Grid).use(GridItem).use(Image)

// import Vant from 'vant';
// import 'vant/lib/index.css';
//
// Vue.use(Vant);


const vm = new Vue({
    el: '#app',
    render: h => h(app),
    router
})

