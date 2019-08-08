import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'



Vue.use(VueRouter)


var router = new VueRouter({
   routes: [
         { path: '/home', component: HomeContainer },
          { path: '/member', component: MemberContainer},
          { path: '/shopcar', component: ShopcarContainer},
          { path: '/search', component: SearchContainer},
   ]
});

export default router
