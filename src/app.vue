<template>
    <div class="app-container">
        <mt-header fixed title="嗷嗷嗷"></mt-header>
        <router-view></router-view>
        <van-tabbar v-model="active" route>
          <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
          <van-tabbar-item icon="friends-o" to="/member">会员</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart-o" to="/shopcar">购物车</van-tabbar-item>
          <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style scoped>
.app-container{
    padding-top: 40px;
}
</style>