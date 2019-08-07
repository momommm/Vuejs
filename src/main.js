import Vue from 'vue'
import app from './app.vue'

// 导入Mint-UI中组件
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

// 导入 Vant组件
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css';
Vue.use(Tabbar).use(TabbarItem);


const vm = new Vue({
    el: '#app',
    render: h => h(app)
})